import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import TopNavigationBar from '../components/TopNavigationBar';
import CodeEditor from '../components/CodeEditor';
import ProblemInfo from '../components/ProblemInfo';

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
            <div>
                <main>
                    <SearchBar setProblemNumber={setProblemNumber} setDescription={setDescription} setInput={setInput}
                        setOutput={setOutput} setSamples={setSamples} setSamplesText={setSamplesText} />
                    <ProblemBlock>
                        <ProblemInfo description={description} input={input} output={output} samples={samples} />
                        <CodeEditor samplesText={samplesText} problemNumber={problemNumber} />
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
  max-height: 70vh;
`;

export default SearchProblem;