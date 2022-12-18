import { useState } from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";
import { Divider } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../apis/ApiService";

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const apiService = ApiService();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        const req = {
            id: id,
            password: password
        };
        apiService.login(req)
            .then((res) => {
                setLoading(false);
                localStorage.setItem("jwt", res.token);
                navigate("/problem/solve");
            })
            .catch((err) => {
                console.log('req', req);
                alert("로그인 실패했습니다.");
                setLoading(false);
            }
        );
    };

    const onIdChange = (e) => {
        setId(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onCheckEnter = (e) => {
        if (e.key === 'Enter') {
            submitHandler(e);
        }
    };

    return (
        <LoginFormBlock>
            <div className="shadow-block">
                <div style={{ width: '80%', height: '50%' }}>
                    <p>로그인</p>
                    <hr style={{ borderTop: '1px solid #ddd' }}></hr>
                    <br></br>
                    <form onSubmit={submitHandler} onKeyDown={onCheckEnter}>
                        <textarea id="id" name="id" onChange={onIdChange} rows="1" placeholder="id" required></textarea>
                        <textarea id="password" name="password" onChange={onPasswordChange} rows="1" placeholder="password" required></textarea>
                        <button className="login" type="submit">
                            {loading ? <BeatLoader color="#fff" size="10px" /> : "로그인"}</button>
                        <div className="signup">
                            <Divider className="divider"></Divider>
                            <Link to="/signup" className="signup-btn" style={{textDecoration:"none", fontSize:"0.9em"}}>
                                회원가입
                            </Link>
                            <Divider className="divider"></Divider>
                        </div>
                    </form>
                </div>

            </div>
        </LoginFormBlock>
    );
}

const LoginFormBlock = styled.div`
height: 100%;

* {
    font-family:  'Spoqa Han Sans Neo';
    font-weight: bold;
}

p {
text-align: center;
font-size: 2.5em;
margin-bottom: 1rem;
color: #555;
}

.shadow-block{
display: flex;
align-items: center;
justify-content: center;

height: 23rem;
    /* height: 40%; */
    margin: auto;
    /* min-height: 25rem; */
    background-color: #fdfdfd;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 20%);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 23rem;
    max-width: 35rem;
    width: 80%;
    margin-top: 1rem;
}

.divider{
    background-color: #ccc;
    width: 37%;
}

.signup {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
        text-decoration: underline;
    }
}

form {
    min-width: 10rem;
    max-width: 20rem;
    height: 5rem;
    display:grid;
    gap: 0.5rem;
    margin: 0 auto;
    width: 100%;
    textarea{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-left: 0.8rem;
        resize: none;
        height: 2.5rem;
        line-height: 2.3rem;
        font-weight: normal;
    }

    #id {
        grid-row-start:1;
        grid-column:1;
    }
    #password {
        grid-row-start:2;
        grid-column:1;
    }
    .login {
        grid-row: 1/3;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: #ffffff;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        background-color: #8bb8ff;
    }
    .signup-btn {
        background: none;
        border: 0;
        color: #767676;
        cursor: pointer;
    }
}
`

export default LoginForm;