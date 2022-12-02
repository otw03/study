class AjaxHelper {
    /** 싱글톤 객체 */
    static #current = null;

    /** 
     * 싱글톤 객체를 생성 후 반환한다.
     * 
     * @return CookieHelper 타입의 객체
     */
    static getInstance() {
        if(AjaxHelper.#current === null) {
            AjaxHelper.#current = new AjaxHelper();
        }

        return AjaxHelper.#current;
    }

    /** 
     * Ajax요청을 처리하고 결과(JSON)을 콜백함수에게 전달한다.
     * ex) request("backend/simple.json", "GET", json => { ... });
     * 
     * @param {string} url
     * @param {string} method
     * @param {function} success
     */

    request(url, method, success) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = (e) => {
            // 이벤트 정보 안에 포함된 Ajax 처리 결과를 별도의 변수에 복사
            const ajax = e.target;

            if(ajax.readyState == XMLHttpRequest.DONE) {
                // 1) ajax.status의 값을 통해 성공, 실패 여부를 판단해야 한다.
                // - 200 : OK (성공)
                if(ajax.status == 200) {
                    if(success != undefined) {
                        // ajax.responseText --> 통신을 통해 읽어온 내용
                        // 데이터 타입이 string이므로 JSON객체로 변환이 필요함.
                        const json = JSON.parse(ajax.responseText);
                        success(json);
                    }
                } else {
                    // 2) 백엔드와의 통신에 실패한 경우 --> Fail
                    // ajax.status의 값에 따라 실패 원인을 판단하여 사용자에게 적절한 메시지를 표시
                    //  - 404 : Page Not Found (url오타)
                    //  - 400 : 접근권한 없음. (url을 폴더까지만 지정했으나 해당 폴더에 index.html이 없는 경우)
                    //  - 403 : 서버의 접근 거부 (ex: 파일명이 지정되지 않고 index.html도 없는 경우)
                    //  - 50x : 백엔드의 시스템 에러. 이경우 Frontend에서 할 수 있는 작업이 없다.
                    const s = parseInt(ajax.status / 100);
                    if(s == 4) {
                        msg = `[${ajax.status}] [${ajax.statusText}] - 요청 주소가 잘못되었습니다.`;
                    } else if(s == 5) {
                        msg = `[${ajax.status}] [${ajax.statusText}] - 서버의 응답이 없습니다.`;
                    } else {
                        msg = '알 수 없는 이유로 요청에 실패했습니다.';
                    }
                }
            } // end if
        };

        xhr.open(method, url); // 요청을 초기화 --> 통신준비를 마침

        // 백엔드와의 통신 시도 (통신과정에서 총 4번의 이벤트가 발생한다. -> 준비완료, 접속시도, 통신중, 통신완료)
        // 통신 결과를 리턴받는 것이 아닌 통신 과정중에 발생하는 이벤트를 통해 후속처리를 구현해야 한다.
        xhr.send();
    }

    requestAsync(url, method = "GET") {
        // 파라미터로 전달되는 콜백은 객체가 생성될 때 호출 당한다.
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = (e) => {
                // 이벤트 정보 안에 포함된 Ajax 처리 결과를 별도의 변수에 복사
                const ajax = e.target;

                if(ajax.readyState == XMLHttpRequest.DONE) {
                    if(ajax.status == 200) {
                        const json = JSON.parse(ajax.responseText);
                        // promise기법은 콜백함수를 줄이기 위해 등장한 기법.
                        // 성공했을 경우 콜백 호출이 아닌 resolve를 호출함.
                        // ==> 바깥 실행부분의 .then(function() { ... }) 영역의 콜백함수를 대신 호출해줌
                        resolve(json);
                    } else {
                        const s = parseInt(ajax.status / 100);
                        if(s == 4) {
                            msg = `주소가 잘못되었습니다.`;
                        } else if(s == 5) {
                            msg = `서버의 응답이 없습니다.`;
                        } else {
                            msg = '알 수 없는 이유로 요청에 실패했습니다.';
                        }

                        // 실패했을 경우 콜백 호출이 아닌 reject를 호출함.
                        // ==> 바깥 실행부분의 .catch(function(e) { ... }) 영역의 콜백함수를 대신 호출해줌
                        reject( { status: ajax.status, text: ajax.statusText, msg: msg} );
                    }
                } // end if
            };

            xhr.open(method, url);
            xhr.send();
        });
    }
}

// 싱글톤 객체 내보내기
export default AjaxHelper.getInstance();