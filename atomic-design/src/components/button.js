import React, { Component } from 'react';


class HomeButton extends Component{
  
	render(){
      return <input type = "button"
                    value= {this.props.buttonValue}
                    className ={this.props.buttonClass}/> ;
	}
}



export default HomeButton;