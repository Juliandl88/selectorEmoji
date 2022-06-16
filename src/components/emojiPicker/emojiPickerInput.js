import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

import styles from "./emojiPicker.module.css";

export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div className={styles.inputContainer}>
      <input ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  );
}