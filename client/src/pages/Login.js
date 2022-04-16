import React from "react";


class Login extends React.Component {

    state = {
        email: '',
        password: '',
        userVerified: ''
    };

    verifyUser = () => {

    };

    login = (event) => {

    };

    handleChange = ({ target }) => {

        const { name, value } = target;
        this.setState({[name]: value});
    };

    resetUserInput = () => {

        this.setState({
            email: '',
            password: ''
        });
    };


    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <form onSubmit={this.login}>
                    <div className={"login-input"}>
                        <br/><br/>
                        <h2>User Login</h2>
                    </div>
                    <div className={"login-input"}>
                        <br/>
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={"login-input"}>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <br />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;