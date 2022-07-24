import server from '../../api/server';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import './index.css';
import AuthForm from '../../components/AuthForm/index'

interface TokenUser {
    user: string,
    profile: string,
}

const SingIn = () => {
    const navigate = useNavigate();
    const handleLogin = async (user: string, password: string) => {
        const response = await server.post('/security/login', {
            user,
            password,
        });
        const { accessToken } = (response.data);
        localStorage.setItem('accessToken', accessToken);
        const decoded = jwt_decode(accessToken) as TokenUser;
        localStorage.setItem('user', decoded.user);
        localStorage.setItem('profile', decoded.profile);
        navigate('/');
    }

    return (
        <AuthForm
            onSubmitForm={handleLogin}
            onSubmitButtonText="Login"
            LinkText="Não tem um conta? faça seu cadastro"
            LinkRoute="/singup" 
        />
    )
};

export default SingIn;