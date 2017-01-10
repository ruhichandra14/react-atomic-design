import React, { Component } from 'react';

class VideoTag extends Component{
	render(){
      return (

       <video src="src/components/pass-countdown.ogg" 
              className={this.props.videoClass} width="170" height="85" controls>
        <p>If you are reading this, it is because your browser does
         not support the HTML5 video element.</p>
        </video>
    );
	}
}


export default VideoTag;