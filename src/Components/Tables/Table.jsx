import React from "react";
import styles from "./Table.module.css";
import { Table } from "react-bootstrap";
import CountUp from "react-countup";

const BasicTable = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];

  return (
    <div className={styles.table}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Cases</th>
            <th>Last Update</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Infected</td>
            <td>
              {
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2}
                  separator=","
                />
              }
            </td>
            {/* <td>{confirmed.value}</td> */}
            <td>
              {new Date(lastUpdate).toDateString()}&nbsp;
              {new Date(lastUpdate).toLocaleTimeString()}
            </td>
            <td>{country ? country : "Global"}</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td>
              {
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2}
                  separator=","
                />
              }
            </td>
            <td>
              {new Date(lastUpdate).toDateString()}&nbsp;
              {new Date(lastUpdate).toLocaleTimeString()}
            </td>
            <td>{country ? country : "Global"}</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td>
              {
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2}
                  separator=","
                />
              }
            </td>
            <td>
              {new Date(lastUpdate).toDateString()}&nbsp;
              {new Date(lastUpdate).toLocaleTimeString()}
            </td>
            <td>{country ? country : "Global"}</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>
              {<CountUp start={0} end={active} duration={2} separator="," />}
            </td>
            <td>
              {new Date(lastUpdate).toDateString()}&nbsp;
              {new Date(lastUpdate).toLocaleTimeString()}
            </td>
            <td>{country ? country : "Global"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BasicTable;
