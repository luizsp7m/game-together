import React, { useState } from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';
import api from '../../services/api';

function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function Login() {
    if(!email) return alert("O campo email está vázio");
    else if(!password) return alert("O campo senha está vázio");
    
    await api.post('/user/signin', {
      email, password
    }).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <S.Container>
      <S.Sign>
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value) } required />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value) } required />
        <button onClick={Login}>Entrar</button>
        <Link to="/signup">
          Não possui uma conta?
        </Link>
      </S.Sign>
    </S.Container>
  );
}

export default SignIn;