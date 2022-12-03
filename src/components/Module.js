import React from "react";
import secretData from "./AwsSecrets";

export default function Module() {
  const data = () => {
    let a = 1 + 2;
    console.log(a);
    const handler = async () => {
      let data = await secretData();
      console.log(data);
    };
    handler();
  };
  return (
    <div>
      <p>module app</p>
      <button onClick={data}>clickMe</button>
    </div>
  );
}
