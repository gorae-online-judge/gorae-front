import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopMenuBlock = styled.ul`
display: flex;
align-items: center;
list-style: none;
a {
    padding: 4px 8px;
    text-decoration: none;
    font-family: 'GmarketSans';
    color: #3d577c;
    :hover{
        text-decoration: underline;
        color: #30415a;
    }
}
`;

function TopMenu() {
    return (
        <TopMenuBlock>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/problem/search">문제 검색</Link></li>
            <li><Link to="/problem/solve">문제 풀기</Link></li>
            <li><Link to="/problem/register">문제 만들기</Link></li>
        </TopMenuBlock>
    );
}

export default TopMenu;