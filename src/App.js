import React from 'react';

import './App.css';
import NavbarWithScroll from './Components/NavbarWithScroll';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StyleNavbarOnScroll: { home: true, projects: false, contact: false, show: true },
      StyleProjectsOnScroll: { header: false, projectN: false, projects: false },
      StyleContactOnScroll: { header: false, contact: false }
    };
    this.DomRefs = { home: React.createRef(), projects: React.createRef(), contact: React.createRef() };
    this.windowYOffset = 0;

  }

  handleScroll = () => {
    const halfWindow = window.innerHeight / 2;
    let StyleNavbarOnScroll = this.state.StyleNavbarOnScroll;
    let StyleProjectsOnScroll = this.state.StyleProjectsOnScroll;
    let StyleContactOnScroll = this.state.StyleContactOnScroll;
    let doUpdate = false;

    let windowAfterScroll = window.scrollY;
    if (windowAfterScroll > this.windowYOffset) {
      if (StyleNavbarOnScroll['show']) {
        StyleNavbarOnScroll['show'] = false; doUpdate = true;
  
      }
    } else {
      if (!StyleNavbarOnScroll['show']) {
        StyleNavbarOnScroll['show'] = true; doUpdate = true;
      }
    }
    this.windowYOffset = windowAfterScroll;


    for (let key in this.DomRefs) {
      let view = this.DomRefs[key].current.getBoundingClientRect();
      if (view.bottom > halfWindow && view.top < 90 && !StyleNavbarOnScroll[key]) {
        for (let k in StyleNavbarOnScroll) { StyleNavbarOnScroll[k] = false; }
        StyleNavbarOnScroll[key] = true;
        doUpdate = true;
      }
    }

    if (StyleNavbarOnScroll["home"] == true || doUpdate) {
      let view = this.DomRefs["projects"].current.getBoundingClientRect();
      if (view.top < halfWindow && !StyleProjectsOnScroll["header"]) {
        StyleProjectsOnScroll["header"] = true;
        doUpdate = true;
      }
      if (view.top < (halfWindow - 100) && !StyleProjectsOnScroll["projectN"]) {
        StyleProjectsOnScroll["projectN"] = true;
        doUpdate = true;
      }
      if (view.top < (halfWindow - 200) && !StyleProjectsOnScroll["projects"]) {
        StyleProjectsOnScroll["projects"] = true;
        doUpdate = true;
      }
    }


    if (StyleNavbarOnScroll["projects"] == true || doUpdate) {
      let view = this.DomRefs["contact"].current.getBoundingClientRect();
      if (view.top < halfWindow && !StyleContactOnScroll["header"]) {
        StyleContactOnScroll["header"] = true;
        doUpdate = true;
      }
      if (view.top < (halfWindow - 100) && !StyleContactOnScroll["contact"]) {
        StyleContactOnScroll["contact"] = true;
        doUpdate = true;
      }
    }

    if (doUpdate) {
      this.setState({
        StyleNavbarOnScroll: StyleNavbarOnScroll,
        StyleProjectsOnScroll: StyleProjectsOnScroll,
        StyleContactOnScroll: StyleContactOnScroll
      });
    }



  }

  componentDidMount() {
    this.windowYOffset = window.scrollY;
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);

  }
  componentDidUpdate() {


  }


  render() {
    return (
      <div>
        <NavbarWithScroll
          DomRefs={this.DomRefs}
          StyleNavbarOnScroll={this.state.StyleNavbarOnScroll} />

        <Home 
        homeRef={this.DomRefs["home"]}
        projectsRef={this.DomRefs["projects"]}/>

        <Projects
          projectsRef={this.DomRefs["projects"]}
          StyleProjectsOnScroll={this.state.StyleProjectsOnScroll}
          NavbarIsShowed={this.state.StyleNavbarOnScroll["show"]} />

        <Contact
          contactRef={this.DomRefs["contact"]}
          homeRef={this.DomRefs["home"]}
          StyleContactOnScroll={this.state.StyleContactOnScroll}
          NavbarIsShowed={this.state.StyleNavbarOnScroll["show"]}
        />
      </div>
    );
  }
}



export default App;
