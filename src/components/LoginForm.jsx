import React, { Component } from "react";
import Input from "./common/Input";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    }
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return { errors };
  };
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(errors);
    if (errors) return;
    console.log("Submitted");
  };

  handleChange = e => {
    console.log(e.currentTarget.name);
    const account = { ...this.state.account };
    if (e.currentTarget.name === "password") {
      account.password = e.currentTarget.value;
    } else {
      account.username = e.currentTarget.value;
    }
    this.setState({ account });
  };

  render() {
    const { errors, account } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name={"email"}
            value={account.username}
            id={"email"}
            label={"Email address"}
            error={errors.username}
          />
          <Input
            onChange={this.handleChange}
            name={"password"}
            value={account.password}
            id={"pwd"}
            label={"Password"}
            error={errors.password}
          />

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
