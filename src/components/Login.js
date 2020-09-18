import React from "react";

function Login({ milliseconds }) {
  const d = new Date(milliseconds);
  const result =
    d.toDateString(milliseconds) + " " + d.toLocaleTimeString(milliseconds);
  return (
    <div className="login">
      <div>Last Login: {result}</div>
    </div>
  );
}

export default Login;
