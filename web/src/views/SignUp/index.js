import React, { useState } from 'react';
import * as S from './styles'
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

function SignUp() {

  const [redirect, setRedirect] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  async function Save() {
    if (!email) return alert('O campo e-mail é obrigatório');
    else if (!password) return alert('O campo senha é obrigatório');
    else if (!name) return alert('O campo nome é obrigatório');

    await api.post('/user', {
      email, password, name
    }).then(() => {
        alert('Conta criada!');
        setRedirect(true);
      }
    );
  }

  return (
    <S.Container>
      { redirect && <Redirect to="/signin" /> }
      <S.Sign>
        <h1>Criar conta</h1>
        <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
        <button onClick={Save}>Criar conta</button>
        <Link to="/signin">
          Já possui uma conta?
        </Link>
      </S.Sign>
    </S.Container>
  );
}

export default SignUp;
