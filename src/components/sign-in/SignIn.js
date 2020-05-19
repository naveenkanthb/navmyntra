import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../../components/form-input/FormInput';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const { value,name } = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>SignIn with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        name='email' 
                        required 
                        handleChange={this.handleChange} 
                        label='email'
                    />
                    <FormInput 
                        type="password" 
                        value={this.state.password} 
                        name='password' 
                        required 
                        handleChange={this.handleChange} 
                        label='password'
                    />
                    <input type='submit' value='submit form'></input>
                </form>
            </div>
        )
    }
}

export default SignIn;