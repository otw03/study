/**
 * @filename: About.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import img01 from '../../img/house5.jpg';
import img02 from '../../img/house2.jpg';
import img03 from '../../img/house3.jpg';
import img04 from '../../img/house4.jpg';
import img05 from '../../img/house2.jpg';
import img06 from '../../img/house5.jpg';
import img07 from '../../img/house4.jpg';
import img08 from '../../img/house3.jpg';

const projectImgList = [
    {img: img01, title: 'Summer House'},
    {img: img02, title: 'Brick House'},
    {img: img03, title: 'Renovated'},
    {img: img04, title: 'Barn House'},
    {img: img05, title: 'Summer House'},
    {img: img06, title: 'Brick House'},
    {img: img07, title: 'Renovated'},
    {img: img08, title: 'Barn House'},
]

/** 왼쪽 사이드바 컴포넌트 스타일 정의*/
const AboutContainer = styled.div`
    padding-top: 10px;
    h3 {
        font-size: 24px;
        margin: 60px 0 30px;
    }
    div {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        position: relative;
        margin-top: 30px;

        figure {
            width: 360px;
            margin-right: auto;
            margin-bottom: 15px;

            &:nth-of-type(4n) {
                margin-right: 0px;
            }

            figcaption {
                position: absolute;
                background-color: black;
                color: #fff;
                padding: 10px 15px;
            }

            img {
                width: 100%;
            }
        }

        ${mq.maxWidth('sm')`
            width: 100%;
            flex-direction: column;
            img {
                width: 100%;
            }
        `}
    }
`;


const Projects = () => {
    return (
        <AboutContainer id="projects">    
            <h3>Projects</h3>
            <div>
                {projectImgList.map((v, i) => {
                    return (
                        <figure key={i}>
                            <figcaption>
                                {v.title}
                            </figcaption>
                            <img src={v.img} alt={v.title} />
                        </figure>
                    )
                })}
            </div>        
        </AboutContainer>
    );
}

export default Projects;
