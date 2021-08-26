import React, { Component } from "react";
import styles from "./App.module.css";
import coronaImage from "./images/image.png";
import theme from "./images/logo.png";
import { fetchData } from "./api";
import BasicTable from "./Components/Tables/Table";
import Cards from "./Components/Cards/Cards";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Graph from "./Components/Graph/Graph";
import { Button } from "@material-ui/core";

export class App extends Component {
  state = {
    data: {},
    country: "",
    table: true
  };
  async componentDidMount() {
    console.log("fetching data");
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  handleButton = () => {
    this.setState({
      table: !this.state.table
    });
  };

  render() {
    console.log("data", this.state.data);
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.theme} src={theme} alt="COVID-19" />
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
        <br />
        <text>
          <i>(For a Particular country, select a Country from below)</i>
        </text>
        <br />
        <br />
        <Filter handleCountryChange={this.handleCountryChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleButton}
          style={{ marginBottom: "10px" }}
        >
          see in&nbsp;
          {this.state.table ? "table" : "grid"}&nbsp; format
        </Button>
        {/* <Cards data={data} country={country} /> */}
        {!this.state.table ? (
          <BasicTable data={data} country={country} />
        ) : (
          <Cards data={data} country={country} />
        )}
        {/* <BasicTable data={data} country={country} /> */}
        <Graph data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
