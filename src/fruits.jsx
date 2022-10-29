import React from "react";
import Card from './card.jsx'


class Fruits extends React.Component {
    render() {
        return (
            <div id="parent-container">
                <h1 className="header">Fruits</h1>
                <div className="wrapper">
                <Card title="apple"
                src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"/>
                <Card title="orange"
                src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"/>
                <Card title="banana"
                src="https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/banaan-large.jpg?itok=tMUaAk0b"/>
                <Card title="apple"
                src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"/>
                <Card title="orange"
                src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"/>
                <Card title="banana"
                src="https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/banaan-large.jpg?itok=tMUaAk0b"/>
                <Card title="apple"
                src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"/>
                <Card title="orange"
                src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"/>
                <Card title="banana"
                src="https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/banaan-large.jpg?itok=tMUaAk0b"/>
                <Card title="apple"
                src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"/>
                </div>
            </div>
        )
    }
}

export default Fruits;