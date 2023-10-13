import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../components/api/api';
import logo_modal from '../../img/logo_modal.png';
import * as S from './signup.Style';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
  
    if (password.length < 8){
      alert('Длина пароля должна быть не менее 8 символов')
      return
    }

    if (password === confirmPassword) {
      signUp(email, password)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
        })
        .then((json) => {
          console.log(json);
          alert('Успешная регистрация!');
          navigate('/signin');
        })
        .catch((error) => console.log('Ошибка:', error));
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
