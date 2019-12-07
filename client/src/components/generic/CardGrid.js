import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
// import { Col, Row } from 'antd';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardComponent from './CardComponent'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";
import Loading from '../Loading'
import { css } from '@emotion/core';
import Container from 'react-bootstrap/Container'
const override = css`
    display: block;
    margin-left: 40%;
    margin-top: 10%;
    border-color: red;
    margin-bottom: 5%;
`;

class CardGrid extends Component {

    state = {
        cardDetails: null,
        colums:null
    }
    async componentDidMount() {
        await this.props.fetchContent(`${this.props.category}`, `${this.props.tabCategory}`,'published').then(result => {
            this.setState({
                cardDetails: _.chunk(this.props.content.message, 3)
            })
        })
    }

    renderCol(card) {
        
        return (
            <Col key={card.title} md="auto">
                <CardComponent
                    contentTitle={card.title}
                    contentImage={card.imagePath}
                    contentDescription={card.description}
                    profileImage={card._user.imageLink}
                    userId={card._user._id}
                    userName={card._user.name}
                    contentLink={card.link}
                />
            </Col>)
    }
    renderRow() {
        return _.map(this.state.cardDetails, cards => {
            // console.log(cards)
            return (<Row  >
                {_.map(cards, this.renderCol)}
            </Row>)

        })
    }

    renderContent() {
        switch (this.state.cardDetails) {
            case null:
                return <Loading css={override} />    
            default:
                return this.renderRow();
        }

    }
    render() {
        return (
            <Container>
                {this.renderContent()}
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
        content: state.content
    };
}
export default connect(mapStateToProps, actions)(CardGrid);