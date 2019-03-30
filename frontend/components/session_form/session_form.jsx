import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.location.state){
      this.state = this.props.location.state.user;
    } else {
      this.state = {
        username: '',
        email: '',
        password: ''
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let form;
    if(this.props.formType === "signup-page"){
      form = "signup";
    } else if(this.props.formType === "login-page"){
      form = "login";
    } else {
      form = this.props.formType;
    }
    
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      (()=> this.props.history.push("/home")),
      (()=> this.props.history.push({pathname: `/${form}`, state: {user: user}}))
    );
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({}, {email: "test1@gmail.com", password: "bestreads"});
    this.props.processForm(user).then(()=> this.props.history.push("/home"));
  }

  renderErrors() {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render() {

    const extraForm = (this.props.formType === 'signup' || this.props.formType === 'signup-page') ? (
      <>
        <div className="username-text">
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            required="required"
            className="signup-input"
            placeholder='Name'
          />
        </div>
      </>
    ) : (<div></div>)

    const demoButton = (this.props.formType === 'login') ? (
      <>
        <div className="demo-button">
          <button value='Demo Login' onClick={this.handleDemo}>demo login</button>
        </div>
        </>
    ) : (<div></div>)

    return (
      <div className={`${this.props.formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>

          {this.renderErrors()}
          <div className={`${this.props.formType}-form`}>
            {extraForm}
            <div>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                required="required"
                valid="email"
                className={`${this.props.formType}-input`}
                placeholder='Email Address'
                />
            </div>
            <div className="password-text">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                required="required"
                className={`${this.props.formType}-input`}
                placeholder='Password'
                />
            </div>
            <input className={`${this.props.formType}-submit`} type="submit" value="submit"/>
          </div>
        </form>
        {demoButton}
      </div>
    );

  }

}

export default withRouter(SessionForm);