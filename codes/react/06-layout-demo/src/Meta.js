/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: 
 */

/** 패키지 참조 */Meta
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * SEO 처리 컴포넌트 구현
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>
                {/* SEO 태그 */}
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta name='subject' content={props.subject} />
                <meta name='copyright' content={props.copyright} />
                <meta name='content-language' content='ko' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
                <meta property='og:image' content={props.image} />
                
                <link rel='icon' href={props.icon} type="image/png" />
                <link rel='shortcut icon' href={props.shortcutIcon} type="image/png" />
                <link rel='apple-touch-icon' href={props.appleTouchIcon} type="image/png" />

                {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
                {/* 구글 웹폰트 적용 */}
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' rel="stylesheet" />

            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    author: '호쌤',
    subject: 'React.js Frontend Programming',
    copyright: 'Oh T.W',
    keywords: 'React',
    url: window.location.href,
    image: null,
    icon: null,
    shortcutIcon: null,
    appleTouchIcon: null,
};

export default Meta;
