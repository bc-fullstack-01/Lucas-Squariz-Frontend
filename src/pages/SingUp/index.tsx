import React from 'react';
import { useNavigate } from 'react-router-dom';
import server from '../../api/server';
import AuthForm from '../../components/AuthForm';

export default function Signup() {
  const navigate = useNavigate();
  const handleRegister = async (user: string, password: string) => {
    try {
      await server.post('/security/register', {
        user,
        password
      });
      
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthForm
      onSubmitForm={handleRegister}
      onSubmitButtonText="Cadastro"
      LinkText="Já tem uma conta? Faça o login!"
      LinkRoute="/singin"
    />
  );
}