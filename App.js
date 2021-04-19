import React, { Component, useState } from 'react';
import './App.css';
import SearchButton from './components/SearchButton';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      coins: [] 
    }
  } 
  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => this.setState({coins: data}))
  
    } 
  
  fetchedCoins(){
    
    return this.state.coins.map(coin => {
      return(

        <div>
        <img src={coin.image} alt="Coin logo" width="40px"></img>
        <span className='coin-name'> {coin.name} </span>
        <span className='coin-symbol'>{coin.symbol} </span>          
        <span className='coin-price'>AUD ${coin.current_price} </span>
        <span className='coin-rank'>{coin.market_cap_rank}, </span> 
        <span className='coin-ath'>{coin.ath_change_percentage}% </span>
        {/* <hr></hr> */}
      </div>
        
      )
        
    })
  }
  

//name, symbol, img, currentprice, pricechange,marketcaprank
  render(){
    return (
        <div className="coin-containter">
          <h1>Coiny Boi!!</h1>
          <SearchButton />
          {this.fetchedCoins()}
        
        </div>
      )
    } 
        
}
export default App;
