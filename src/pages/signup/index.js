import { Link } from "react-router-dom";
import * as S from "../../components/styled/signup.Style";
import logo_modal from '../../img/logo_modal.png'

export function SignUp() {
  return (
    <div className="wrapper">
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <Link to="/">
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
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignupEnt>
              <S.ModalBtnSignupEntA href="../index.html">Зарегистрироваться</S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </div>
  );
}
