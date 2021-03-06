import React, { useState, useEffect } from 'react';

import photo_1 from '../Files/Projects/photo_1.png';
import photo_2 from '../Files/Projects/photo_2.png';
import photo_3 from '../Files/Projects/photo_3.png';
import photo_4 from '../Files/Projects/photo_4.png';
import photo_5 from '../Files/Projects/photo_5.png';
import photo_6 from '../Files/Projects/photo_6.png';
import photo_7 from '../Files/Projects/photo_7.png';
import photo_8 from '../Files/Projects/photo_8.png';
import photo_9 from '../Files/Projects/photo_9.png';


function JustProjects(props) {
    let myProjects = [{
        ProjectImg: photo_9,
        description: "It is a web application where a user can keep records of books and writers. Only logged-in users can add and modify book and writer information. Guests (not logged-in users) can view the data. It is possible to connect books with the writers.",
        group: "new",
        key: 9,
        skills: ["React & Redux", "Axios", "Bootstrap", "Node JS", "Express", "MySQL (Knex)"],
        title: "BookApp",
        githubLink: "https://github.com/adcodFfunnan/bookapp",
        onlineLink: "https://adnanbookapp.herokuapp.com/"
    },
    {
        ProjectImg: photo_1,
        description: "This is my portfolio website built with React JS.",
        group: "new",
        key: 1,
        skills: ["React JS", "CSS", "HTML"],
        title: "MyPortfolio",
        githubLink: "https://github.com/adcodFfunnan/adnanbirparic",
        onlineLink: "https://adcodffunnan.github.io/adnanbirparic/"
    },
    {
        ProjectImg: photo_2,
        description: "It is a movie search application created using the React JS and The Movie Database API. The app allows users to search for movies or TV shows and provide detailed descriptions with trailers.",
        group: "new",
        key: 2,
        skills: ["React TS", "CSS", "HTML"],
        title: "FindMovie",
        githubLink: "https://github.com/adcodFfunnan/findmovie",
        onlineLink: "https://adcodffunnan.github.io/findmovie/"
    },
    {
        ProjectImg: photo_3,
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "new",
        key: 3,
        skills: ["React JS", "CSS", "HTML"],
        title: "PuzzleGame",
        githubLink: "https://github.com/adcodFfunnan/react_puzzle",
        onlineLink: "https://adcodffunnan.github.io/react_puzzle/"
    },
    {
        ProjectImg: photo_4,
        description: "It is a multiple user application that allows users to transfer image files over the Internet. After loading the images, the application provides an access key which is used to access uploaded images. The list of uploaded images can be modified in terms of deleting or adding some images.",
        group: "new",
        key: 4,
        skills: ["Laravel PHP", "HTML"],
        title: "ImageTransfer",
        githubLink: "https://github.com/adcodFfunnan/weim",
        onlineLink: "https://drive.google.com/drive/folders/1RLDxL7nJoQfsVQi66VFyKbQeZi1RFMTp"

    },
    {
        ProjectImg: photo_5,
        description: "This app solves the problem of printing multiple drawings from AutoCAD. If we have several AutoCAD drawings ordered side-by-side, it takes time to print these drawings because each drawing has to be individually marked and printed. With the AutoCadPlot app, it can be done in seconds.",
        group: "new",
        key: 5,
        skills: ["Python & PyQt5"],
        title: "AutoCadPlot",
        githubLink: "https://github.com/adcodFfunnan/AutoCadPlot",
        onlineLink: "https://drive.google.com/drive/folders/1MzW3Z9InWOrr-PlIKr09_cg14D_rotFk"

    },
    {
        ProjectImg: photo_6,
        description: "The app was created to help users dynamically create a playlist from youtube. The main advantage of this application is that after creating the main playlist from youtube, which exists every time the user logs in, the user can play any number of songs in a specific order.",
        group: "old",
        key: 6,
        skills: ["PHP & MySQL", "CSS", "HTML"],
        title: "MusicPlayer",
        githubLink: "https://github.com/adcodFfunnan/MusicPlayer",
        onlineLink: "http://musicplayer.dx.am/index.php"

    },
    {
        ProjectImg: photo_7,
        description: "It is a classic snake game.",
        group: "old",
        key: 7,
        skills: ["jQuery", "HTML", "CSS"],
        title: "SnakeGame",
        githubLink: "https://github.com/adcodFfunnan/SnakeGame",
        onlineLink: "https://adnansites.000webhostapp.com/snakegame/"

    },
    {
        ProjectImg: photo_8,
        description: "It is a simple application for calculating voltage drop in an electrical network. Allows the user to enter all parameters such as conductor diameter and the number of consumers on each section. The app calculates a voltage drop across each section, showing the calculation process itself.",
        group: "old",
        key: 8,
        skills: ["jQuery", "HTML", "CSS"],
        title: "VoltageDrop",
        githubLink: "https://github.com/adcodFfunnan/VoltageDrop",
        onlineLink: "https://adnansites.000webhostapp.com/voltagedrop/"

    }];


    myProjects = (props.whatToShow == "all") ? myProjects : myProjects.filter(project => (project.group == props.whatToShow));


    const projectsForRend = myProjects.map(project =>
        <div key={project.key} className={props.classForProjects}>
            <div className="ProjectIMG">
                <img className="ProjectImg" src={project.ProjectImg} />
            </div>
            <div className="ProjDescr">
                <p>{project.description}</p>

            </div>
            <div className="ProjectTitle">
                <p>{project.title}</p>
            </div>
            <div className="ProjectButtons">
                <a href={project.githubLink} target="_blank">GitHub</a>
                <a href={project.onlineLink} target="_blank">{(project.key != 5 && project.key != 4) ? <span>View Online</span> : <span>Demo Video</span>}</a>
            </div>
            <div className="ProjectSkills">
                <p><span></span>{project.skills[0]}</p>
                <p>{(project.skills[1] != null) ? <><span></span>{project.skills[1]}</> : null}</p>
                <p>{(project.skills[2] != null) ? <><span></span>{project.skills[2]}</> : null}</p>
                <p>{(project.skills[3] != null) ? <><span></span>{project.skills[3]}</> : null}</p>
                <p>{(project.skills[4] != null) ? <><span></span>{project.skills[4]}</> : null}</p>
                <p>{(project.skills[5] != null) ? <><span></span>{project.skills[5]}</> : null}</p>
                <p>{(project.skills[6] != null) ? <><span></span>{project.skills[6]}</> : null}</p>
            </div>
        </div>
    );

    return (
        <div>
            {projectsForRend}
        </div>
    );
}



function Projects(props) {

    const [characteristic, setProjects] = useState({ whatToShow: "all", needToShow: "all", ClassOfWhatIsShowing: "Project Animate" });


    const handleShow = (whichGroup) => {

        setProjects({ whatToShow: characteristic.whatToShow, needToShow: whichGroup, ClassOfWhatIsShowing: "Project" });
    }

    useEffect(() => {

        if (characteristic.ClassOfWhatIsShowing === "Project") {
            setTimeout(() => {
                setProjects({ whatToShow: characteristic.needToShow, needToShow: characteristic.needToShow, ClassOfWhatIsShowing: "Project Animate" });
            }, 1000);
        }
    });
    return (

        <div ref={props.projectsRef} id="projects" className={(props.NavbarIsShowed) ? "NavbarIsShowed" : ""}>

            <div className={props.StyleProjectsOnScroll["header"] ? "ProjectH Animate" : "ProjectH"}>
                <h1>PROJECTS</h1>
                <hr></hr>
            </div>

            <div className={props.StyleProjectsOnScroll["projectN"] ? "ProjectN Animate" : "ProjectN"}>

                <div
                    onClick={() => handleShow("all")} className={(characteristic.needToShow == "all") ? "Button Clicked" : "Button"}>
                    <span>ALL</span>
                    <span>ALL</span>
                </div>
                <div
                    onClick={() => handleShow("new")} className={(characteristic.needToShow == "new") ? "Button Clicked" : "Button"}>
                    <span>NEW</span>
                    <span>NEW</span>
                </div>
                <div
                    onClick={() => handleShow("old")} className={(characteristic.needToShow == "old") ? "Button Clicked" : "Button"}>
                    <span>OLD</span>
                    <span>OLD</span>
                </div>

            </div>


            <JustProjects
                image="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
                description="This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices."
                showProjects={props.StyleProjectsOnScroll["projects"]}
                whatToShow={characteristic.whatToShow}
                classForProjects={(!props.StyleProjectsOnScroll["projects"]) ? "Project" : characteristic.ClassOfWhatIsShowing}
            />
        </div>
    );
}


export default Projects;