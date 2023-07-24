import React, { memo } from "react";
import { IMessage } from "../../types/IMessage";
import Style from "./style.module.css";

interface props extends IMessage {
  dir: "left" | "right";
}

const dirClassNames = {
  left:
    "mr-auto bg-indigo-500 text-indigo-500 [&>*]:text-white " + Style["tick-l"],
  right:
    "ml-auto text-zinc-100 bg-zinc-100 [&>*]:text-black " + Style["tick-r"],
};

export const MessageBox: React.FC<props> = memo(
  ({ content, dir, timestamp }) => {
    return (
      <div
        className={[
          "max-w-[80%] p-3 whitespace-pre-wrap mx-3 my-1.5 relative rounded-md outline-none",
          dirClassNames[dir],
        ].join(" ")}
      >
        <p className="overflow-x-hidden text-sm hover:break-words text-ellipsis">
          {content}
        </p>
        <div className="mt-2 -mb-2 -mr-1 text-xs text-right">
          {new Date(timestamp).toTimeString().substring(0, 5)}
        </div>
      </div>
    );
  }
);
