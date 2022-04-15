import React from "react"; 


function Header() {
    return (
    <section className="card">
        <img src={require('../src/assets/alfred.jpg')} className="logo-card " />
            <div className="container">
                <h4><b>Femi Alfred</b></h4>
                <p>Software Developer</p>
                <h5>The High Level Customer Satisfaction</h5>
                <button className="carde-btn">Email</button>
                <button className="cardl-btn">Linkedin</button>
            </div>
    </section>
    )
}

export default Header;