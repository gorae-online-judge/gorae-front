import { useState, useEffect } from "react";
import styled from "styled-components";

function TextFolder({ title, content, defaultActive = false }) {
    const [active, setActive] = useState(defaultActive);

    return (
        <TextFolderBlock>
            <button onClick={() => setActive(!active)}>{title}</button>
            {/* set inner html */}
            <div className={active ? 'active' : null} dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </TextFolderBlock>
    );
}

const TextFolderBlock = styled.div`
button {
    background-color: #a0c5ff;
    color: white;
    cursor: pointer;
    /* padding: 18px; */
    padding: 0 0 0 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    height: 1.7em;
    border-radius: 5px 5px 0px 0px;
    margin: 0.3em 0 0 0;
    font-size: 1.5em;
    font-weight: 600;
    box-shadow: 2px 0px 6px rgb(0 0 0 / 20%);
}

button + div{
    padding: 0.5rem 1rem;
    margin-bottom: 0.5em;
    overflow: hidden;
    background-color: #fdfdfd;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 20%);
    display: none;
    &.active {
        display: block;
    }
}

.sampledata {
    white-space: pre;
    font-family: Menlo, Monaco, 'Source Code Pro', consolas, monospace;
    padding: 8px;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    border-radius: 5px;
    overflow-x: scroll;
    margin: 0.3em 0 0.5em 0;
}

hr.dashed {
    border-top: 1px dashed #bbb;
    margin: 0.8em 0 0.6em 0;
}

`;

export default TextFolder;