import styled from 'styled-components';

const SearchBarBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:30rem;
margin: 0 auto;

textarea{
    width: 79%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 0.8rem;
    resize: none;
    height: 2.5rem;
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

function SearchBar() {
    const submitHandler = (e) => {
        console.log('submit')
    };

    return (
        <form onSubmit={submitHandler}>
            <SearchBarBlock>
                <textarea name="number" rows="1" placeholder="백준 문제 번호를 입력해주세요" required></textarea>
                <button type="submit" class="search">검색</button>
            </SearchBarBlock>
        </form>
    );
}

export default SearchBar;