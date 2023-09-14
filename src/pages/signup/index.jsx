import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_modal from '../../img/logo_modal.png';
import * as S from './signup.Style';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const storedUser = localStorage.getItem(email);
      if (!storedUser) {
        localStorage.setItem(
          email,
          JSON.stringify({
            password: password,
          })
        );
        alert('Успешная регистрация!');
      } else {
        alert('Пользователь уже существует!');
      }
    } else {
      alert('Пароли не совпадают!');
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSignup}>
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
            <S.ModalInput
              type='password'
              name='confirmPassword'
              placeholder='Повторите пароль'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <S.ModalBtnSignupEnt>
              <S.ModalBtnSignupEntA onClick={handleSignup} to='/'>
                Зарегистрироваться
              </S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  );
}
