import React, { useEffect, useRef, useState } from "react";
import { SendIcon, Spinner } from "src/ChatBot/icons";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "../IconButton";
import { useMessageStore } from "../../stores/useMessagesStore";

export const MessageInputBar = () => {
  const { addMessage } = useMessageStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  const onSubmit = () => {
    if (isSubmitting) return;

    addMessage({
      content: ref.current?.innerText || "(empty)",
      author: "User",
    });

    if (ref.current) {
      ref.current.innerText = "";
      ref.current.focus();
    }
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    };

    ref.current?.addEventListener("keydown", fn);
    return () => ref.current?.removeEventListener("keydown", fn);
  }, []);

  return (
    <div className="flex items-end p-3 px-4 border-t">
      <ExpandingTextArea ref={ref} />
      <IconButton
        onClick={onSubmit}
        className="!p-2 ml-3 hover:rounded-full duration-200 h-fit bg-zinc-100 hover:bg-blue-500 hover:text-white"
      >
        {isSubmitting ? <Spinner /> : <SendIcon size={22} />}
      </IconButton>
    </div>
  );
};
