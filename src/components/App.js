import React from 'react'
import ReactDom from 'react-dom'

//dependencies imported after installing
import axios from 'axios'

//import others
import unsplash from '../api/unsplash';

//child components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state ={images:[]}
   onSearchSubmit=async (term)=>{
        // console.log(term+"Submitted from SearchBar Component(Child) to App Component(Child)");
       const response=await unsplash.get("search/photos/",{
            params:{query:term}
        });
        console.log(this);
      this.setState({images:response.data.results});
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmitCallBack={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App