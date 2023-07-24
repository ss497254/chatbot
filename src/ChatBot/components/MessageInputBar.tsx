import React, { useEffect, useRef } from "react";
import { SendIcon, Spinner } from "src/ChatBot/icons";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  submitting?: boolean;
  onSend: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSend, submitting }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const onSubmit = () => {
    if (submitting) return;

    onSend(ref.current?.innerText || "(empty)");

    if (ref.current) {
      ref.current.innerText = "";
      ref.current.focus();
    }
  };

  useEffect(() => {
    // focus textarea on mount
    ref.current?.focus();

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
        {submitting ? <Spinner /> : <SendIcon size={22} />}
      </IconButton>
    </div>
  );
};
