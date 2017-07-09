import React, { Component } from 'react';
import LoginInfo from './LoginInfo';
import './Person.css';

class Person extends Component {

  constructor(props){
    super();

    this.state = {showLogin: false};

    this.toggleLoginInfo = this.toggleLoginInfo.bind(this);
  }

  toggleLoginInfo(){
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }));
  }

  render() {
    const showLogin = this.state.showLogin;
    return (
      <div className="Person">
        <div>
          <img className="Person-image" src={this.props.src} alt={this.props.name} onClick={this.toggleLoginInfo}/>
        </div>
        <div className='Person-info'>
          <h3 className="Person-name">{this.props.name}</h3>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          { showLogin &&
            <LoginInfo username={this.props.username} password={this.props.password}/>          
          }
        </div>
      </div>
    );
  }
}

export default Person;
