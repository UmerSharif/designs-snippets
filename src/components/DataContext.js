import React, { useState, useEffect } from "react";
export default function DataContext() {
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
        const serversData = res.data;
        setState(serversData);
      });
  }, []);
  console.log(state);

  return (
    <div>
      <h1>DataContext</h1>
    </div>
  );
}
