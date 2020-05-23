import React from 'react'
import ReactDom from 'react-dom'
import Gallery from 'react-grid-gallery';
import './ImageList.css';
import ImageCard from '../components/ImageCard';


const ImageList = (props)=>{
   const image=props.images.map((image)=>{
       return(
            <ImageCard  key={image.id} image={image}/>   
       )
   })
    return (
        <div className="image-list">
             {image}
        </div>
    )
}


export default ImageList;