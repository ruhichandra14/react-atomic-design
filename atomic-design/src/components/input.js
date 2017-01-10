import React, { Component } from 'react';


class InputField extends Component{
	render(){
      return <input className={this.props.inputClass}/>;
	}
}



export default InputField;