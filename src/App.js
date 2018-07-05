import React, { Component } from 'react';
import PhoneDescriptionComponent from './component/phone-description';
import PhoneColoursComponent from './component/phone-colours';
import PhonePriceComponent from './component/phone-price';
import PhonePictureComponent from './component/phone-picture';

import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    data: [],
    selected: {
      colour: '',
      memory: ''
    },
    priceData: null
  };

  componentWillMount(){
    const url = "http://localhost:1234/data";
    axios
      .get(url)
      .then(({data}) => {
        this.setState({data})
        console.log(this.state.data[0].groupName)
      })
  }

  getPhoneDetails() {
    if (this.state.data[0]) {
      return {
        title: this.state.data[0].groupName,
        description: this.state.data[0].deviceSummary[0].displayDescription,
        rating: this.state.data[0].rating * 20 + 'px'
      };
    }
  }

  getCollection(){
    const list = [...new Set(this.state.data[0] && this.state.data[0].deviceSummary.map(device => device.colourHex))].map(hex => ({
      colourHex: hex,
      colourName: this.state.data[0].deviceSummary
                      .filter(device => device.colourHex === hex)
                      .reduce(a => a)
                      .colourName
    }))
    return list;
  }


  getCapacity(){
    return this.state.data[0] && this.state.data[0].deviceSummary.filter(device => device.colourHex === this.state.selected.colour ).map(device => parseFloat(device.memory) ) || [];
  }

  selectColourSample = (colour) => {
    this.setState({selected: {
      colour
    }})
  }

  printPrice = () => {
    const priceData = this.state.data[0].deviceSummary
      .filter(device => 
        device.colourHex === this.state.selected.colour && 
        device.memory === this.state.selected.memory + 'GB'
      )
      .reduce(a => a);
    this.setState({priceData})
  }

  selectCapacity = (memory) => {
    // this.setState({selected: Object.assign({}, this.state.selected, {memory})})
    this.setState(
      state => ({selected: Object.assign({}, this.state.selected, {memory})}),
      this.printPrice
    )
    // this.setState({selected: {
    //   memory,
    //   colour: this.state.selected.colour
    // }})
  }

  showPrice = () => this.state.selected.colour && this.state.selected.memory
  
  render() {
    const {colour, memory} = this.state.selected;
    const phone = this.getPhoneDetails();
    const colourList = {
      collection: this.getCollection(),
      label: "Colour",
      colour,
      callBackFunction: this.selectColourSample
    };

    const capacityList = {
      collection: this.getCapacity(),
      label: "Capacity",
      colour: memory,
      callBackFunction: this.selectCapacity
    };

    return (
      <div className="App">
        <div className="phone-images">
          {this.showPrice() && <PhonePictureComponent {...this.state.priceData}/>}
        </div>
        <div className="phone-details">
          <PhoneDescriptionComponent {...phone} />
          <PhoneColoursComponent {...colourList} />
          <PhoneColoursComponent {...capacityList} />
          

          {this.showPrice() && <PhonePriceComponent {...this.state.priceData} />}
        </div>
      </div>
    );
  }
}

export default App;
