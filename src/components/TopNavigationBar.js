import styled from 'styled-components';
import logoImage from '../assets/image/whale.gif'
import TopMenu from './TopMenu';
import { Link } from 'react-router-dom';

const TopNavigationBarBlock = styled.div`
display: flex;
align-items: center;
img {
    cursor: pointer;
    margin-right: 0.8em;
}
h1 {
    font-family: 'catamaran';
    font-weight: 800;
    margin-right: auto;
}
.menu {
    disploay: flex;
    align-items: center;
}
`;

function TopNavigationBar() {
    return (
        <TopNavigationBarBlock>
            <Link to="/"><img width="85em" src={logoImage} alt='' /></Link>
            <h1>Gorae Online Judge</h1>
            <TopMenu></TopMenu>
        </TopNavigationBarBlock>
    );
}

export default TopNavigationBar;