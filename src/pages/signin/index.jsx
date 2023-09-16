import { Link, useNavigate } from 'react-router-dom';
import logo_modal from '../../img/logo_modal.png';
import * as S from './signin.style';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';
import { signIn } from '../../api';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setEmail: setUserEmail } = useContext(UserContext);
  

  const handleLogin = (e) => {
    e.preventDefault();
  
    signIn(email, password)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Ошибка авторизации: ' + response.statusText);
        }
      })
      .then((json) => {
        setUserEmail(json.email);
        navigate('/');
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        alert('Ошибка при входе: ' + error.message);
      });
  };
  


  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleLogin}>
            <Link to='/'>
              <S.ModalLogo>
                <S.ModalLogoImg src={logo_modal} alt='logo' />
              </S.ModalLogo>
            </Link>
            <S.ModalInput
              type='text'
              name='login'
              placeholder='Почта'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type='password'
              name='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterA onClick={handleLogin}>
                Войти
              </S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <S.ModalBtnSignupA to='/signup'>
                Зарегистрироваться
              </S.ModalBtnSignupA>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
}