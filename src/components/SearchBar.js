import styled from 'styled-components';
import ApiService from '../apis/ApiService';

function SearchBar(props) {
    const apiService = ApiService();

    const getProblemInfos = (problemNumber) => { 
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
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        getProblemInfos(e.target[0].value)
    };

    const onCheckEnter = (e) => { 
        if (e.key === 'Enter') {
            e.preventDefault();
            getProblemInfos(e.target.value);
        }
    };

    return (
        <form onSubmit={submitHandler} onKeyDown={onCheckEnter}>
            <SearchBarBlock>
                <textarea name="number" rows="1" placeholder="백준 문제 번호를 입력해주세요" required></textarea>
                <button type="submit" className="search">검색</button>
            </SearchBarBlock>
        </form>
    );
}

const SearchBarBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:30rem;
margin: 1rem auto 1rem auto;
padding: 0 3rem;

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
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    width: 20%;
    background-color: #bf8dff;
}

* {
    font-family: 'GmarketSans';
    font-weight: 500;
}

`;

export default SearchBar;