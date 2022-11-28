import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ApiService from '../apis/ApiService';
import BeatLoader from "react-spinners/BeatLoader";

function SearchBar(props) {
    const apiService = ApiService();
    const [loading, setLoading] = useState(false);

    const getProblemInfos =  (problemNumber) => { 
        props.setProblemNumber(problemNumber);
        apiService.getProblemInfos(problemNumber)
            .then((data) => {
                // console.log(data.problem_description);
                props.setDescription(data.problem_description)
                // console.log(data.problem_input);
                props.setInput(data.problem_input)
                // console.log(data.problem_output);
                props.setOutput(data.problem_output)
                // console.log(data.samples);
                props.setSamples(data.samples)
                // console.log(data.samples_text);
                props.setSamplesText(data.samples_text)

                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                if (error.code === 'ERR_BAD_RESPONSE') {
                    alert('문제 번호를 확인해주세요.');
                }
            });
        
    }

    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        getProblemInfos(e.target[0].value);
    };

    const onCheckEnter = (e) => { 
        if (e.key === 'Enter') {
            setLoading(true);
            e.preventDefault();
            getProblemInfos(e.target.value);
        }
    };

    useEffect(() => { console.log(loading) }, [loading]);

    return (
        <form onSubmit={submitHandler} onKeyDown={onCheckEnter} style={{height:'13%', display: 'flex'}}>
            <SearchBarBlock>
                <textarea name="number" rows="1" placeholder="백준 문제 번호를 입력해주세요" required>{localStorage.getItem('number') || ''}</textarea>
                
                <button type="submit" className="search">{loading ? <BeatLoader color="#fff"
                    size="10px"
                /> :"검색"}</button>
            </SearchBarBlock>
        </form>
    );
}

const SearchBarBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* max-width:30rem; */
margin: auto;
width: 80%;
max-width: 20rem;
/* padding: auto; */
/* padding: 1rem 3rem; */

textarea{
    width: 79%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 0.8rem;
    resize: none;
    // height: 2.5rem;
    line-height: 2.5rem;
}

button {
    height: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;  //#3e577c;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    width: 20%;
    background-color: #a0c5ff;
}

* {
    font-family: 'GmarketSans';
    font-weight: 500;
}

`;

export default SearchBar;