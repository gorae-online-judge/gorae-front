import { useEffect } from "react";
import styled from "styled-components";
import TextFolder from "./TextFolder";

function ProblemInfo({ description = "", input = "", output = "", samples = [] }) {
    return (
        <ProblmenInfoBlock>
            <TextFolder title="문제" content={description ? description : "문제를 입력해주세요."} defaultActive={true} />
            <TextFolder title="입력" content={input} />
            <TextFolder title="출력" content={output} />
            <TextFolder title="예제" content={samples} />
        </ProblmenInfoBlock>
    );
}

const ProblmenInfoBlock = styled.div`
min-width: 25rem;
/* max-width: 45rem; */
margin: 0 auto;
padding: 0 1rem;
flex: 1 1 40%;
max-height: 70vh;
overflow: scroll;
margin-bottom: 0.7em;

* {
    font-family: 'Noto Sans KR';
    font-weight: 500;
}

`;

export default ProblemInfo;