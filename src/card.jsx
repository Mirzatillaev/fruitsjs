import React from "react";


class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <img className="img" src={this.props?.src} alt="" />
                <p className="title">{this.props?.title}</p>
            </div>
        )
    }
}

export default Card;