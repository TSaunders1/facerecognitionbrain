import React from 'react';

// eslint-disable-next-line react/prop-types
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmitSignIn = () => {
    // eslint-disable-next-line react/prop-types
    const { onRouteChange, loadUser } = this.props;
    const { email, password, name } = this.state;
    fetch('https://salty-dawn-68542.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((response) => response.json()).then((user) => {
      if (user.id) {
        loadUser(user);
        onRouteChange('home');
      }
    });
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                  <input
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                  />
                </label>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </label>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </label>
              </div>
            </fieldset>
            <div className="lh-copy mt3 center">
              <button
                type="button"
                onClick={this.onSubmitSignIn}
                href="#0"
                className="f4 link dim black b--black db bg-transparent grow pointer"
              >
                Register
              </button>
            </div>
          </div>
        </main>
      </article>

    );
  }
}

export default Registration;
