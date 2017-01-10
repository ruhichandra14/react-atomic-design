import React, { Component } from 'react';
// import { AppRegistry, View, Image } from 'react-native';


class ImageTag extends Component{
  // var imageSource = require{'./Powerpuff_girls_png.png'};
	render(){
      return (
        <img
            src = {this.props.imageSource}
            alt = {this.props.altText}
            className = {this.props.imageClass}
        />
    );
	}
}



export default ImageTag;