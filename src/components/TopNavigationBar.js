import styled from 'styled-components';
import logoImage from '../assets/image/whale.gif'
import TopMenu from './TopMenu';
import { Link } from 'react-router-dom';

const TopNavigationBarBlock = styled.header`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-width: 850px;
/* margin: auto 5%; */
padding: 1% 7%;
background: #f0f0f6;
height: 100%;

* {
    /* height: 100%; */
}

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
`;

function TopNavigationBar() {
    return (
        <div style={{ background: '#f0f0f6', height:'12%', minHeight:'7rem'}}>
            <TopNavigationBarBlock>
                <Link to="/"><img width="85em" src={logoImage} alt='' /></Link>
                <h1>&lt; Gorae Online Judge /&gt;</h1>
                <TopMenu/>
            </TopNavigationBarBlock>
        </div>
    );
}

export default TopNavigationBar;