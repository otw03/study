import React from 'react';
import MyHook from '../hooks/MyHook';

// hook을 직접 커스텀하는 방식

const MyWidth = () => {
    const myWidth = MyHook();

    return (
        <div>
            <h2>MyWidth</h2>
            <h3>windowWidth: {myWidth}</h3>
        </div>
    );
}

export default MyWidth;