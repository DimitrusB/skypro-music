import { Link } from 'react-router-dom'
import logo_modal from '../../img/logo_modal.png'
import * as S from "../../components/styled/signin.style";

export function SignIn() { 

    return(
<S.Wrapper>
<S.ContainerEnter>
  <S.ModalBlock>
    <S.ModalFormLogin action="#">
      <Link to="/" >
        <S.ModalLogo>
          <S.ModalLogoImg src={logo_modal} alt="logo" />
        </S.ModalLogo>
      </Link>
      <S.ModalInput
        type="text"
        name="login"
        placeholder="Почта"
      />
      <S.ModalInput
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <S.ModalBtnEnter>
        <Link className={S.ModalBtnEnterA} to="/">Войти</Link>
      </S.ModalBtnEnter>
      <S.ModalBtnSignup>
        <Link className={S.ModalBtnSignupA} to="/signup">Зарегистрироваться</Link>
      </S.ModalBtnSignup>
    </S.ModalFormLogin>
  </S.ModalBlock>
</S.ContainerEnter>
</S.Wrapper>
    )
}