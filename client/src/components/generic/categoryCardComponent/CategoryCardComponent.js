import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './categoryCardComponent.css'
import { Link } from "react-router-dom";

class CategoryCardComponent extends Component {
    render() {
        return (
            <Link to={`/contentPage?category=${this.props.categoryName}`} className="card">
                {/* <div className="front" style={{ backgroundImage: `url(${require(`./images/${this.props.imageName}`)})` }}> */}
                <div className="categoryCard">
                    <div className="front" style={{ backgroundImage: `url(${this.props.imagePath})` }}>
                        <p>{this.props.categoryName}</p>
                    </div>
                    <div className="back">
                        <div>
                            <p>{this.props.categoryDescription}</p>
                            <button className="button">Explore more..</button>
                        </div>
                    </div>
                </div>

            </Link>
        );
    }
}
export default CategoryCardComponent;