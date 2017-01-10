import React, { Component } from 'react';


class HeadingTag extends Component{
	render(){
      return <h1 className={this.props.headingClass}>{this.props.heading}</h1>;
	}
}



export default HeadingTag;