import styled from "styled-components";
import TopNavigationBar from '../components/TopNavigationBar';

function SignUp() {
    return (
        <>
            <TopNavigationBar />
            <div>
                <main>
                    <SignUpBlock>
                    </SignUpBlock>
                </main>
            </div>
        </>
    );
}

const SignUpBlock = styled.div`
`;

export default SignUp;