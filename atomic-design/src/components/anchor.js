import React, { Component } from 'react';


class AnchorTag extends Component{
  
	render(){
      return <a href="" className={this.props.anchorClass}>{this.props.anchorText} </a> ;
	}
}



export default AnchorTag;