import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateCity, updateAddressOne, updateAddressTwo, updateAddressThree } from '../ducks/reducer';

class WizardTwo extends Component {
    
    // simulation 1 36F
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>Address</p>
                    <input placeholder={`${this.props.addressOne}`} type="text" onChange={/*simulation 1 36J*/(event) => updateAddressOne(event.target.value)} />
                <p>City</p>
                    <input placeholder={`${this.props.city}`} type="text" onChange={(event) => updateCity(event.target.value)} />
                <p>State</p>
                    <input placeholder={`${this.props.addressTwo}`} type="text" onChange={(event) => updateAddressTwo(event.target.value)} />
                <p>Zip</p>
                    <input placeholder={`${this.props.addressThree}`} type="text" onChange={(event) => updateAddressThree(event.target.value)} />
                    <Link to="/wOne"><button className="wTwo-btn"> Previous </button></Link><Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                    {console.log(this.props.addressOne)}
                        
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { addressOne, city, addressTwo, addressThree } = state;
  
    return {
        addressOne,
        city,
        addressTwo,
        addressThree
    };
  }
  
  export default connect( mapStateToProps, { updateAddressOne, updateCity, updateAddressTwo, updateAddressThree } )( WizardTwo );