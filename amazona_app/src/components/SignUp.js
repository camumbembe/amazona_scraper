import React from 'react';
import './SignUp.css';
// import {Label, Input, Field, Control} from 'react-bulma-components/lib/components/form';
import TextField from '@material-ui/core/TextField';


class SignUp extends React.Component{

    state={name:'', email:'', idade:''}
    
    onChange = (event) => {
        console.log(event)
        if (event.target.name=='name') {
            this.setState({name:event.target.value})            
        }
        else if (event.target.name=='email') {
            this.setState({email:event.target.value})
        }
        else if (event.target.name=='idade') {
            this.setState({idade:event.target.value})
        } 
    };

    render() {
        return (
            <div className='sign_up'>
                <h1>Registro</h1>
                <form noValidate autoComplete="off">
                        <TextField onChange={this.onChange} name='name' value={this.state.name} label='Text input' />
                        <TextField onChange={this.onChange} name='email' value={this.state.email} label='E-mail input' />
                        <TextField onChange={this.onChange} name='idade' value={this.state.idade} label='Idade input' />
                </form>
            </div>
        )        
    };
};

export default SignUp;