import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Input } from 'antd';
const { Search } = Input;

class SearchComponent extends Component{
    render(){
        return(
            <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    allowClear={true}
            /> 
        )
    }
}

export default SearchComponent;
