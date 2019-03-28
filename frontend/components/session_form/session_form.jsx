import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=> {

      this.props.history.push("/home");
    }) 
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
    const extraForm = (this.props.formType === 'signup') ? (
      <>
      
        <label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'
          />
        </label>
      </>
    ) : (<label></label>)

    const demoButton = (this.props.formType === 'login') ? (
      <>
        <div className="demo-button">
          <button value='Demo Login' onClick={this.handleDemo}>demo login</button>
        </div>
        </>
    ) : (<label></label>)

    return (
      <div className={`${this.props.formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>

          {this.renderErrors()}
          <div className={`${this.props.formType}-form`}>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className={`${this.props.formType}-input`}
                placeholder='email'
              />
            </label>
            {extraForm}
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-form`}
                placeholder='password'
              />
            </label>
            <input className={`${this.props.formType}-submit`} type="submit" value={this.props.formType} />
          </div>
        </form>
        {demoButton}
      </div>
    );


  }

}

export default withRouter(SessionForm);