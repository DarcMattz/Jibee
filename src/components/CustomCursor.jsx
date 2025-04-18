import { useEffect, useState } from "react";
import pointer from "../assets/pointer.png";
import arrow from "../assets/arrow.png";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const tag = e.target.tagName.toLowerCase();
      const clickableTags = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "label",
      ];

      if (
        clickableTags.includes(tag) ||
        e.target.getAttribute("role") === "button" ||
        e.target.onclick ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return isVisible ? (
    <>
      {/* Big Blur Shadow */}

      <div
        className="pointer-events-none fixed z-40 w-52 h-52 rounded-full bg-white opacity-70 blur-[150px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
      {/* Actual Cursor Image */}
      {/* <img
        src={isPointer ? pointer : arrow}
        alt="custom cursor"
        className="pointer-events-none fixed top-0 left-0 z-50 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          top: `${position.y + 15}px`,
          left: `${position.x + 7}px`,
        }}
      /> */}
    </>
  ) : null;
}
