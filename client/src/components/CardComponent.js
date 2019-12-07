import React, { Component } from 'react'
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
class CardComponent extends Component {
    render() {
        return (
            <section>
                <div >
                    <Link to='/category'>
                        <p style={{marginLeft:'93%',marginBottom:'-3%',fontSize:'20px'}}><b>See All...</b></p>
                    </Link>
                    <h1 className="heading">Category</h1>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div className="front" style={{ backgroundImage: `url(${this.props.imagePath})`, height: '419px', width: '274px', marginLeft: '15%' }}>
                                <p>{this.props.categoryName}</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="front" style={{ backgroundImage: `url(${this.props.imagePath})`, height: '419px', width: '274px', marginLeft: '15%' }}>
                                <p>{this.props.categoryName}</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="front" style={{ backgroundImage: `url(${this.props.imagePath})`, height: '419px', width: '274px', marginLeft: '15%' }}>
                                <p>{this.props.categoryName}</p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="front" style={{ backgroundImage: `url(${this.props.imagePath})`, height: '419px', width: '274px', marginLeft: '15%' }}>
                                <p>{this.props.categoryName}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        )
    }
}

export default CardComponent
