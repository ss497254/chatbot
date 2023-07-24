import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useClientOnly } from "src/hooks/useClientOnly";

interface ChatBotProps extends React.PropsWithChildren {}

export const ChatBot: React.FC<ChatBotProps> = () => {
  const [open, setOpen] = useState(false);
  const isMounted = useClientOnly();

  if (!isMounted) return null;

  return createPortal(
    <div className="absolute bottom-10 right-10">
      {open && (
        <div
          className={["bg-white p-6 rounded-lg modal-container r"].join(" ")}
          onClick={(e) => e.stopPropagation()}
        ></div>
      )}
      <button onClick={() => setOpen(open)}>
        <img src="/logo.png" className="h-12 w-12" />
      </button>
    </div>,
    document.querySelector("body")!
  );
};
