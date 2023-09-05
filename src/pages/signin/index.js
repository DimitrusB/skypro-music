import { Link, useNavigate } from 'react-router-dom';
import logo_modal from '../../img/logo_modal.png';
import * as S from '../../components/styled/signin.style';
import { useContext, useState } from 'react';
import UserContext from '../../components/UserContext';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setEmail: setUserEmail } = useContext(UserContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        setUserEmail(email); // Обновление email в контексте
        navigate('/');
      } else {
        alert('Неверный пароль!');
      }
    } else {
      alert('Пользователь не найден!');
    }
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