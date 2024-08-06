import React, { Component } from 'react';
import Times from './components/Times';
import { GlobalStyled } from './components/GlobalStyled';
import styled from 'styled-components';

export default class App extends Component {
  state = {
    time: {},
    month: {},
    times: {},
    region: ''
  }

  componentDidMount() {
    this.fetchData("Andijon"); 

  }
handleSearch = (e) => {
  e.preventDefault();
  if (this.state.region === '') {
    alert("Yoz! Siz shahar nomini kiritmadingiz.");
  } else {
    this.fetchData(this.state.region);
    this.setState({ region: '' });
  }

};
  fetchData = (region) => {
    fetch(`https://islomapi.uz/api/present/day?region=${region}`)
      .then(response => response.json())
      .then(data => this.setState({
        time: data,
        times: data.times,
        month: data.hijri_date
      }))
      .catch(error => console.error('Error:', error));
      
  }

  // handleSearch = (e) => {
  //   e.preventDefault();
  //   if (this.state.region === '') {
  //     alert("iltimos yozing!");
  //   } else {
  //     this.fetchData(this.state.region);
  //     this.setState({ region: '' });
  //   }
  // };

  handleRegionChange = (e) => {
    this.setState({ region: e.target.value });
  }

  render() {
    const { time, times, month } = this.state;

    return (
      <Container>
         <GlobalStyled />
{time!==undefined&&times!==undefined&&month!==undefined?<div>
  
  <h1>Shahar: {time.region}</h1>
        <h2>Sana: {time.date}</h2>
        <h3>Kun: {time.weekday}</h3>
        <h4>Oy: {month.month} oyining {month.day} kuni</h4>
        <form onSubmit={this.handleSearch}>
        <input
  type='text'
  name='region'
  placeholder='Enter City Name'
  value={this.state.region} 
  onChange={this.handleRegionChange}
/>
        </form>

        <Times times={times} />
       </div>:<h1>
        No result</h1>}

      </Container>
    )
  }
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  h2{
    margin-left:460px;
    color: #111;
  }
  h3{
    margin-left: 460px;
    color: #111;
  }
  h4{
    margin-left:460px ;
    color: #111;
  }
  input{
    margin-left:500px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    color: #111;
  }
  h1{
    margin-left:460px;
  }
`