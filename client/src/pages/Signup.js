import React from "react";
import axios from "axios";


class Signup extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        emailExists: ''
    };

    /*
    * Method for making a get request to /signup/save/data:email
    * to check if the current users email does not exist in the database
    */
    checkEmailInDB = (email) => {

        let url = `/signup/data${email}`;

        axios(url)
            .then((response) => {

                let data = response.data;

                this.setState({
                    emailExists: data
                })

            })
            .catch(() => {
                alert('Client failed to request data from server');
            })
    };

    // function for sending user data top server
    submit = (event) => {

        // prevents browser from refreshing
        event.preventDefault();

        // data to send
        const payload = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios({
            url: '/signup/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to server');
                this.resetUserInput();
            })
            .catch(() => {
                console.log('Error, data not sent to server (Client)');
            })
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({[name]: value});
    };

    resetUserInput = () => {
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    };

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <form onSubmit={this.submit}>
                    <div className={"signup-input"}>
                        <br /><br /><br /><br />
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={"signup-input"}>
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={"signup-input"}>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;