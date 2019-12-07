import React, { Component } from 'react'
import { RiseLoader } from 'react-spinners';

class Loading extends Component {
    render() {
        return (
            // <div className="loader"></div>
            <RiseLoader className="container"
            css={this.props.css}
          sizeUnit={"px"}
          size={25}
          color={'#00b3e7'}/>
        )
    }
}

export default Loading
