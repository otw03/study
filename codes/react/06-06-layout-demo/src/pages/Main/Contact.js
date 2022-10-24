/**
 * @filename: Contact.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';

/** 왼쪽 사이드바 컴포넌트 스타일 정의*/
const ContactContainer = styled.div`
    line-height: 1.5;
    padding: 80px 20px;

    h1 {
        font-size: 35px;
        margin: 10px 0;
        letter-spacing: 5px;
    }

    p {
        margin: 15px 0;
        font-size: 14px;
    }

    b {
        font-weight: bold;
        color: #607d8b;
        font-size: 17px;
    }

    form {
        input {
            width: 100%;
            padding: 15px 7px;
            border: none;
            border-bottom: 1px solid #607d8b;
        }
    }

    button {
        border: 0;
        width: 150px;
        height: 40px;

        &:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,.2);
        }
    }

    ${mq.maxWidth('sm')`
        width: 100%;
    `}
`;



const Contact = () => {
    return (
        <ContactContainer id="contact">
            <h1>Contact</h1>
            <br />

            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form>
                <p><input type="text" placeholder="Name" required name="name1" /></p>
                <p><input type="number" placeholder="How many people" required name="people" /></p>
                <p><input type="datetime-local" name="date2" /></p>
                <p><input type="text" placeholder="Message \ Special requirements" required name="message" /></p>
                <p><button type="submit">SEND MESSAGE</button></p>
            </form>
        </ContactContainer>
    );
}

export default Contact;
