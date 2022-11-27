import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Codemirror
import { python } from "@codemirror/lang-python"
import { java } from "@codemirror/lang-java"
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import ApiService from "../apis/ApiService";
import CodeResult from "./CodeResult";

function CodeEditor({ samplesText, problemNumber }) {
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const languageNames = ['Python', 'Java'];
    const editorLanguages = [python(), java()];
    const [editorLanguage, setEditorLanguage] = useState([editorLanguages[0]]);
    const [editorCode, setEditorCode] = useState(localStorage.getItem('editorCode') || '');
    const [saving, setSaving] = useState(false);

    const [samplePassed, setSamplePassed] = useState();
    const [submitPassed, setSubmitPassed] = useState();
    const [sampleLoading, setSampleLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

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
            { tag: t.function(t.variableName), color: '#67ac9d' }, //ok
            { tag: [t.string, t.special(t.brace)], color: '#C3E88D' }, //ok
            { tag: t.number, color: '#DECB6B' }, //ok
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

    const apiService = ApiService();

    useEffect(() => {
        setEditorLanguage([editorLanguages[selectedLanguage]]);
    }, [selectedLanguage]);

    const SampleJudgeHandle = () => {
        if (!editorCode) {
            alert("코드를 입력해주세요.");
            return;
        }
        if (samplesText.length === 0) {
            alert("문제를 입력해주세요.");
            return;
        }

        setSampleLoading(true);
        const req = {
            "language": languageNames[selectedLanguage], "code": editorCode,
            "samples_text": samplesText
        };
        apiService.getSampleJudgeResult(req)
            .then((data) => {
                setSamplePassed(data);
                setSampleLoading(false);
            })
    };

    const codeRunHandle = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            SampleJudgeHandle();
            e.preventDefault(); // not working
            return false;
        }  
        if ((e.metaKey || e.ctrlKey) && e.key === 's') {
            localStorage.setItem('editorCode', editorCode);
            let number = document.getElementsByName('number')[0].value
            if (number)
                localStorage.setItem('number', number);
            e.preventDefault(); // not working
            setSaving(true);
            setTimeout(() => {
                setSaving(false);
            },3000);
            return false;
        } 
    }

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
                value={localStorage.getItem('editorCode') || ''}
                // height="500px"
                theme={materialPalenight}
                extensions={editorLanguage}
                onChange={(value) => setEditorCode(value)}
                onKeyDown={codeRunHandle}
                tabSize={8}
            />

            <SubmitButtonBlock>
                <button type="button" onClick={SampleJudgeHandle}>채점</button>
                <button type="button" onClick={() => { console.log('제출', editorCode) }}>제출</button>
                <button type="button" onClick={() => { console.log('저장', editorCode) }}>{saving ? '저장 완료' : '저장' }</button>
            </SubmitButtonBlock>

            {samplesText.length > 0 && 
                <div style={{ padding: '0.2rem 0 0.8rem 0' }}>
                    <CodeResult name="TESTS" isPassed={samplePassed} loading={sampleLoading } />
                    <CodeResult name="FINAL TESTS" isPassed={submitPassed} loading={ submitLoading } />
                </div>
            }
        </CodeBlock>
    );
}


const CodeBlock = styled.div`
min-width: 25rem;
max-width: 60rem;
margin: 0 auto;
padding: 0 1rem;
flex: 1 1 50%;
overflow: scroll;

* {
    font-family: 'Hack';
}

.cm-scroller {
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    min-height: 26rem;
    max-height: 55vh;
}
`;

const LanguageBlocks = styled.ul`
/* background-color: #fdfdfd; */
color: #292d3e;
overflow: hidden;
border-radius: 5px 5px 0 0;

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
    margin-bottom: 0.8rem;
    :first-of-type {
        border-right-width: 0;
        border-radius: 0 0 0 5px;
        background: linear-gradient(96.07deg, #84E9FF 0%, #96cbfe 100%);
        :hover {
            color: #2a2d3e;
            background: linear-gradient(96.07deg, #84E9FF8c 0%, #96cbfe8c 100%);
        }
    }
    :nth-of-type(2){
        border-left-width: 0;
        border-right-width: 0;
        background: linear-gradient(96.07deg, #96cbfe 0%, #a4b6ff 100%);
        :hover {
            color: #2a2d3e;
            background: linear-gradient(96.07deg, #96cbfe8c 0%, #a4b6ff8c 100%);
        }
    }
    :last-of-type {
        border-left-width: 0;
        border-radius: 0 0 5px 0;
        background: linear-gradient(96.07deg, #a4b6ff 0%, #C284FF 100%);
        :hover {
            color: #2a2d3e;
            background: linear-gradient(96.07deg, #a4b6ff8c 0%, #C284FF8c 100%);
        }
    }
}
`;



export default CodeEditor;
