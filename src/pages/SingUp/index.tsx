import React from 'react';
import AuthForm  from '../../components/AuthForm';

export default function Signup() {

  const handleRegister = async () => {

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