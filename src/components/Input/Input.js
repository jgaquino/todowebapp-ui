import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, onEnterNewData }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (!(e.key === "Enter")) return;
      if (content === "") return;
      onEnterNewData(content);
      setContent("");
    };

    inputRef.current.addEventListener("keypress", callback);
    return () => inputRef.current?.removeEventListener("keypress", callback);
  }, [content, onEnterNewData]);

  return (
    <input
      value={content}
      onChange={(e) => setContent(e.target.value)}
      ref={inputRef}
      className={styles.Input}
      placeholder={placeholder}
    />
  );
};

export default Input;
