import React, { useRef } from "react";
import { SendIcon, Spinner } from "src/ChatBot/icons";
import { ExpandingTextArea } from "./ExpandingTextArea";
import { IconButton } from "./IconButton";

interface props {
  submitting?: boolean;
  onSubmit: (message: string) => void;
}

export const MessageInputBar: React.FC<props> = ({ onSubmit, submitting }) => {
  const ref = useRef<HTMLSpanElement>(null);

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
        className="!p-2 ml-3 hover:rounded-full h-fit bg-zinc-100"
      >
        {submitting ? <Spinner /> : <SendIcon size={22} />}
      </IconButton>
    </div>
  );
};
