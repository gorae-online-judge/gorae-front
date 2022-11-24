import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Codemirror
import { python } from "@codemirror/lang-python"
import { java } from "@codemirror/lang-java"
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

function CodeEditor() {
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const languageNames = ['Python', 'Java'];
    const editorLanguages = [python(), java()];
    const [editorLanguage, setEditorLanguage] = useState([editorLanguages[0]]);
    const [editorCode, setEditorCode] = useState('');

    const materialPalenight = createTheme({
        theme: 'light',
        settings: {
            background: '#2a2d3e',
            foreground: '#C792EA',
            caret: '#5d00ff',
            selection: '#036dd626',
            selectionMatch: '#036dd626',
            lineHighlight: '#8a91991a',
            gutterBackground: '#2a2d3e',
            gutterForeground: '#8a919966',
            gutterActiveForeground: '#8a919966',
            gutterBorder: '#2a2d3e',
        },
        styles: [
            { tag: t.comment, color: '#676E95' }, //ok
            { tag: t.variableName, color: '#f07178' }, //ok
            // { tag: t.definition(t.variableName), color: '#82AAFF' }, //ok
            { tag: t.function(t.variableName), color: '#DECB6B' }, //ok
            { tag: [t.string, t.special(t.brace)], color: '#C3E88D' }, //ok
            { tag: t.number, color: '#FF5370' }, //ok
            // { tag: t.bool, color: '#5c6166' },
            // { tag: t.null, color: '#5c6166' },
            { tag: t.keyword, color: '#C792EA' }, //ok
            { tag: t.operator, color: '#89DDFF' }, //ok
            // { tag: t.className, color: '#5c6166' },
            { tag: t.definition(t.typeName), color: '#5c6166' },
            { tag: t.typeName, color: '#82AAFF' }, //ok
            { tag: t.angleBracket, color: '#5c6166' },
            { tag: t.tagName, color: '#FF5370' }, //ok
            // { tag: t.attributeName, color: '#5c6166' },
            { tag: t.bracket, color: 'rgba(255, 255, 255, 0.7)' },
            { tag: t.meta, color: '#FFCB6B' }, //ok
            { tag: t.definition, color: '#82AAFF' },
            { tag: t.className, color: '#82AAFF' },
        ],
    });

    useEffect(() => {
        setEditorLanguage([editorLanguages[selectedLanguage]]);
    }, [selectedLanguage]);

    return (
        <CodeBlock>
            <LanguageBlocks>
                {languageNames.map((l, index) => {
                    return (
                        <button key={l} onClick={() => {
                            setSelectedLanguage(index)
                        }}
                            className={selectedLanguage === index ? 'active' : ''}>{l}
                        </button>);
                })
                }
            </LanguageBlocks>
            <CodeMirror
                value="print('Hello, world!')"
                // height="500px"
                theme={materialPalenight}
                extensions={editorLanguage}
                onChange={(value) => setEditorCode(value)}
            />
            <SubmitButtonBlock>
                <button type="button" onClick={() => { console.log('채점', editorCode) } }>채점</button>
                <button type="button" onClick={() => { console.log('제출', editorCode) } }>제출</button>
            </SubmitButtonBlock>
        </CodeBlock>
    );
}


const CodeBlock = styled.div`
min-width: 25rem;
max-width: 50rem;
margin: 0 auto;

* {
    font-family: 'Hack';
}

.cm-scroller {
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    min-height: 20rem;
    max-height: 30rem;
}
`;

const LanguageBlocks = styled.ul`
/* background-color: #fdfdfd; */
color: #292d3e;
overflow: hidden;
border-radius: 5px 5px 0 0;
margin-top: 0.8em;


button {
    float: left;
    color: #292d3e;
    text-align: center;
    padding: 0.5em 1em;
    font-size: 17px;
    background: none;
    border: 0;
    cursor: pointer;

    :hover{
        background-color: #ddd;
        color: black;
    }
    &.active{
        background-color: #292d3e;
        color: #fdfdfd;
        border-radius: 5px 5px 0px 0px;
    }
}
`;

const SubmitButtonBlock = styled.div`
display: flex;

button{
    border: 1px solid #ccc;
    border-top-width: 0;
    flex-basis: 0;
    flex-grow: 1;
    height:3rem;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Noto Sans KR';
    font-weight: 600;
    :first-of-type {
        border-right-width: 0;
        border-radius: 0 0 0 5px;
        background: linear-gradient(96.07deg, #84E9FF 0%, #a0bdfe 100%);
        :hover {
            color: #2a2d3e;
            background: linear-gradient(96.07deg, rgba(132, 233, 255, 0.5) 0%, rgba(160, 189, 254, 0.5) 100%);
        }
    }
    :last-of-type {
        border-left-width: 0;
        border-radius: 0 0 5px 0;
        background: linear-gradient(96.07deg, #a0bdfe 0%, #C284FF 100%);
        :hover {
            color: #2a2d3e;
            background: linear-gradient(96.07deg, rgba(160, 189, 254, 0.5) 0%, rgba(194, 132, 255, 0.5) 100%);
        }
    }
}
`;

export default CodeEditor;
