import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`w-full border border-gray-300 rounded-md px-4 py-2${className}`}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
