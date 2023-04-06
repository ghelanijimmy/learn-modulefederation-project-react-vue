import React, { FC } from "react";

export const AppMarkers: FC<{ appTitle: string }> = ({
  appTitle,
  children,
}) => {
  return (
    <div style={{ border: "1px solid black", position: "relative" }}>
      <div>
        <div
          style={{
            position: "sticky",
            top: "0",
            right: "1em",
            background: "#333",
            color: "white",
            padding: "1em",
            textAlign: "center",
          }}
        >
          {appTitle}
        </div>
      </div>
      {children}
    </div>
  );
};
