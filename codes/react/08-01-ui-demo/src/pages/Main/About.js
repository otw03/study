/**
 * @filename: Menu.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import img01 from '../../img/team2.jpg';
import img02 from '../../img/team1.jpg';
import img03 from '../../img/team3.jpg';
import img04 from '../../img/team4.jpg';


const teamImgList = [
    {img: img01, title: 'John Doe', position: 'CEO & Founder'},
    {img: img02, title: 'Jane Doe', position: 'Architect'},
    {img: img03, title: 'Mike Ross', position: 'Architect'},
    {img: img04, title: 'Dan Star', position: 'Architect'},
]

/** 왼쪽 사이드바 컴포넌트 스타일 정의*/
const MenuContainer = styled.div`
    padding-top: 10px;

    h3 {
        font-size: 24px;
        margin: 60px 0 30px;
    }

    p {
        margin-top: 30px;
        line-height: 1.5;
    }

    div {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        margin-top: 30px;

        figure {
            width: 360px;
            margin-right: auto;
            margin-bottom: 15px;

            &:nth-of-type(4n) {
                margin-right: 0px;
            }

            img {
                width: 100%;
                filter: grayscale(0.8) sepia(0.1);
            }
        }

        h3 {
            margin: 10px 0;
        }

        p {
            margin: 15px 0;
        }

        button {
            border: 0;
            width: 100%;
            height: 40px;

            &:hover {
                cursor: pointer;
                background-color: rgba(0,0,0,.2);
            }
        }
    }

    ${mq.maxWidth('sm')`
        width: 100%;
        flex-direction: column;
        img {
            width: 100%;
        }
    `}
`;


const About = () => {
    return (
        <MenuContainer id='about'>
            <h3>About</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div>
                {teamImgList.map((v, i) => {
                    return (
                        <figure key={i}>
                            <img src={v.img} alt={v.title} />
                            <figcaption>
                                <h3>{v.title}</h3>
                                <p>{v.position}</p>
                                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                <p><button>Contact</button></p>
                            </figcaption>
                        </figure>
                    )
                })}
            </div>
        </MenuContainer>
    );
}

export default About;
