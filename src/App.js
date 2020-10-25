import React , { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import StudentsTable from './components/StudentsTable/StudentsTable';

class App extends Component {
  state = { show : false }

    showSideBar = () => {
        this.setState({show:true})
    }

    hideSideBar = () => {
      this.setState({show:false})
  }

  render () {
    return (
      <div className="App">
        <Sidebar showsidebar={this.state.show} hideSideBar={this.hideSideBar}/>
        <Navbar show={this.showSideBar}/>
        <StudentsTable/>
      </div>
    );
  }
  
}

export default App;
