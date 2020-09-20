import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <S.Container>
      <S.Sign>
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button>Entrar</button>
        <Link to="/signup">
          Já possui uma conta?
        </Link>
      </S.Sign>
    </S.Container>
  );
}

export default SignIn;