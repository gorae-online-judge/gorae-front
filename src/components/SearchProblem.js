import { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import TopNavigationBar from './TopNavigationBar';


function SearchProblem() {
    useEffect(() => { console.log('Search Problem...')}, []);
    return (
        <>
            <TopNavigationBar />
            <div>
                <main>
                    <SearchBar />
                </main>
            </div>
        </>
    );
}

export default SearchProblem;