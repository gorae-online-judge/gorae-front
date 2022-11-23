import { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import TopNavigationBar from './TopNavigationBar';


function SearchProblem() {
    useEffect(() => { console.log('Search Problem...')}, []);
    return (
        <main>
            <TopNavigationBar />
            <br />
            <article>
                <SearchBar />
            </article>
        </main>
    );
}

export default SearchProblem;