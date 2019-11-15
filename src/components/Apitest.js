import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Apitest() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get("http://54.229.207.205:8989/v1/servers", {
        auth: {
          username: "user2",
          password: "hotloaf58"
        }
      })
      .then(res => {
        console.log(res.status);
        const persons = res.data;
        setState(persons);
      });
  }, []);
  console.log(state);
  return (
    <div>
      <h1>Api Test</h1>
    </div>
  );
}
