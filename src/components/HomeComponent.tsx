import React from "react"
import {Helmet} from "react-helmet"
import CharityPic1 from "../assets/Charity-Pic1.jpg";
import CharityPic2 from "../assets/Charity-Pic2.jpg";
import CharityPic3 from "../assets/Charity-Pic3.jpg";
import {Button} from "@material-ui/core";

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

            <section className="section__1">
                <img src={CharityPic1} alt="Five developers at work." />
                <div>
                    <h3>Today is the day to reach out and lend a helping hand</h3>
                    <Button variant="contained">
                        Donate
                    </Button>
                </div>
            </section>
            <section className="section__1">
                <img src={CharityPic2} alt="Five developers at work." />
                <div>
                    <h3>Even the smallest of donations can help change a life</h3>
                    <Button variant="contained">
                        Donate
                    </Button>
                </div>
            </section>
            <section className="section__1">
                <img src={CharityPic3} alt="Five developers at work." />
                <div>
                    <h3>Become a volunteer. You’ll feel the benefits instantly</h3>
                    <Button variant="contained">
                        Donate
                    </Button>
                </div>
            </section>
            <section className="section__2">
                <div style={{width: "800px"}}>
                    <h2 style={{fontSize: "2.5rem", fontWeight: "bolder"}}>Who We Are</h2>
                    <p>Organization set up to provide help and raise money for those in need</p>
                    <img src={CharityPic1} alt="" style={{width: "800px"}}/>
                    <h2>Places To Get Lost</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.</p>
                    <img src={CharityPic2} alt="" style={{width: "800px"}}/>
                    <h2>Healthy Food For All</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.</p>
                    <img src={CharityPic3} alt="" style={{width: "800px"}}/>
                    <h2>Green Organization</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.</p>

                </div>
            </section>


            <section className="section__3">
                <h2>Subscribe and receive weekly<br /> our newsletter</h2>
                <Button variant="contained">
                    Subscribe
                </Button>
            </section>




        </main>
    )
}