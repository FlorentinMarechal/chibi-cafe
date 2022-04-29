import './login.scss';
import Form from '../Form';
import Button from '../../Button';
import Input from '../../Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/auth';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ to }) => {
    const dispatch = useDispatch();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const { messageLogin } = useSelector(state => state.auth);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleSubmitForm = () => {
        dispatch(login(mail, password));
        setMail('');
        setPassword('');
    }

    if (isLoggedIn) {
        return <Redirect to={`${to}`} />
    };

    return (
        <Form handleSubmit={handleSubmitForm}>
            <p className="center" style={{color: "green"}}>{messageLogin}</p>
            <h2 className="login-title center">Connexion</h2>
            <Input 
                type="email" 
                name="mail" 
                id="loginMail" 
                placeholder="Email" 
                value={mail} 
                handleChange={setMail} 
            />
            <Input 
                type="password" 
                name="password" 
                id="loginPassword" 
                placeholder="Mot de passe" 
                value={password} 
                handleChange={setPassword}
            />
            <Button>Se connecter</Button>
            

        </Form>
    );
};



export default Login;