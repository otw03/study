import React, {memo} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// 이 경로에 적절한 이미지를 직접 배치해야 한다.
import reactjs from './assets/img/reactjs.jpg';

const Meta = memo((props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:image' content={props.image} />
                <meta property='og:url' content={props.url} />
                <link rel="shortcut icon" href={props.image} type="image/png" />
                <link rel="icon" href={props.image} type="image/png" />
            </Helmet>
        </HelmetProvider>
    );
});

Meta.defaultProps = {
    title: 'ReactJS Final Test',
    description: '이젠 아카데미 ReactJS 이수자 평가 문제 ',
    keywords: 'React,Redux,EZEN,이수자평가',
    author: '호쌤',
    image: reactjs,
    url: window.location.href
};

export default Meta;
