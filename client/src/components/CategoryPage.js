import React, { Component } from 'react';
import CategoryCardComponent  from './generic/categoryCardComponent/CategoryCardComponent'
import {connect} from 'react-redux'
import _ from "lodash";
import Loading from './Loading'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin-left: 2%;
    margin-top: 20%;
    border-color: red;
    opacity:1;
`;

class CategoryPage extends Component {

    renderCategory(){
        switch(this.props.category){
         case null:
           return <Loading css={override}/>;
         case false:
            return <Loading css={override} />;
         default:
           return _.map(this.props.category.message, category => {
             return(
               < CategoryCardComponent  key={category.categoryName} categoryName={category.categoryName} categoryDescription={category.categoryDescription} imagePath={category.imagePath}/>
             );
           })
        // default:
        //     return <Loading />;
        }
    }
    render() {
        return (
            <div className="content1">
                <h1 className="heading">Categories</h1>
                {this.renderCategory()}
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {category: state.category};
  }
export default connect(mapStateToProps,null)(CategoryPage);