import React from "react";
import Darkmode from "./Darkmode";
export default function Testapi() {
  const initial = {
    links: {
      self: "http://localhost:8989/v1/servers/"
    },
    data: [
      // List of server resouces
      {
        id: "server1",
        type: "servers",
        relationships: {
          services: {
            links: {
              self: "http://localhost:8989/v1/services/"
            },
            data: [
              {
                id: "RW-Split-Router",
                type: "services"
              },
              {
                id: "Read-Connection-Router",
                type: "services"
              }
            ]
          },
          monitors: {
            links: {
              self: "http://localhost:8989/v1/monitors/"
            },
            data: [
              {
                id: "MySQL-Monitor",
                type: "monitors"
              }
            ]
          }
        },
        attributes: {
          parameters: {
            address: "127.0.0.1",
            port: 3000,
            protocol: "MariaDBBackend",
            authenticator: "MySQLBackendAuth",
            ssl_key: "/etc/certs/client-key.pem",
            ssl_cert: "/etc/certs/client-cert.pem",
            ssl_ca_cert: "/etc/certs/ca.pem",
            ssl_cert_verify_depth: 9,
            ssl_version: "MAX"
          },
          state: "Master, Running",
          version_string: "10.1.22-MariaDB",
          node_id: 3000,
          master_id: -1,
          replication_depth: 0,
          slaves: [3001],
          statistics: {
            connections: 0,
            total_connections: 0,
            active_operations: 0
          }
        },
        links: {
          self: "http://localhost:8989/v1/servers/server1"
        }
      }
    ]
  };
  //console.log(initial);
  const { data } = initial;
  const [newData] = data;

  console.log(data[0].attributes);
  console.log(newData);
  const {
    relationships: {
      monitors: { links: mlinks, data: mdata },
      services: { links: slinks, data: sdata }
    },
    attributes: { parameters, statistics }
  } = newData;
  console.log(mlinks, mdata);
  console.log(parameters, statistics);
  console.log(mdata[0].id);

  const testingData = (
    <section>
      {sdata.map((d, index) => {
        return (
          <ul key={index}>
            <li>{d.id}</li>
            <li>{d.type}</li>
          </ul>
        );
      })}
    </section>
  );

  return (
    <div>
      <h1>Test api</h1>
      {mdata.map((d, index) => {
        return <li key={index}>{d.id}</li>;
      })}
      <section>
        {sdata.map((d, index) => {
          return (
            <ul key={index}>
              <li>{d.id}</li>
              <li>{d.type}</li>
            </ul>
          );
        })}
      </section>
      <Darkmode received={testingData} />
    </div>
  );
}
