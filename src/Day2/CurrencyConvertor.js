import React, { useState } from "react";
import "./currency.css";

export default function CurrencyConvertor() {
  let [from , setFrom] = useState("INR")
  let [to , setTo] =useState("INR")
  let conversionRates = {INR: 1,USD: 0.012,EUR: 0.011,GBP: 0.0098}
  let [ammount , setAmmount] = useState();
  let [convertedval , setConvertedval] = useState();
  function handler(event){
    //from = event.target.value;
    setFrom(event.target.value);
  }
  function handler1(event){
    //to = event.target.value;
    setTo(event.target.value);
  }
  function handler2(event){
    //ammount = event.target.value;
    setAmmount(event.target.value);
  }
  function Convert(){
    let rate = conversionRates[to]/conversionRates[from];
    setConvertedval(ammount * rate);
    //console.log(ammount , " is converted from ",from," to ",to," : ",convertedval)
  }
return (
    <>
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input-container">
          <label htmlFor="fromCurrency">From:</label>
          <select id="fromCurrency" className="currency-select" onChange={handler}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="toCurrency">To:</label>
          <select id="toCurrency" className="currency-select" onChange={handler1}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" className="amount-input" onBlur={handler2} />
        </div>
        <button className="convert-button" onClick={Convert}>Convert</button>
        <p>The conversyion of {ammount} from {from} to {to} is {convertedval} </p>
      </div>
    </>
  );
}
