// "data-include" 속성을 갖는 모든 요소에 대한 탐색
Array.from(document.querySelectorAll("*[data-include]")).map(async (v, i) => {
    // ex) data-include="inc/header.html"
    const include = v.dataset.include;
    let html = null;

    try {
        // inc/header.html 파일의 소스코드를 가져온다.
        const response = await axios.get(include);
        html = response.data;
    } catch (e) {
        console.error(e);
    }

    if (html != null) {
        // v의 안에 넣는 것이 아니라 v자체를 교체함 // outerHTML 은 v 자체이다(예를들어 div 전체)
        v.outerHTML = html;
    }
});