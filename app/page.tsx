"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function Home() {
  const [Ax, setAx] = useState("");
  const [Ay, setAy] = useState("");
  const [Bx, setBx] = useState("");
  const [By, setBy] = useState("");
  const [Cx, setCx] = useState("");
  const [Cy, setCy] = useState("");
  const threepoints = (event) => {
    event.preventDefault();
    var AB = (Ax - Bx) * (Ax - Bx) + (Ay - By) * (Ay - By);
    var BC = (Cx - Bx) * (Cx - Bx) + (Cy - By) * (Cy - By);
    var AC = (Ax - Cx) * (Ax - Cx) + (Ay - Cy) * (Ay - Cy);
    if (AB == BC + AC || BC == AB + AC || AC == AB + BC) {
      alert(`It is a right-angled triangle!`);
    } else {
      alert(`It not a right-angled triangle!`);
    }
  };
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const threesides = (event) => {
    event.preventDefault();
    if (a > 0 && b > 0 && c > 0) {
      if (a + b > c && a + c > b && c + b > a) {
        if (
          a * a == b * b + c * c ||
          b * b == a * a + c * c ||
          c * c == a * a + b * b
        ) {
          alert(`It is a right-angled triangle!`);
        } else {
          alert(`It not a right-angled triangle!`);
        }
      } else {
        alert(
          `The sum of any 2 sides of a trianlge must be more than the other side, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
        );
      }
    } else if ((a == 0 || b == 0 || c == 0) && a >= 0 && b >= 0 && c >= 0) {
      alert(
        `The side of a triangle cannot be 0, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
      );
    } else if ((a < 0 || b < 0 || c < 0) && a != 0 && a != 0 && a != 0) {
      alert(
        `The side of a triangle cannot be negative, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
      );
    } else {
      alert(
        `The side of a triangle cannot be 0 or negative, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
      );
    }
  };
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const findside = (event) => {
    event.preventDefault();
    if (A == 0) {
      var ans = Math.sqrt(C * C - B * B);
      alert(`a = ${ans}`);
    } else if (B == 0) {
      var ans = Math.sqrt(C * C - A * A);
      alert(`b = ${ans}`);
    } else if (C == 0) {
      var ans = Math.sqrt(A * A + B * B);
      alert(`c = ${ans}`);
    }
  };
  return (
    <main
      className="flex items-center justify-center h-screen flex-col"
      style={{ backgroundColor: "#55AAFF" }}
    >
      <title>Pythagoras Theorem!</title>
      <h1 className="big">Pythagoras Theorem!</h1>
      <Image
        alt="error"
        src="/pythagoras-removebg-preview.png"
        height={270}
        width={360}
      />
      <br />
      <h1 className="medium">
        Enter the x,y coordinates of the points A, B and C and it will be
        calculated if this is an right-angled triangle!
      </h1>
      <br />
      <form onSubmit={threepoints}>
        <div className="flex flex-row">
          <label>
            <input
              type="number"
              placeholder="A x"
              value={Ax}
              onChange={(e) => setAx(e.target.value)}
            />
            <input
              type="number"
              placeholder="A y"
              value={Ay}
              onChange={(e) => setAy(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-row">
          <label>
            <input
              type="number"
              placeholder="B x"
              value={Bx}
              onChange={(e) => setBx(e.target.value)}
            />
            <input
              type="number"
              placeholder="B y"
              value={By}
              onChange={(e) => setBy(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-row">
          <label>
            <input
              type="number"
              placeholder="C x"
              value={Cx}
              onChange={(e) => setCx(e.target.value)}
            />
            <input
              type="number"
              placeholder="C y"
              value={Cy}
              onChange={(e) => setCy(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-col">
          <br />
          <input type="submit" value="Calculate" className="button" />
        </div>
      </form>
      <br />
      <h1 className="medium">
        Alternatively, you can enter the length of the 3 sides
      </h1>
      <br />
      <form onSubmit={threesides}>
        <label>
          <div className="flex flex-row">
            <input
              type="number"
              placeholder="a"
              value={a}
              onChange={(e) => seta(e.target.value)}
            />
            <input
              type="number"
              placeholder="b"
              value={b}
              onChange={(e) => setb(e.target.value)}
            />
            <input
              type="number"
              placeholder="c"
              value={c}
              onChange={(e) => setc(e.target.value)}
            />
          </div>
        </label>
        <div className="flex flex-col">
          <br />
          <input type="submit" value="Calculate" className="button" />
        </div>
      </form>
      <br />
      <h1 className="medium">
        You can enter the length of 2 sides and the length of the third side
        will be calculated. (leave the side you want to be calculated to be blank)
      </h1>
      <br />
      <form onSubmit={findside}>
        <div className="flex flex-row">
          <input
            type="number"
            placeholder="a"
            value={A}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="number"
            placeholder="b"
            value={B}
            onChange={(e) => setB(e.target.value)}
          />
          <input
            type="number"
            placeholder="c"
            value={C}
            onChange={(e) => setC(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <br />
          <input type="submit" value="Calculate" className="button" />
        </div>
      </form>
      <br />
      <h1 className="rickroll big"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Take me to a mental hospital</a></h1>
    </main>
  );
}

export default Home;
