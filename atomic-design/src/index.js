import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './components/input';
import AnchorTag from './components/anchor';
import HomeButton from './components/button';
import ImageTag from './components/image';
import HeadingTag from './components/heading';
import ParagraphTag from './components/paragraph';
import VideoTag from './components/video';
import './styles.css';

const App = function(){
	return (
      <div>
	    
	    <HeadingTag heading= "Cartoon Network"
	                headingClass="main-heading-tag"/>
        <InputField inputClass="input-field"/>
	    <HomeButton buttonValue= "Search"
	                 buttonClass="home-button"/>
      
	    <HeadingTag heading= "Click on the video to add to the cart"
	                headingClass="sub-heading-sub-tag"/>

        <ImageTag imageSource ='./src/components/cn.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn2.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn3.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn4.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn5.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn6.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn7.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn8.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn9.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn2.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn3.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn4.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn5.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn6.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn7.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn8.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn9.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn2.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn3.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn4.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn5.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn6.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn7.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
        <ImageTag imageSource ='./src/components/cn8.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn9.jpg'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
         <ImageTag imageSource ='./src/components/cn4.png'
                  altText= "power puff girls"
                  imageClass = "image-tag"
        />
	   
	     <VideoTag videoClass="video-tag"/>
	       <AnchorTag anchorText= "Watch this video"
	                 anchorClass="anchor-tag"/>
	      <ParagraphTag paragraphClass="paragraph-tag"
	      />
        
	     
     </div>
	       );
}

ReactDOM.render(<App />, document.querySelector('.container'));