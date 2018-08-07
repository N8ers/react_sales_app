import React, { Component } from 'react';

class Coursesales extends Component {
    sumPrice(price){
        this.setState({total: this.state.total + price});
    }

    constructor(props){
        super(props);
        
        this.state = {
            total: 0
        }; 
        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price}
                key={i} sumPrice={this.sumPrice} active={item.active} />
        });
        return(
            <div>
                <h1>You can buy coures: </h1>
                <div id="courses">{courses}</div>
                <p id="total">total <b>{this.state.total}</b></p>
            </div>
        )
    }
}

class Course extends Component {
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Coursesales;