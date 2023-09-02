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
        <S.ModalBtnEnterA to="/">Войти</S.ModalBtnEnterA>
      </S.ModalBtnEnter>
      <S.ModalBtnSignup>
        <S.ModalBtnSignupA to="/signup">Зарегистрироваться</S.ModalBtnSignupA>
      </S.ModalBtnSignup>
    </S.ModalFormLogin>
  </S.ModalBlock>
</S.ContainerEnter>
</S.Wrapper>
    )
}