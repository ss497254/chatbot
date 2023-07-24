import React, { forwardRef } from "react";

export interface TextAreaProps extends React.ComponentPropsWithoutRef<"span"> {}

export const ExpandingTextArea = forwardRef<HTMLSpanElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref as any}
        className="whitespace-pre-line max-h-[240px] bg-zinc-100 px-3 py-2 rounded overflow-auto w-full focus:outline-none"
        style={{
          resize: "none",
        }}
        contentEditable
        {...props}
      />
    );
  }
);

ExpandingTextArea.displayName = "TextArea";
