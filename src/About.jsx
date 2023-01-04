import React from "react";
import web from "../src/images/hero-img.png";
import Commom from "./Commom";

const About = () => {
    return (
        <>
            <Commom
                name="Welcome to About page"
                imgsrc={web}
                visit="/myreactwebapp/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;