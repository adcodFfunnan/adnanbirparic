import React, { useState, useEffect } from 'react';

import react_puzzle from '../Files/Projects/react_puzzle.gif';




function JustProjects(props) {

    let myProjects = [{
        ProjectImg: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "new",
        key: 1,
        skills: [" React JS", "CSS", "HTML"],
        title: "MyPortfolio"
    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "new",
        key: 2,
        skills: [" React TS", "CSS", "HTML"],
        title: "FindMovie"
    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "new",
        key: 3,
        skills: [" React JS", "CSS", "HTML"],
        title: "PuzzleGame"
    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "old",
        key: 4,
        skills: [" React JS", "CSS", "HTML"],
        title: "ImageTransfer"

    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "old",
        key: 5,
        skills: [" React JS", "CSS", "HTML"],
        title: "AutoCadPlot"

    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "old",
        key: 6,
        skills: [" React JS", "CSS", "HTML"],
        title: "MusicPlayer"

    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "old",
        key: 7,
        skills: [" React JS", "CSS", "HTML"],
        title: "SnakeGame"

    },
    {
        ProjectImg: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ProjectGif: { react_puzzle },
        description: "This is a puzzle game built using React JS. The game provides the ability to insert the image you want to play with, and it is possible to determine the level of difficulty. It can be played on desktops and mobile devices.",
        group: "old",
        key: 8,
        skills: [" React JS", "CSS", "HTML"],
        title: "VoltageDrop"

    }];


    myProjects = (props.whatToShow == "all") ? myProjects : myProjects.filter(project => (project.group == props.whatToShow));


    const projectsForRend = myProjects.map(project =>
        <div key={project.key} className={props.classForProjects}>
            <div className="ProjectIMG">
                <img className="ProjectImg" src={project.ProjectImg} />
                <img className="ProjectGif" src={props.gif} />
                <p className="ProjectTitle">{project.title}</p>
            </div>
            <div className="ProjDescr">
                <p>{props.description}</p>
            </div>
            <div className="ProjectButtons">
                <a>GITHUB</a>
                <a>SEE IT ONLINE</a>
            </div>
            <div className="ProjectSkills">
                <p><span></span>{project.skills[0]}</p>
                <p><span></span>{project.skills[1]}</p>
                <p><span></span>{project.skills[2]}</p>

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
        console.log("Projects");

        if (characteristic.ClassOfWhatIsShowing === "Project") {
            console.log("enterIF");
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


            <JustProjects gif={react_puzzle}
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