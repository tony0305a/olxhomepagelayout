import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-radius:16px;

`;
export const LoginWindow = styled.div`
  background-color: #ffff;
  width: 25%;
  height:80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img{
        margin-top:24px;
    }

    #acess{
        font-weight:bold;
        color: #4a4a4a;
        font-size:18px;
        margin:18px;
    }

    #face{
        display:flex;
        width:70%;
        align-items:center;
        border-radius:30px;
        justify-content:flex-start;
        background-color:#3A5998;
        color:white;
        padding:16px;
        height:49px;
        span{
            margin-left:6vh;
        }
    }
    #senha{
        margin-top:8px;
        display:flex;
        width:70%;
        align-items:center;
        border-radius:30px;
        justify-content:flex-start;
        background-color:#FFF;
        color:#F99E53;
        border:1px solid #F99E53;
        padding:16px;
        border-radius:20px;
        span{
            margin-left:6vh;
        }
    }
    #google{
        margin-top:8px;
        display:flex;
        width:70%;
        align-items:center;
        border-radius:30px;
        justify-content:flex-start;
        background-color:#5591F5;
        color:white;
        padding:16px;
        border-radius:20px;
        span{
            margin-left:6vh;
        }
    }
    #end{
        margin-top:65px;
        display:flex;
        width:100%;
        height:50px;
        justify-content:center;
        align-items:center;
        background-color:#f9f9f9;
        cursor: pointer;
        &:hover{
            background-color:#F7F1FD;
            span{
                font-size:16px;
                color:#850AD6;
            }
        }
    }

`;
export const LForm = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
padding:40px;
width:100%;
.form-c{
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:flex-start;
    input{
        border:1px solid #d2d2d2;
        width:100%;
        height:50px;
        border-radius:8px;
        padding:16px;
    }
    .div-f{
        display:flex;
        width:100%;
        justify-content:space-between;
    }
}
`;
