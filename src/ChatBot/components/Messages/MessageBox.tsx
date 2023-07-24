import React, { memo } from "react";
import { IMessage } from "../../types/IMessage";
import Style from "./style.module.css";
import { TypeMessage } from "./TypeMessage";

interface props extends IMessage {
  dir: "left" | "right";
}

const dirClassNames = {
  left: "mr-auto text-zinc-100 bg-zinc-100 [&>*]:text-black " + Style["tick-l"],
  right:
    "ml-auto bg-indigo-500 text-indigo-500 [&>*]:text-white " + Style["tick-r"],
};

export const MessageBox: React.FC<props> = memo(
  ({ content, dir, timestamp, author }) => {
    return (
      <div
        className={[
          "max-w-[80%] p-3 whitespace-pre-wrap mx-3 my-1.5 relative rounded-md outline-none",
          dirClassNames[dir],
        ].join(" ")}
      >
        <p className="overflow-x-hidden text-sm hover:break-words text-ellipsis">
          {author === "Bot" ? (
            <TypeMessage words={content.split(" ")} />
          ) : (
            content
          )}
        </p>
        <div className="mt-2 -mb-2 -mr-1 text-xs text-right">
          {new Date(timestamp).toTimeString().substring(0, 5)}
        </div>
      </div>
    );
  }
);

export const LoadingMessage = () => (
  <div
    className={[
      "py-4 px-6 m-3 rounded-md w-fit relative",
      dirClassNames.left,
    ].join(" ")}
  >
    <div className={Style.load}>
      <div
        className={
          "bg-zinc-400 rounded-full h-2.5 w-2.5 m-0.5 " + Style["line-1"]
        }
      ></div>
      <div
        className={
          "bg-zinc-400 rounded-full h-2.5 w-2.5 m-0.5 " + Style["line-2"]
        }
      ></div>
      <div
        className={
          "bg-zinc-400 rounded-full h-2.5 w-2.5 m-0.5 " + Style["line-3"]
        }
      ></div>
    </div>
  </div>
);
