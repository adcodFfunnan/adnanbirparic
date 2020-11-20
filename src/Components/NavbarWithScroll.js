import React, { useState } from 'react';


import githubIcon from '../Files/Icons/github.png';
import resume from '../Files/PDF/Adnan Birparic_CV.pdf';



function NavbarWithScroll(props) {
    const [ClassForHeader, setHeader] = useState("");
    
    return (
        <div className={props.StyleNavbarOnScroll["show"] ? "Header " + ClassForHeader : "Header Hide " + ClassForHeader}>

            <div className="IconsWithAnimate">
                <div>
                    <a href="https://github.com/adcodFfunnan" target="_blank"><img src={githubIcon} />
                        <img src={githubIcon} /></a>
                </div>

            </div>
            <i className="fas fa-bars" onClick={() => {
                if (ClassForHeader === "") {

                    setHeader("BarsClicked");
                    document.body.classList.add("LockBody");
                } else { setHeader(""); document.body.classList.remove("LockBody"); }
            }}></i>
            <div className={"Navbar " + ClassForHeader}>
                <a className={props.StyleNavbarOnScroll["home"] ? "IsInViewPort" : ""}
                    onClick={() => {
                        props.DomRefs["home"].current.scrollIntoView();
                        if (ClassForHeader === "BarsClicked") { setHeader(""); }
                        document.body.classList.remove("LockBody");
                    }}>HOME</a>
                <a className={props.StyleNavbarOnScroll["projects"] ? "IsInViewPort" : ""}
                    onClick={() => {
                        props.DomRefs["projects"].current.scrollIntoView();
                        if (ClassForHeader === "BarsClicked") { setHeader(""); }
                        document.body.classList.remove("LockBody");
                    }}>PROJECTS</a>
                <a href={resume} target="_blank" onClick={() => {
                    if (ClassForHeader === "BarsClicked") { setHeader(""); }
                    document.body.classList.remove("LockBody");
                }}>RESUME</a>
                <a className={props.StyleNavbarOnScroll["contact"] ? "IsInViewPort" : ""}
                    onClick={() => {
                        props.DomRefs["contact"].current.scrollIntoView();
                        if (ClassForHeader === "BarsClicked") { setHeader(""); }
                        document.body.classList.remove("LockBody");
                    }}>CONTACT</a>

            </div>

        </div>
    );
}





export default NavbarWithScroll;