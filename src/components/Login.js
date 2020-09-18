import React from "react";

function LastLogin({ milliseconds }) {
  const d = new Date(milliseconds);
  const result =
    d.toDateString(milliseconds) + " " + d.toLocaleTimeString(milliseconds);
  return <div className="login">Last Login: {result}</div>;
}

export default LastLogin;
