import React, { FC, forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement | null, {}>(
  function Container({ children }, ref) {
    return (
      <div
        ref={ref}
        style={{
          width: `100%`,
          height: `100%`,
        }}
      >
        {children}
      </div>
    );
  }
);
