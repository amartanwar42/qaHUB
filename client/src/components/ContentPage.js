import React, { Component } from 'react'
import TabComponent from './generic/TabComponent'
import CarouselComponent from './generic/CarouselComponent'

class ContentPage extends Component{
    render(){
        const queryString = require('query-string');
        var parsed = queryString.parse(this.props.location.search);
        return(
            <div>
                <CarouselComponent categoryName={parsed.category}/>
                <TabComponent categoryName={parsed.category} />
            </div>
            
        ) 
    }
}
export default ContentPage;