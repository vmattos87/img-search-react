import React from 'react'
import Search from './Search'
import axios from 'axios'
import ImgList from './ImgList'


class App extends React.Component {
 
    state = {images: []}

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=22805785-6ab7a699268648b63fb866cad&q=${entry}&image_type=photo&pretty=true`)
        
        this.setState({images: response.data.hits})
    }
    
    render(){
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
                <Search onSearchSubmit={this.onSearchSubmit}/>
                <ImgList images={this.state.images}/>
            </div>
        )
    }
}

export default App