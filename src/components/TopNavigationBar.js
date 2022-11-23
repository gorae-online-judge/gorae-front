import styled from 'styled-components';
import logoImage from '../assets/image/whale.gif'
import TopMenu from './TopMenu';
import { Link } from 'react-router-dom';

const TopNavigationBarBlock = styled.div`
display: flex;
align-items: center;

width: 75%;
// max-width: 800px;
min-width: 480px;
margin: 0 auto;
padding: 1rem 1rem 0.8rem 1rem;


img {
    cursor: pointer;
    margin-right: 0.8em;
}
h1 {
    font-family: 'catamaran';
    font-weight: 800;
    margin-right: auto;
    color: #3e4d66;
}
.menu {
    disploay: flex;
    align-items: center;
}
`;

function TopNavigationBar() {
    return (
        <div style={{ background: '#f0f0f6'}}>
            <TopNavigationBarBlock>
                <Link to="/"><img width="85em" src={logoImage} alt='' /></Link>
                <h1>Gorae Online Judge</h1>
                <TopMenu></TopMenu>
            </TopNavigationBarBlock>
        </div>
    );
}

export default TopNavigationBar;