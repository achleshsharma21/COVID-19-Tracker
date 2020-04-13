import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import coronaImage from './images/download.png';
class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country:country});
  }
  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      <p className={styles.love}>Developed by Achlesh Sharma</p>
      <a className={styles.gapi} href="https://github.com/mathdroid/covid-19-api">COVID-19 API</a>
      </div>
    );
  }
}

export default App;