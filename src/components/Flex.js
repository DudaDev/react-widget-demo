import React from "react";

const Flex = ({ column, children, style = {}, ...props }) => (
  <div
    style={{
      display: "flex",
      flexDirection: column ? "column" : undefined,
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export default Flex;
