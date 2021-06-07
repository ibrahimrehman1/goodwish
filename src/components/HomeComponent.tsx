import React from "react"
import {Helmet} from "react-helmet"
import CharityPic1 from "../assets/Charity-Pic1.jpg";
import CharityPic2 from "../assets/Charity-Pic2.jpg";
import CharityPic3 from "../assets/Charity-Pic3.jpg";

export const HomeComponent = () =>{
    return(
        <main>
            <Helmet>
                <title>Goodwish - A Multipurpose Charity, Non-profit, and Fundraising Theme </title>
                <meta name="description" content=""/>
            </Helmet>
            <header>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={CharityPic1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Fight for Right Causes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={CharityPic2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Stand up for the Deprived</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, magnam.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={CharityPic3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Help the Children in Need</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nam.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                
            </header>
        </main>
    )
}