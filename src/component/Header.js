import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import blackCat from '../media/images/blackCat.png'


class Header extends Component {
    state = {
        data: [],
        loading: true,
    }

    componentDidMount() {
        const url = "https://api.thecatapi.com/v1/breeds";
        axios
            .get(url)
            .then((res) => {
                this.setState({
                    data: res.data,
                    loading: false,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

   render() {
    return(
        <header>
            <div className="header-wrapper">
                <div>
                    <h1 id = "top">30 DAYS OF REACT</h1>
                    <p><a href = "##">Day 20 {">>"}</a></p>
                    <NavBar />
                </div>
           
                {this.state.loading ? 
                    ( 
                    <div className = "loading">Loading...</div>
                        ) : (
                    <div className = "facts">
                    <img src= {blackCat} alt="cat"></img>
                    <h3>Cats Paradise</h3>
                    <p className="length">There are &nbsp; {this.state.data.length} cat breeds</p>
                    <p className="figures">On average a cat can weight about &nbsp;
                        <span>
                            {
                            (this.state.data.map((item) => item.weight.metric)
                                .map((item) => item.match(/\d+/gi).map(Number))
                                .map((item) => item.reduce((acc, cur) => (parseInt(acc) + parseInt(cur))/2))
                                .reduce((acc, cur) => acc + cur, 0)/this.state.data.length)
                                .toFixed(2)
                            }
                        </span> kg and live &nbsp;
                        <span>
                            {
                            (this.state.data.map(item => (item.life_span))
                            .map((item) => item.match(/\d+/gi).map(Number))
                            .map((item) => item.reduce((acc, cur) =>  (parseInt(acc) + parseInt(cur))/2))
                            .reduce((acc, cur) => acc + cur, 0)/this.state.data.length
                            ).toFixed(2)
                            }
                        </span> years.
                    </p>
                </div>
                )    
            }
        </div>
        </header>
    )
   }
}

export default Header;