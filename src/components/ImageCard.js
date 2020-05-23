import React from 'react'
import ReactDom from 'react-dom'

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();
    }

    componentDidMount(){
       this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        const {description,urls}=this.props.image;
        return(
            <div style={{gridRowEnd:`spans ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    };
}
export default ImageCard;