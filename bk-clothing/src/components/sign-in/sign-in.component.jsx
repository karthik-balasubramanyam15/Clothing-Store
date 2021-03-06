import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.compoment';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    _handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    _handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already Have An Account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this._handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label='email'
                        handleChange={this._handleChange} />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label='password'
                        handleChange={this._handleChange} />
                    <div className='buttons'>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}