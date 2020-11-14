import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";

const mSTP = ({ errors }) => ({
  errors: errors,
  formType: "Log In",
  navLink: (
    <Link to="/signup" className="">
      Sign Up
    </Link>
  ),
});

const mDTP = (dispatch) => {
  // debugger;
  return {
    login: (formPhysician) => dispatch(login(formPhysician)),
  };
};

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(Object.assign({}, this.state));
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(
      {
        email: "000@demo.com",
        password: "123456",
      },
      () => this.props.login(Object.assign({}, this.state))
    );
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors)}
      </ul>
    )
  }

  render() {
    return (
      <form className="sign-log-form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.update("email")}
          className="sign-log-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.update("password")}
          className="sign-log-input"
          minLength={6}
        />

        <div className="sign-log-errors-box">
          {this.renderErrors()}
        </div>

        <input
          type="submit"
          value={this.props.formType}
          className="sign-log-button"
        />

        <div className="sign-log-switch">
          New Here? <span className="sign-log-span">{this.props.navLink}</span>
        </div>

        <button onClick={this.handleClick} className="sign-log-button demo">
          Demo User 1
        </button>

      </form>
    );
  }
}

export default connect(mSTP, mDTP)(LogInForm);
