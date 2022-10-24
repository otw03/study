/**
 * @filename: Post.js
 * @description: 메인 페이지 포스트 영역 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

/** 컨테이너에 대한 styleComponent 구현 */
const PostContainer = styled.section`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }
`;


/**
 * 메인 페이지 포스트 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Post = () => {
    return (
        <div>
            {[0,1,2,3].map((v, i) => {
                return (
                    <PostContainer key={i}>
                        <h2>TITLE HEADING</h2>
                        <h3>Title description, Dec 7, 2017</h3>
                        <FakeImg height='200'>Image</FakeImg>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia desrunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br />
                    </PostContainer>
                )
            })}
        </div>
    );
};

export default Post;
// for문을 따로 제공하지 않기 때문에 배열을 만들어서 map으로 돌려야 한다.
