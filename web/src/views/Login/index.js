import React, { useState } from 'react';
import * as S from './styles'

function Login() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    return (
      <S.Container>
        <S.Sign>
          <h1>Login</h1>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button>Entrar</button>
          <a onClick={() => setCount(1)} >Não possui uma conta?</a>
        </S.Sign>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.Sign>
          <h1>Criar conta</h1>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button>Criar conta</button>
          <a onClick={() => setCount(0)} >Já possui uma conta?</a>
        </S.Sign>
      </S.Container>
    );
  }
}

export default Login;
