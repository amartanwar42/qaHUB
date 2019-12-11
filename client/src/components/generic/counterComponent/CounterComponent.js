import React, { Component } from 'react'
import * as actions from './../../../actions/index';
import { connect } from 'react-redux'
import './CounterComponent.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export class CounterComponent extends Component {

    state={
        loaded:false
    }

    async componentDidMount(){
        await this.props.fetchStats().then(result=>{
            switch(this.props.stats){ 
                case null:
                this.setState({
                    loaded:false
                    })    
                    break;    
               default:
                this.setState({
                    loaded:true
                })

            }
        })
    }

    renderCounter(){
        if(this.state.loaded){
            return(
                <Row>
                        <Col key={0}>
                            <div className="counter counter-count" key={0}>
                                <p className="counter-c"><b>{this.props.stats.message.categories}</b></p>
                                <p className="counter-p">Categories</p>
                            </div>
                        </Col >
                        <Col key={1}>
                            <div className="counter counter-count" key={1}>
                                <p className="counter-c"><b>{this.props.stats.message.content}</b></p>
                                <p className="counter-p">Contents</p>
                            </div>
                        </Col>
                        {/* <Col key={'Views'} >
                            <div className="counter counter-count" key={2}>
                                <p className="counter-c"><b>300</b></p>
                                <p className="counter-p">Views</p>
                            </div>
                        </Col> */}
                        <Col key={2}>
                            <div className="counter counter-count" key={2}>
                                <p className="counter-c"><b>{this.props.stats.message.contributors}</b></p>
                                <p className="counter-p">Contributors</p>
                            </div>
                        </Col>
                    </Row>)
        }
        else{
            return(
                <Row>
                        <Col key={3} >
                            <div className="counter counter-count" key={0}>
                                <p className="counter-c"><b>--</b></p>
                                <p className="counter-p">Categories</p>
                            </div>
                        </Col >
                        <Col key={4}>
                            <div className="counter counter-count" key={1}>
                                <p className="counter-c"><b>--</b></p>
                                <p className="counter-p">Contents</p>
                            </div>
                        </Col>
                        {/* <Col key={5} >
                            <div className="counter counter-count" key={2}>
                                <p className="counter-c"><b>300</b></p>
                                <p className="counter-p">Views</p>
                            </div>
                        </Col> */}
                        <Col key={6}>
                            <div className="counter counter-count" key={2}>
                                <p className="counter-c"><b>--</b></p>
                                <p className="counter-p">Contributors</p>
                            </div>
                        </Col>
                    </Row>)
        }
        
        
    }
    render() {
        return (
            <Container>
                {this.renderCounter()}
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return {stats: state.stats};
  }
export default connect(mapStateToProps,actions) (CounterComponent);
