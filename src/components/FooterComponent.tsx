import React from "react";


export const FooterComponent = () =>{
    return(
        <>
        <footer className="footer">
            <section>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
                <span>Call us: +615 4640 3304</span>
                <span>Visit us 2976 Washington St San Francisco, CA 94115</span>
            </section>
            <section>
                <h4>Latest Posts</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
                <span>Call for all people</span>
                <span>Find a project</span>
                <span>Being a Volunteer</span>
            </section>
            <section>
                <h4>Links</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sint.</p>
                <ul>
                    <li>Partners</li>
                    <li>Recent Causes</li>
                    <li>Latest Events</li>
                    <li>News</li>
                    <li>Who we are?</li>
                </ul>
            </section>
        </footer>
        <div className="copyright-div">
            <span>&copy; Copyright 2021 Goodwish</span>
            <span>All Rights Reserved</span>
        </div>
    </>
    )
}