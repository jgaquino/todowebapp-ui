import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, onEnterNewData, onChange, ...res }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if (!(e.key === "Enter")) return;
      if (content === "") return;
      onEnterNewData && onEnterNewData(content);
      setContent("");
    };

    inputRef.current.addEventListener("keypress", callback);
    return () => inputRef.current?.removeEventListener("keypress", callback);
  }, [content, onEnterNewData]);

  useEffect(() => onChange && onChange(content), [content]);

  return (
    <input
      value={content}
      onChange={(e) => setContent(e.target.value)}
      ref={inputRef}
      className={styles.Input}
      placeholder={placeholder}
      {...res}
    />
  );
};

export default Input;
