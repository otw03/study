/**
 * @filename: Contact.js
 * @description: 메인 Contact 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import img01 from '../../img/map.jpg'

/** 메인 Contact 컴포넌트 스타일 정의*/
const ContactContainer = styled.div`
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
        p {
            margin: 15px 0;
        }

        form {
            input {
                width: 99.4%;
                border: 1px solid rgba(0,0,0,.2);
                padding: 10px 0 10px 7px;
            }
        }

        button {
            border: 0;
            width: 150px;
            height: 40px;
            margin: 16px 0;
            background-color: black;
            color: #fff;

            &:hover {
                cursor: pointer;
                background-color: rgba(0,0,0,.2);
                color: black;
            }
        }

        img {
            margin: 6px 0;
            width: 100%;
        }
    }

    ${mq.maxWidth('sm')`
        width: 100%;
    `}
`;



const Contact = () => {
    return (
        <ContactContainer id="contact">
            <h3>Contact</h3>
            <div>
            <p>Lets get in touch and talk about your next project.</p>
                <form>
                    <p><input type="text" placeholder="Name" required name="name1" /></p>
                    <p><input type="email" placeholder="Email" required name="email" /></p>
                    <p><input type="text" placeholder="Subject" required name="subject" /></p>
                    <p><input type="text" placeholder="Comment" required name="comment" /></p>
                    <p><button type="submit">SEND MESSAGE</button></p>
                </form>

                <img src={img01} alt="mapImg"></img>
            </div>
        </ContactContainer>
    );
}

export default Contact;
