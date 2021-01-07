import React, { useRef, useEffect, useState } from 'react'

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

    let mouseX = 0
    let mouseY = 0
    let cycle = 0

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const interval = setInterval(() => {
            if (!canvasRef.current) return
            // console.log('interval coord', mouseX, mouseY)

            // okay so have coords

            // now make a rotating pixel around the coords

            // pixel position = (coord) + (vector for )
            // need to refresh on the math lmao
            // look at some steps for axe in dark squares


            // ctx.clearRect(0, 0, canvas.width, canvas.height)
            // ctx.fillStyle = '#000000'
            // ctx.beginPath()
            // ctx.arc(50, 100, 20, 0, 2*Math.PI)
            // ctx.fill()
        }, 32)

        return () => clearInterval(interval)
    }, [])

    const mouseMove = (evt) => {
        if (!canvasRef.current) return
        const { x, y } = getMousePos(canvasRef.current, evt)
        mouseX = x
        mouseY = y
    }
    
    return <canvas className="overlay" ref={canvasRef} onMouseMove={mouseMove} />
}

export default Overlay