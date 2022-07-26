import React from "react";
import './header.css';
import CarouselFade from "../Carousel/Carousel";

function Header() {

    

    return (
    <header className="header">
        <p>Latest space <br />related news.</p>
        <CarouselFade/>
    </header>
    )
}

export default Header;