import { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import TopNavigationBar from '../components/TopNavigationBar';
import CodeEditor from '../components/CodeEditor';


function SearchProblem() {
    useEffect(() => { console.log('Search Problem...')}, []);
    return (
        <>
            <TopNavigationBar />
            <div>
                <main>
                    <SearchBar />
                    <CodeEditor />
                </main>
            </div>
        </>
    );
}

export default SearchProblem;