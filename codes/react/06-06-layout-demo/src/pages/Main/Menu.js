/**
 * @filename: Menu.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import table2 from '../../img/tablesetting2.jpg';
import mq from '../../MediaQuery';

/** 왼쪽 사이드바 컴포넌트 스타일 정의*/
const MenuContainer = styled.div`
    display: flex;
    line-height: 1.5;
    padding: 80px;


    div {
        &:first-child {
            width: 50%;
            margin-right: 50px;
        }

        h1 {
            letter-spacing: 5px;
            text-align: center;
            font-size: 35px;
            margin: 10px 0;
        }

        h4 {
            letter-spacing: 5px;
            font-size: 19px;
            margin: 10px 0;
        }

        p {
            font-size: 13px;
            margin: 15px 0;
        }
    }

    img {
        width: 50%
    }


    ${mq.maxWidth('sm')`
        width: 100%;
        flex-direction: column;
        img {
            width: 100%;
        }
    `}
`;


const Menu = () => {
    return (
        <MenuContainer id='menu'>
            <div>
                <h1>Our Menu</h1>
                <br />

                <h4>Bread Basket</h4>
                <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                <br />

                <h4>Honey Almond Granola with Fruits</h4>
                <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                <br />

                <h4>Belgian Waffle</h4>
                <p>Vanilla flavored batter with malted flour 7.50</p>
                <br />

                <h4>Scrambled eggs</h4>
                <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                <br />

                <h4>Blueberry Pancakes</h4>
                <p>With syrup, butter and lots of berries 8.50</p>
            </div>
            <img src={table2} alt='menuImg' />
        </MenuContainer>
    );
}

export default Menu;
