import React, { useRef, useEffect, useState } from 'react'
import Victor from 'victor'

import './Overlay.css'

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
}



const Overlay = () => {
    const canvasRef = useRef(null)

    let thingX = 0
    let thingY = 0
    let mouseX = 0
    let mouseY = 0
    let cycle = 0
    let direction = new Victor(0, 0).normalize()
    let radius = 10
    let rotation = .2
    let thingSize = 100
    let prevX = 0 // optimize +_+
    let prevY = 0
    let stop = false

    let rotationCycles = [0.1, -0.1]
    let i = 0
    

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const interval = setInterval(() => {
            if (!canvasRef.current || stop) return
            // is this too expensive?
            // https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport
            if (canvas.width != window.innerWidth) canvas.width = window.innerWidth
            if (canvas.height != window.innerHeight) canvas.height = window.innerHeight

            // need to have a switch here based on (i) so can do things other than rotate (this is for rem)

            direction.rotate(rotationCycles[i]).normalize()

            prevX = thingX
            prevY = thingY

            thingX = mouseX + radius * direction.x + cycle * direction.x
            thingY = mouseY + radius * direction.y + cycle * direction.y

            cycle += 1
            if (cycle >= 1000) cycle = 0

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            // ctx.clearRect(prevX, prevY, thingSize, thingSize)
            ctx.fillStyle = '#ffcc00'
            ctx.fillRect(thingX - thingSize / 2, thingY - thingSize / 2, thingSize, thingSize)
        }, 64)

        return () => clearInterval(interval)
    }, [])

    const mouseMove = (evt) => {
        if (!canvasRef.current) return
        const { x, y } = getMousePos(canvasRef.current, evt)
        mouseX = x
        mouseY = y
    }

    const click = () => {
        // stop = !stop
        thingX = mouseX
        thingY = mouseY
        cycle = 0

        if (i + 1 >= rotationCycles.length) i = 0
        else i += 1
    }

    console.log('?', window, document)
    
    return <canvas id="canvas" className="overlay" ref={canvasRef} onMouseMove={mouseMove} onClick={click} />
}

export default Overlay