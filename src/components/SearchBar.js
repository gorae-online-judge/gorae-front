import styled from 'styled-components';

const SearchBarBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 0.5em;

textarea{
    width: 79%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    resize: none;
}

button {
    height: 40px;
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

function SearchBar() {
    const submitHandler = (e) => { console.log('submit!')};

    return (
        <form onSubmit={submitHandler}>
            <SearchBarBlock>
                <textarea name="task" rows="1" placeholder="백준 문제 번호를 입력해주세요" required></textarea>
                <button type="submit" class="search">검색</button>
            </SearchBarBlock>
        </form>
    );
}

export default SearchBar;