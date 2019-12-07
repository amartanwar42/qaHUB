import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Carousel,Input } from 'antd';
const { Search } = Input;

class CarouselComponent extends Component{
    render(){
        return(
            <Carousel autoplay={false}>
                {/* <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    allowClear={true}
                />    */}
            
                <h1 className="contentPageText" >{this.props.categoryName} Knowledge Sea</h1>
                
            </Carousel>
        );
    }
}

export default CarouselComponent;