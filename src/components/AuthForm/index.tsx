import { Container, Stack, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.svg'

interface Props {
    onSubmitForm: any,
    onSubmitButtonText: string,
    LinkText: string,
    LinkRoute: string,
}

const AuthForm = ({onSubmitForm, onSubmitButtonText, LinkText, LinkRoute}:Props) => {
    const [user, setUser] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(user.value, password.value);
    }
    return (
        <Container maxWidth="xs">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Stack
                    direction="column"
                    justifyContent='center'
                    alignItems='center'
                    spacing={6}>
                    <img src={logo} alt="logo" className="logo" />
                    <Stack
                        direction="column"
                        justifyContent='center'
                        alignItems='stretch'
                        spacing={6}>
                        <TextField variant="outlined" label="Usuário" name="user" value={user.value} onChange={(e) => setUser({ value: e.target.value, error: '' })} />
                        <TextField type="password" variant="outlined" label="Senha" name="user" value={password.value} onChange={(e) => setPassword({ value: e.target.value, error: '' })} />
                        <Button variant="contained">{onSubmitButtonText}</Button>
                        <Link to={LinkRoute}>{LinkText}</Link>
                    </Stack>
                </Stack>
            </form>
        </Container>
    )
};

export default AuthForm;