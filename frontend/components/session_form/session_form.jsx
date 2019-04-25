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
    
    return e => {
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }

      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      (()=> this.props.history.push("/home")).then(this.props.fetchUsers()),
      (()=> this.props.history.push({pathname: `/${this.props.submitType}`, state: {user: user}}))
    );
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({}, {email: "test1@gmail.com", password: "bestreads"});
    this.props.processForm(user).then(() => {
      this.props.history.push("/home");
      this.props.fetchUsers();
    });
  }

  renderErrors() {
      if (this.props.formType === 'login-page' || this.props.formType === 'signup-page'){
        if(this.props.errors.length > 0){
          return (
            <div className={`${this.props.formType}-error-container`}>
              <ul>
                {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`}>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          );

        }else{
          return <div className={`${this.props.formType}-error-container-blank`}></div>
        }
      }
    }

    otherSessionLink() {
      if(this.props.formType === 'signup-page'){
        return(
          <div>
            <Link to="/login" />
          </div>
        )
      } else if(this.props.formType === 'login-page'){
        return(
          <div>
            <Link to="/signup" />
          </div>
        )
      }
    }

  render() {

    const extraForm = (this.props.submitType === 'signup') ? (
      <>
        <div className={`${this.props.formType}-username-text-container`}>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            required="required"
            className={`${this.props.formType}-input`}
            placeholder='Name'
          />
        </div>
      </>
    ) : (<div></div>)

    const demoButton = (this.props.formType === 'login') ? (
      <>
        <div className="demo-button-container">
          <button className="demo-button" value='Demo Login' onClick={this.handleDemo}>demo login</button>
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
            <input className={`${this.props.formType}-submit`} type="submit" value={`${this.props.submitType}`}/>
            {demoButton}          
          </div>
          
        </form>
        
      </div>
    );

  }

}

export default withRouter(SessionForm);