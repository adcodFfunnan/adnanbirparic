import React, { useState } from 'react';
import faceIcon from '../Files/Icons/facebook.png';
import githubIcon from '../Files/Icons/github.png';
import emailjs from 'emailjs-com';




function Contact(props) {
    const [formElements, setForm] = useState({ Name: "", Email: "", Message: "" });
    const [styleIncorrect, setStyle] = useState({ Name: "", Email: "", Message: "" });


    const handleChange = (event) => {
        const name = event.target.name;

        let formElem = {
            Name: formElements.Name,
            Email: formElements.Email,
            Message: (styleIncorrect["Message"] == "Incorrect" || styleIncorrect["Message"] == "Correct") ? "" : formElements.Message
        };
        formElem[name] = event.target.value;

        setForm(formElem);
        setStyle({ Name: "", Email: "", Message: "" });

    }
    const handleSubmit = () => {
        if (formElements["Name"] != "" && formElements["Email"] != "" && formElements["Message"] != "") {
            emailjs.send("adnan.birparic@gmail.com", "template_lnqbwea", {
                from_name: formElements["Name"],
                message: formElements["Message"],
                email: formElements["Email"]
            }, "user_rACxtCCty4XXZONDUBQ71").then(res => {
                setForm({ Name: "", Email: "", Message: "Message sent successfully " });
                setStyle({ Name: "Correct", Email: "Correct", Message: "Correct" });
            }, err => {
                console.log(err);
                setForm({ Name: "", Email: "", Message: "Something went wrong \n" + err.text });
                setStyle({ Name: "Incorrect", Email: "Incorrect", Message: "Incorrect" });
            });

        } else {
            let styleForm = {
                Name: formElements["Name"] == "" ? "Incorrect" : "",
                Email: formElements["Email"] == "" ? "Incorrect" : "",
                Message: formElements["Message"] == "" ? "Incorrect" : ""
            };

            setStyle(styleForm);

        }



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
                    <input type="text" name="Name" className={styleIncorrect["Name"]}
                        placeholder="Name" value={formElements["Name"]} onChange={handleChange} />
                    <label>E-mail</label>
                    <input type="text" name="Email" className={styleIncorrect["Email"]}
                        placeholder="Enter email" value={formElements["Email"]} onChange={handleChange} />
                    <textarea name="Message" className={styleIncorrect["Message"]}
                        placeholder="Your message" value={formElements["Message"]} onChange={handleChange}>
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
                            <a href="https://github.com/adcodFfunnan" target="_blank">
                                <img src={githubIcon} />
                                <img src={githubIcon} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/adnan.birparic" target="_blank"><img src={faceIcon} />
                                <img src={faceIcon} /></a>
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
