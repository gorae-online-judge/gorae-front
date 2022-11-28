import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import TopNavigationBar from '../components/TopNavigationBar';
import CodeEditor from '../components/CodeEditor';
import ProblemInfo from '../components/ProblemInfo';
import { Resizable } from "re-resizable";
import squareSvg from '../image/Square.svg';

function SearchProblem() {
    // 코드
    const [language, setLanguage] = useState("");
    const [code, setCode] = useState("")

    // 문제 정보
    const [problemNumber, setProblemNumber] = useState("");
    const [description, setDescription] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [samples, setSamples] = useState([]);
    const [samplesText, setSamplesText] = useState([]);

    return (
        <>
            <TopNavigationBar />
            <div className='app'>
                <main>
                    <SearchBar setProblemNumber={setProblemNumber} setDescription={setDescription} setInput={setInput}
                        setOutput={setOutput} setSamples={setSamples} setSamplesText={setSamplesText} />
                    <ProblemBlock>
                        <ProblemInfo description={description} input={input} output={output} samples={samples} />
                        <Resizable
                            defaultSize={{ width: '50%', height: '100%' }}
                            minWidth={'15%'}
                            maxWidth={'100%'}
                            enable={{
                                top: false,
                                right: false,
                                bottom: false,
                                left: true,
                                topRight: false,
                                bottomRight: false,
                                bottomLeft: false,
                                topLeft: false,
                            }}
                            handleStyles={{
                                left: {
                                    width: '1.5rem',
                                    height: '100%',
                                    left: '-8px',
                                    // backgroundColor: '#d1d5db',
                                    // borderRight: '0.0625rem solid #172334',
                                    // background: 'url(https://school.programmers.co.kr/assets/img-grippie-vertical-86e641691e88be56a100b80e3d437ae6effea08c189fdbdb2396825486763a15.png) no-repeat 0.625rem 50%',
                                    background: `url(${squareSvg}) no-repeat 0.625rem 50%`,
                                    backgroundSize: '0.975rem 2.7rem',
                                    cursor: 'ew-resize',
                                },
                            }}
                        >
                        <CodeEditor samplesText={samplesText} problemNumber={problemNumber} />
                            </Resizable>
                    </ProblemBlock>
                </main>
            </div>
        </>
    );
}

const ProblemBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 87%;
  /* max-height: 70vh; */
`;

export default SearchProblem;