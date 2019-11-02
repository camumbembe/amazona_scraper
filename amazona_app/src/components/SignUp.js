import React from 'react';
import './SignUp.css';
import {Label, Input, Field, Control} from 'react-bulma-components/lib/components/form';


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
                <Field>
                    <Control>
                        <Input onChange={this.onChange} name='name' value={this.state.name} placeholder='Text input' />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input onChange={this.onChange} name='email' value={this.state.email} placeholder='E-mail input' />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input onChange={this.onChange} name='idade' value={this.state.idade} placeholder='Idade input' />
                    </Control>
                </Field>
            </div>
        )        
    };
};

export default SignUp;