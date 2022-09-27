import React from "react";
import PButton from "../Components/PButton";
import * as S from "./LoginStyled";

const Login = () => {
  return(
    <S.Wrapper>
        <S.LoginWindow>
        <img src="http://localhost:3000/logo192.png" width="48" heigth="48" style={{margin:'16px'}} />
        <span id="acess">Acesse a sua conta</span>
        <button id="face"> <svg class="sc-hzNEM Ihoxn sc-fONwsr eZmOan" width="12.4px" height="24px" viewBox="0 0 12.4 24"><path fill="#fff" d="M8.06658388,24 L8.06658388,13.0674637 L11.756254,13.0674637 L12.3070237,8.78803124 L8.06658388,8.78803124 L8.06658388,6.06342678 C8.06658388,4.8254133 8.41264277,3.98707346 10.1868038,3.98707346 L12.4532458,3.98707346 L12.4532458,0.165803515 C11.3602506,0.052837448 10.2620638,-0.00247862868 9.16324936,8.51757899e-05 C5.90249733,8.51757899e-05 3.67992195,1.98870525 3.67992195,5.63938279 L3.67992195,8.78803124 L0,8.78803124 L0,13.0674637 L3.67992195,13.0674637 L3.67992195,24 L8.06658388,24 Z"></path></svg><span>Entrar com facebook</span></button>
        <button id="google"><svg class="sc-fcdeBU eOTYbu sc-kxynE ddiXfL" width="24px" height="24px" viewBox="0 0 512 512"><path fill="#ffff" d="M457.732 216.625c2.628 14.041 4.063 28.743 4.063 44.098C461.796 380.688 381.481 466 260.204 466c-116.023 0-210-93.977-210-210s93.977-210 210-210c56.704 0 104.077 20.867 140.44 54.73l-59.204 59.197v-.135c-22.046-21.002-50-31.762-81.236-31.762-69.297 0-125.604 58.537-125.604 127.841 0 69.29 56.306 127.968 125.604 127.968 62.87 0 105.653-35.965 114.46-85.312h-114.46v-81.902h197.528z"></path></svg><span>Entrar com o google</span></button>
        <button id="senha"><svg class="sc-iSDuPN kAOKdi sc-fONwsr jDaycD" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#F28000" d="M22.75 5.988V18A2.756 2.756 0 0 1 20 20.75H4A2.756 2.756 0 0 1 1.25 18V6.01v-.022A2.756 2.756 0 0 1 4 3.25h16a2.756 2.756 0 0 1 2.75 2.738zm-1.552-.342A1.258 1.258 0 0 0 20 4.75H4c-.563 0-1.044.38-1.198.896L12 12.085l9.198-6.44zm.052 1.794l-8.82 6.174a.75.75 0 0 1-.86 0L2.75 7.44V18c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25V7.44z"></path></svg><span>Entrar com a senha</span></button>

        <span>ou</span>

        <S.LForm>
            <div className="form-c">
            <span><b>Email</b></span>
            <input type="email"/>
            </div>

            <div className="form-c">
                <div className="div-f"  >
                <span><b>Senha</b></span>
                <span style={{color:'#850AD6'}} >Esqueceu sua senha?</span>
                </div>
            <input type="password"/>
            </div>
        </S.LForm>

        <PButton variant='containedF'>Entrar</PButton>
        <div style={{display:'flex',justifyContent:'space-between'}} >
        <span>Não tem uma conta?</span>
        <span style={{color:'#850AD6',marginLeft:'12px'}} >Cadastre-se</span>
        </div>

        <div id="end" >
        <span>Precisa de ajuda <svg class="sc-fONwsr hOXCyK" width="16px" height="16px" viewBox="0 0 24 24"><path fill="#4A4A4A" d="M8.46966991,17.4696699 C8.1767767,17.7625631 8.1767767,18.2374369 8.46966991,18.5303301 C8.76256313,18.8232233 9.23743687,18.8232233 9.53033009,18.5303301 L15.5303301,12.5303301 C15.8232233,12.2374369 15.8232233,11.7625631 15.5303301,11.4696699 L9.53033009,5.46966991 C9.23743687,5.1767767 8.76256313,5.1767767 8.46966991,5.46966991 C8.1767767,5.76256313 8.1767767,6.23743687 8.46966991,6.53033009 L13.9393398,12 L8.46966991,17.4696699 Z"></path></svg></span>
        </div>
        </S.LoginWindow>
    </S.Wrapper>
  );
};

export default Login;
