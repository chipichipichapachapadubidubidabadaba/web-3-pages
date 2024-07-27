"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const [Ax, setAx] = useState(0);
  const [Ay, setAy] = useState(0);
  const [Bx, setBx] = useState(0);
  const [By, setBy] = useState(0);
  const [Cx, setCx] = useState(0);
  const [Cy, setCy] = useState(0);
  const threepoints = (event: React.FormEvent<HTMLFormElement>) => {
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
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const threesides = (event: React.FormEvent<HTMLFormElement>) => {
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
    } else if ((a < 0 || b < 0 || c < 0) && a != 0 && b != 0 && c != 0) {
      alert(
        `The side of a triangle cannot be negative, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
      );
    } else {
      alert(
        `The side of a triangle cannot be 0 or negative, if you need to go to a mental hospital, please press the button "Take me to a mental hospital"`
      );
    }
  };
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const findside = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (A == 0 && B!=0 && B!=0) {
      var ans = Math.sqrt(C * C - B * B);
      alert(`a = ${ans}`);
    } else if (B == 0 && B!=0 && B!=0) {
      var ans = Math.sqrt(C * C - A * A);
      alert(`b = ${ans}`);
    } else if (C == 0 && B!=0) {
      var ans = Math.sqrt(A * A + B * B);
      alert(`c = ${ans}`);
    }
  };

  const links = [
    { href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", label: "Rickroll" },
    {
      href: "https://www.tiktok.com/@modern.home365/video/7367379584578407726?lang=en",
      label: "Home Design",
    },
    {
      href: "https://www.youtube.com/watch?v=sYmOR_yTPv4",
      label: "Skibidi toilet",
    },
  ];

  const router = useRouter();

  const handleRandomLinkButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    router.push(links[randomIndex].href);
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
              onChange={(e) => setAx(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="A y"
              value={Ay}
              onChange={(e) => setAy(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="flex flex-row">
          <label>
            <input
              type="number"
              placeholder="B x"
              value={Bx}
              onChange={(e) => setBx(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="B y"
              value={By}
              onChange={(e) => setBy(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="flex flex-row">
          <label>
            <input
              type="number"
              placeholder="C x"
              value={Cx}
              onChange={(e) => setCx(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="C y"
              value={Cy}
              onChange={(e) => setCy(Number(e.target.value))}
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
              onChange={(e) => seta(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="b"
              value={b}
              onChange={(e) => setb(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="c"
              value={c}
              onChange={(e) => setc(Number(e.target.value))}
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
        will be calculated. (leave the side you want to be calculated to 0s
        blank)
      </h1>
      <br />
      <form onSubmit={findside}>
        <div className="flex flex-row">
          <input
            type="number"
            placeholder="a"
            value={A}
            onChange={(e) => setA(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="b"
            value={B}
            onChange={(e) => setB(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="c"
            value={C}
            onChange={(e) => setC(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <br />
          <input type="submit" value="Calculate" className="button" />
        </div>
      </form>
      <br />
      <div>
        <button onClick={handleRandomLinkButtonClick} className="troll big">
          Take me to a mental hospital
        </button>
      </div>
    </main>
  );
}

export default Home;
