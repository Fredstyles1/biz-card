import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Header from "./Header";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

function Card() {
    return (
        <container>
        <div className="container1">
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
        </container>
    )
}

ReactDOM.render(<Card />, document.getElementById("root"))