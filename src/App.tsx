import React from 'react';
import SingIn from './pages/SingIn';
import {Container, Stack, TextField, Button} from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <SingIn />
      <Container maxWidth="xs">
        <Stack spacing={4}>
          <h1>Sign In</h1>
          <TextField variant="outlined" label="Usuário" />
          <TextField variant="outlined" label="Senha" />
          <Button variant="contained">Login</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
