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
max-width: 50rem;
margin: 0 auto;
padding: 1rem 0;

* {
    font-family: 'Noto Sans KR';
    font-weight: 500;
}

`;

export default ProblemInfo;