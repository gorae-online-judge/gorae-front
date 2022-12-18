import styled from "styled-components";
import { useEffect, useState } from "react";
import TopNavigationBar from '../components/TopNavigationBar';
import ApiService from '../apis/ApiService';
import { Link, Navigate, useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const CheckState = {
        YET: "yet",
        PASSED: "passed",
        NOT_PASSED: "not_passed"
    }

    const [id, setId] = useState("");
    const [idDuplicateState, setIdDuplicateState] = useState(CheckState.YET);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [bojToken, setBojToken] = useState("");
    const [loading, setLoading] = useState(false);
    const [idConfirmMessage, setIdConfirmMessage] = useState("");

    const apiService = ApiService();

    // useEffect(() => {
    //     if (loading) {
    //         document.body.style.cursor = "wait";
    //     } else {
    //         document.body.style.cursor = "";
    //     }
    // }, [loading])
    
    useEffect(() => { 
        if (idDuplicateState === CheckState.NOT_PASSED)
            setIdConfirmMessage("존재하는 아이디입니다.")
        else if (idDuplicateState === CheckState.PASSED)
            setIdConfirmMessage("사용 가능한 아이디입니다.")
    }, [idDuplicateState]);


    const onIdChange = (e) => {
        setId(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onBojTokenChange = (e) => {
        setBojToken(e.target.value);
    }

    const onPasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);

    }

    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();

        if (idDuplicateState === CheckState.PASSED) {
            if (password === passwordConfirm) {
                const req = {
                    "id": id,
                    "password": password,
                    "bojToken": bojToken
                }
                apiService.createMember(req)
                    .then((data) => {
                        setLoading(false);
                        alert("회원가입이 완료되었습니다.");
                        navigate("/problem/solve");
                    });
            } else {
                alert("비밀번호가 일치해야 합니다.");
            }
        } else {
            alert("아이디 중복 확인을 해주세요.");
        }

    };

    const onCheckEnter = (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
            e.preventDefault();
        }
    };

    const checkIdDuplicate = (e) => {
        setLoading(true);
        apiService.isIdDuplicated(id)
            .then((res) => {
                if (res.duplicated) { // 중복
                    setIdDuplicateState(CheckState.NOT_PASSED);
                } else {
                    setIdDuplicateState(CheckState.PASSED);
                }
                setLoading(false);
            })
            .catch((e) => {
                console.log('id', id);
                console.log(e);
            });
    }

    return (
        <>
            <TopNavigationBar />
            <div className='app'>
                <main>
                    <SignUpBlock onSubmit={submitHandler} onKeyDown={onCheckEnter}>
                        <InputBlock>
                            <label for="id">아이디</label>
                            <button type="button" onClick={checkIdDuplicate}>중복 확인</button>
                            <p style={{marginLeft: '0.3rem'}}>⚠️ 백준 아이디와 같은 아이디를 입력해주세요. 다르다면 제출 후 결과를 받아올 수 없습니다.</p>
                            <input id="id" name="id" onChange={onIdChange} rows="1" placeholder="id" type='id' required></input>
                            <p style={{ marginLeft: '0.3rem', fontSize: '0.9rem' }}>
                                { idConfirmMessage }
                            </p>
                        </InputBlock>

                        <InputBlock>
                            <label for="password">비밀번호</label>
                            <input id="password" name="password" onChange={onPasswordChange} rows="1" placeholder="password" type='password' required></input>
                        </InputBlock>

                        <InputBlock>
                            <label for="password-check">비밀번호 확인</label>
                            <input id="password-check" name="password-confirm" onChange={onPasswordConfirmChange} rows="1" placeholder="password" type='password' required></input>
                            <p style={{ marginLeft: '0.5rem', fontSize: '0.9rem' }}>
                                {passwordConfirm.length > 0 && (password === passwordConfirm ? "비밀번호와 일치합니다." : "비밀번호와 다릅니다.")}
                            </p>

                        </InputBlock>

                        <ShadowBlock className="shadow-block">
                            <label for="autologin">
                                <InputBlock>
                                    <p style={{ fontWeight: 'bold', paddingBottom: '0.3rem', textAlign: 'center' }}>
                                        백준 로그인 토큰
                                    </p>
                                    <a href="https://www.acmicpc.net/">백준</a>에 제출하고, 코드를 가져오는 기능을 위해 토큰이 필요합니다.<br />
                                    코드를 받아오는 방법은 아래와 같습니다. (구글 크롬을 사용해주세요.)
                                    <ol>
                                        <li>크롬 웹 스토어에서 <a href="https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ko">EditThisCookie</a>를 설치합니다.</li>
                                        <li>백준 웹 사이트에서 자동로그인으로 로그인 후에, 플러그인의 EditThisCookie를 실행합니다.</li>
                                        <li>'bojautologin'값을 복사 후, 아래에 붙여넣습니다.</li>
                                    </ol>
                                    * 이 값은 외부에 유출하지 않도록 조심해주세요.
                                </InputBlock>
                            </label>
                            <input id="autologin" name="autologin" onChange={onBojTokenChange} rows="1" placeholder="bojautologin" required></input>
                        </ShadowBlock>

                        <p style={{ marginTop: '1.5rem' }}>
                            이미 회원가입 하셨나요? <Link to="/">로그인</Link>
                        </p>
                        <button className="signup" type="submit">회원가입</button>
                    </SignUpBlock>
                </main>
            </div>
        </>
    );
}

const SignUpBlock = styled.form`
width: 90%;
/* height: 100%; */
/* min-width: 25rem; */
max-width: 40rem;
margin: auto;
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
/* margin-top: 1rem; */
position: relative;
top: 5%;

p {
    margin: 0;
}

a {
    text-decoration: none;
    color: #3d79d8;
    margin: 0;
    :hover{
        font-weight: bold;
    }
}

input {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-left: 0.8rem;
    resize: none;
    height: 2.2rem;
    line-height: 2.2rem;
    font-weight: normal;
    width: 100%;
}

button{
        height: 2rem;
        border: 1px solid #ccc;
        border-radius: 10px;
        color: #fff;  //#3e577c;
        cursor: pointer;
        font-weight: 500;
        padding: 0 0.8rem;
        /* width: 20%; */
        background-color: #a0c5ff;
    }

.signup {
    width: 50%;
    height: 3rem;
    margin-top: 0.3rem;
    font-size: 1.2rem;
}

input {
    margin-top: 0.3rem;
    /* margin-bottom: 1rem; */
}
`;

const InputBlock = styled.div`
width: 100%;
* {
    margin: 0.2rem;
}
margin-bottom: 1rem;
label {
    font-weight: bold;
    margin-left: 0.5rem;
}
`;

const ShadowBlock = styled.div`
    background-color: #fdfdfd;
    border-radius: 15px;

    box-shadow: 0px 2px 6px rgb(0 0 0 / 20%);
    /* margin: 1rem 0; */
    padding: 0.8rem 1rem 1rem 1rem;

    text-align: center;

    ol {
        text-align: left;
        margin: 0.5rem 2rem;
    }

    input {
        margin: 0;
        margin-top: 0.8rem;
        /* margin-bottom: 1.5rem; */
    }
`;

export default SignUp;