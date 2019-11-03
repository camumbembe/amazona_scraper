import React from 'react';
import './SignUp.css';
import TextField from '@material-ui/core/TextField';

//props são informações passadas do componente pai para o componente filho;

class SignUp extends React.Component{

    state={email:'', usuario:''} //estados do componente
    
    onChange = (event) => {
        console.log(event.target.value)
        if (event.target.name=='email') {
            this.setState({email:event.target.value})
        }
        else if (event.target.name=='usuario') {
            if (event.target.value[0]=='@') {
                this.setState({usuario:event.target.value})                
            }
            else {
                this.setState({usuario:'@' + event.target.value})
            } 
            // this.setState({usuario: event.target.value[0]=='@'? event.target.value : '@' + event.target.value})
        } 

    };

    render() {
        return (
            <div className='sign_up'>
                <h1>Registro</h1>
                <form className="container">
                        <div className="ui input " >
                            <input onChange={this.onChange} type="text" name='email' placeholder="E-mail" value={this.state.email}/>
                        </div>
                        <div className="ui input " >
                            <input onChange={this.onChange} type="text" name='usuario' placeholder="Usuário Telegram" value={this.state.usuario}/>
                        </div>
                        {/* <TextField className='sign_teste' onChange={this.onChange} name='email'  label='E-mail' />
                        <TextField onChange={this.onChange} name='usuario'  label='Usuário Telegram' /> */}
                </form>
            </div>
        )        
    };
};

export default SignUp;