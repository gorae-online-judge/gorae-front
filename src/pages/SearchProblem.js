import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import TopNavigationBar from '../components/TopNavigationBar';
import CodeEditor from '../components/CodeEditor';
import ProblemInfo from '../components/ProblemInfo';


function SearchProblem() {
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
                    <SearchBar setDescription={setDescription} setInput={setInput}
                        setOutput={setOutput} setSamples={setSamples} setSamplesText={setSamplesText} />
                    <CodeEditor samplesText={samplesText} />
                    <ProblemInfo description={description} input={input} output={output} samples={samples} />
                </main>
            </div>
        </>
    );
}

export default SearchProblem;