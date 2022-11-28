import { useEffect, useState } from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

function CodeResult({ name, isPassed, loading }) {
    const [color, setColor] = useState("");
    const [path, setPath] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");

    useEffect(() => {
        if (isPassed) {
            setColor("#57ab5a");
            setPath("M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z");
            setDisplayMessage(name + " PASSED");
        } else {
            setColor("#e5534b");
            setPath("M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z");
            setDisplayMessage(name + " NOT PASSED");
        }
    }, [isPassed]);

    return (
        <CodeResultBlock>
            <svg style={{ fill: color }} width="1.1rem" height="100%"
                viewBox="0 0 16 16" version="1.1" role="img">
                <path fillRule="evenodd"
                    d={path}></path>
            </svg>
            {loading ? <BeatLoader color="#2a2d3e" size="10px" /> : <p>{displayMessage}</p>}
        </CodeResultBlock>
    );
}

const CodeResultBlock = styled.div`
height: 50%;
    padding: 0.3em 9px;
    overflow: hidden;
    background-color: #fdfdfd;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 20%);
    display: flex;
    align-items: center;
    /* height: 2rem; */
    svg {
            margin: 0 0.5em 0 0;
    }
`;

export default CodeResult;