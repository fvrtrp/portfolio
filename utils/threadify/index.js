"use client"
import React, { useState, useEffect } from "react";
import './index.css'

export default function Threadify(props) {
  const { text = "fvrtrp", multiplier = 10 } = props;
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
    threadify(text);
  }, []);

  function threadify(text) {
    const parent = document.querySelector(".threadify");
    parent.innerHTML = ``;
    const chars = text.split("");
    for (let i = 0; i < chars.length; i++) {
      const xDiv = document.createElement("div");
      xDiv.className = `x x-${i}`;
      for (let j = 0; j < multiplier; j++) {
        const zDiv = document.createElement("div");
        zDiv.innerText = chars[i];
        zDiv.className = `char x-${i} z-${j} float-${j} ${
          j > 0 ? "shadow" : "main"
        }`;
        // zDiv.style.filter = `blur(${j * 5}px)`;
        const opacityMultiplier = parseFloat(`0.${j}`);
        zDiv.style.opacity = `${1 - opacityMultiplier}`;
        xDiv.appendChild(zDiv);
        setTimeout(
          () => {
            zDiv.classList.add("float");
          },
          //j * 1000 + i * 1000
          Math.floor(Math.random() * 7000 + j * 500)
        );
      }
      parent.appendChild(xDiv);
    }
  }

  return <div className="threadify"></div>;
}
