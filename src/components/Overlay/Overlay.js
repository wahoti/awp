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
    let radius = 64
    let rotation = .2
    let thingSize = 10
    let freeze = false
    let freezeX = 0
    let freezeY = 0
    let prevX = 0 // optimize +_+
    let prevY = 0

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const interval = setInterval(() => {
            if (!canvasRef.current) return
            // is this too expensive?
            // https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport
            if (canvas.width != window.innerWidth) canvas.width = window.innerWidth
            if (canvas.height != window.innerHeight) canvas.height = window.innerHeight

            direction.rotate(rotation).normalize()

            prevX = thingX
            prevY = thingY

            if (freeze) {
                thingX = freezeX + radius * direction.x
                thingY = freezeY + radius * direction.y
            } else {
                thingX = mouseX + radius * direction.x
                thingY = mouseY + radius * direction.y
            }

            // ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.clearRect(prevX, prevY, thingSize, thingSize)
            ctx.fillStyle = '#ffcc00'
            ctx.fillRect(thingX, thingY, thingSize, thingSize)
        }, 32)

        return () => clearInterval(interval)
    }, [])

    const mouseMove = (evt) => {
        if (!canvasRef.current) return
        const { x, y } = getMousePos(canvasRef.current, evt)
        mouseX = x
        mouseY = y
    }

    console.log('?', window, document)
    
    return <canvas id="canvas" className="overlay" ref={canvasRef} onMouseMove={mouseMove} />
}

export default Overlay