import React, { Component } from 'react';
import Project from './components/Project';
import ProjectItem from './components//ProjectItem'
import AddProject from './components//AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      project: [

      ]
    }
  }
  componentWillMount(){
    this.setState({project: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile App'
      },
      {
        title: 'E-commerce Shopping Center',
        category: 'Web Developement'
      },
    ]});
  }
  handleAddProject(projects){
    //console.log(project);
    let project = this.state.project;
    project.push(projects);
    this.setState({project:project});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Project project={this.state.project} />
      </div>
    );
  }
}

export default App;
