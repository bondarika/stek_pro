import React, { useEffect, useState } from "react";

const Typewriter = ({
  texts,
  period = 1500,
  typingSpeed = 166,
  deleteSpeed = 28,
}) => {
  const [text, setText] = useState(""); // Текущий текст
  const [isDeleting, setIsDeleting] = useState(false); // Режим удаления
  const [loopNum, setLoopNum] = useState(0); // Индекс текущей строки
  const [currentSpeed, setCurrentSpeed] = useState(false); // Текущая скорость

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length; // Циклический перебор строк
      const fullText = texts[i];

      if (isDeleting) {
        // Удаление текста
        setText((prev) => fullText.substring(0, prev.length - 1));
        setCurrentSpeed(deleteSpeed); // Используем скорость удаления
      } else {
        // Печать текста
        setText((prev) => fullText.substring(0, prev.length + 1));
        setCurrentSpeed(typingSpeed); // Используем скорость печати
      }

      if (!isDeleting && text === fullText) {
        // Когда текст напечатан полностью
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        // Когда текст полностью стерт
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);

    return () => clearTimeout(timer); // Очистка таймера при обновлении
  }, [
    text,
    isDeleting,
    loopNum,
    texts,
    currentSpeed,
    period,
    typingSpeed,
    deleteSpeed,
  ]);

  return (
    <span className="typewrite">
      <span className="wrap">
        {text}
        <span>
          |
        </span>
      </span>
    </span>
  );
};

export default Typewriter;
