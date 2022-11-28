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
/* min-width: 13rem; */
/* max-width: 45rem; */
margin: 0 auto;
padding: 0 1rem;
flex: 1 1 0%;
max-height: 73vh;
overflow: scroll;
margin-bottom: 0.7em;
/* height: 100%; */

* {
    font-family:  'Spoqa Han Sans Neo';
    font-weight: 500;
}

/* ::-webkit-scrollbar { 
    
    display: none;
} 
*/

/* total width */
::-webkit-scrollbar {
    background: none;
    width: 0.5rem;
}

/* background of the scrollbar except button or resizer */
/* ::-webkit-scrollbar-track {
    background-color: #fff;
} */

/* scrollbar itself */
::-webkit-scrollbar-thumb {
    background-color: #dee6f2;
    /* border-radius: 10px; */
    /* border: 4px solid #fff; */
}

/* set button(top and bottom of the scrollbar) */
/* ::-webkit-scrollbar-button {
    display:none;
} */


`;

export default ProblemInfo;