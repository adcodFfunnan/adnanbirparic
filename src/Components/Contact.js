import React from 'react';
import faceIcon from '../Files/Icons/facebook.png';
import githubIcon from '../Files/Icons/github.png';
import emailjs from 'emailjs-com';





function Contact(props) {

    const handleSubmit = () => {

        emailjs.send("adnan.birparic@gmail.com", "template_lnqbwea", {
            from_name: "Hello",
            message: "Come Work With us",
        }, "user_rACxtCCty4XXZONDUBQ71").then(res => {
            console.log("succes")
        }, err => { console.error("something was happend", err) });
    }


    return (



        <div ref={props.contactRef} id="contact" className={(props.NavbarIsShowed) ? "NavbarIsShowed" : ""}>

            <div className={props.StyleContactOnScroll["header"] ? "ProjectH Animate" : "ProjectH"}>
                <h1>CONTACT</h1>
                <hr></hr>
            </div>
            <div className={(props.StyleContactOnScroll["contact"]) ? "FormDiv Animate" : "FormDiv"}>
                <p>Have a project, an idea or a question?</p>
                <form>
                    <label>Name</label>
                    <input type="text"
                        placeholder="Name" />
                    <label>E-mail</label>
                    <input type="text"
                        placeholder="Enter email" />
                    <textarea
                        placeholder="Your message">
                    </textarea>
                    <div className="Button" onClick={handleSubmit}>
                        <span>SEND</span>
                        <span>SEND</span>
                    </div>
                </form>

            </div>

            <div className="Footer">
                <div className="FirstDiv">
                    <div className="IconsWithAnimate">
                        <div>
                            <img src={githubIcon} />
                            <img src={githubIcon} />
                        </div>
                        <div>
                            <img src={faceIcon} />
                            <img src={faceIcon} />
                        </div>
                    </div>

                    <p onClick={() => { props.homeRef.current.scrollIntoView() }}>
                        <span>Adnan Birparić</span><span>Adnan Birparić</span></p>
                </div>

            </div>

        </div>


    );


}








export default Contact;