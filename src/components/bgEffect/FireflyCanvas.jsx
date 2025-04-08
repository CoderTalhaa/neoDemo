"use client";
import React, { useEffect, useRef } from "react";

export default function FireflyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
      }

      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
      }

      show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3";
        c.fill();
      }
    }

    let fireflies = [];

    function draw() {
      if (fireflies.length < 100) {
        for (let j = 0; j < 10; j++) {
          fireflies.push(new Firefly());
        }
      }

      for (let i = 0; i < fireflies.length; i++) {
        fireflies[i].move();
        fireflies[i].show();
        if (
          fireflies[i].x < 0 ||
          fireflies[i].x > w ||
          fireflies[i].y < 0 ||
          fireflies[i].y > h
        ) {
          fireflies.splice(i, 1);
        }
      }
    }

    function loop() {
      c.clearRect(0, 0, w, h);
      draw();
      requestAnimationFrame(loop);
    }

    loop();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Blur effect
    canvas.style.filter = "blur(1px)";

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
