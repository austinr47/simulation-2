import React, { Component } from 'react';
import './App.css';
import router from './router';
import {connect} from 'react-redux'


class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     //first view
  //     propertyName: 'name',
  //     propertyDescription: 'dest',
  //     //second view
  //     city: 'city',
  //     addressOne: 'add',
  //     addressTwo: 'state',
  //     addressThree: 'zip',
  //   }

  //   //first view 
  //   this.handleChangePropertyName = this.handleChangePropertyName.bind(this);
  //   this.handleChangePropertyDescription = this.handleChangePropertyDescription.bind(this);
  //   //second view
  //   this.handleChangeCity = this.handleChangeCity.bind(this);
  //   this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
  //   this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
  //   this.handleChangeAddressThree = this.handleChangeAddressThree.bind(this);
  // }


  //   //first view
  //   handleChangePropertyName(event) {
  //       this.setState({propertyName : event.target.value});
  //   }
  //   handleChangePropertyDescription(event) {
  //       this.setState({propertyDescription : event.target.value});
  //   }
  //   //second view
  //   handleChangeCity(event){
  //       this.setState({city : event.target.value});
  //   }
  //   handleChangeAddressOne(event){
  //     this.setState({addressOne: event.target.value})
  //   }
  //   handleChangeAddressTwo(event){
  //     this.setState({addressTwo: event.target.value})
  //   }
  //   handleChangeAddressThree(event){
  //     this.setState({addressThree: event.target.value})
  //   }


  render() {
    return (
      <div>
          {router }
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    state
  }
};

export default connect(mapStateToProps)(App);