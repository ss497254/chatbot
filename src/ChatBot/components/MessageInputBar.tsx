import React, { useEffect, useRef } from "react";
import { SendIcon, Spinner } from "src/ChatBot/icons";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  submitting?: boolean;
  onSubmit: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSubmit, submitting }) => {
  const ref = useRef<HTMLSpanElement>(null);

  // focus textarea on mount
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex items-end p-3 px-4 border-t">
      <ExpandingTextArea name="message" ref={ref} />
      <IconButton
        onClick={() => {
          if (submitting) return;

          onSubmit(ref.current?.innerText || "(empty)");

          if (ref.current) {
            ref.current.innerText = "";
            ref.current.focus();
          }
        }}
        className="!p-2 ml-3 hover:rounded-full duration-200 h-fit bg-zinc-100 hover:bg-blue-500 hover:text-white"
      >
        {submitting ? <Spinner /> : <SendIcon size={22} />}
      </IconButton>
    </div>
  );
};
