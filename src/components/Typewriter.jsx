import React, { useState, useEffect } from "react";

const Typewriter = ({ toRotate, period }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const handleTick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      setText((prevText) =>
        isDeleting
          ? fullTxt.substring(0, prevText.length - 1)
          : fullTxt.substring(0, prevText.length + 1)
      );

      if (!isDeleting && text === fullTxt) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        setDelta(200 - Math.random() * 100);
      }
    };

    const timer = setTimeout(handleTick, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, delta, loopNum, toRotate, period]);

  return (
    <span className="typewrite">
      <span className="wrap">{text}</span>
    </span>
  );
};

export default Typewriter;
