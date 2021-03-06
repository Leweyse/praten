import React, { Component, useState } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: ''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    changeConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        axios.post('http://localhost:5000/api/signup', registered)
          .then(res => console.log(res.data))

        this.setState({
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return (
            <div className='signUp__body'>
                <form className='signUp_form' onSubmit={this.onSubmit}>
                    <input
                        className='signUp_input--fullName'
                        type='text'
                        placeholder='Full Name'
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                    />
                    <input
                        className='signUp_input--userName'
                        type='text'
                        placeholder='User Name'
                        onChange={this.changeUserName}
                        value={this.state.userName}
                    />
                    <input
                        className='signUp_input--password'
                        type='password'
                        placeholder='Password'
                        onChange={this.changePassword}
                        value={this.state.password}
                    />
                    <input
                        className='signUp_input--confirmPassword'
                        type='password'
                        placeholder='Confirm Password'
                        onChange={this.changeConfirmPassword}
                        value={this.state.confirmPassword}
                    />
                    <input
                        className='signUp_input--submitBtn'
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        );
    }
}

export default SignUp;
