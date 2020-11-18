import React from 'react';



import profileImg from '../Files/Images/2_profileImg.jpg';
import reactIcon from '../Files/Icons/react.png';
import jsIcon from '../Files/Icons/js.png';
import htmlIcon from '../Files/Icons/html.png';
import cssIcon from '../Files/Icons/css.png';
import javaIcon from '../Files/Icons/java.png';
import pythonIcon from '../Files/Icons/python.png';
import phpIcon from '../Files/Icons/php.png';


function MySkillsH() {
    return (
        <div className="MySkillsH">
            <div>
                <p>TECHNICAL SKILLS</p>
            </div>
            <div className="Table">
                <table>
                    <tbody>
                        <tr>
                            <td className="White"><img src={reactIcon} /></td>
                            <td><img src={jsIcon} /></td>
                            <td><img src={htmlIcon} /></td>
                            <td><img src={cssIcon} /></td>
                            <td className="White"><img src={javaIcon} /></td>
                            <td><img src={pythonIcon} /></td>
                            <td><img src={phpIcon} /></td>
                        </tr>
                        <tr>
                            <td><span>React</span></td>
                            <td><span>JavaScript</span></td>
                            <td><span>HTML</span></td>
                            <td><span>CSS</span></td>
                            <td><span>Java</span></td>
                            <td><span>Python</span></td>
                            <td><span>PHP</span></td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}


function Home(props) {
    return (
        <div ref={props.homeRef} id="home">
            <div className="HomeBackground"></div>
            <div id="statmentHello">
                <h1><span className="first">Hello, </span>
                    <span className="second"> I'm Adnan Birparić</span>
                    <span className="second">.</span>
                </h1>
            </div>
            <div id="profileImage">
                <img id="profileimg" src={profileImg}></img>
            </div>
            <div id="statment">

                <p>I am an electrical engineer with great interest in computer programing. After several years of working as an electrical engineer, I decided to change my career and find a job in this field because it has always interested me the most. I am constantly improving my knowledge by researching popular software technologies and working on new projects to get a job as a Junior Software Developer. </p>
                <div className="Button">
                    <span>View My Work</span>
                    <span>View My Work</span>
                </div>
            </div>
            <MySkillsH />
        </div>

    );
}


export default Home;