import React from 'react';
import s from '../test.module.scss';

function Css() {
    return (
        <dl>
            <dt>CSS, SCSS</dt>
            <dd>1. 모듈설치 (npm i sass)</dd>
            <dd>2. 해당 페이지에 (import "style.scss")</dd>
            <dd className="text">3. 태그에 속성을 className으로 작성</dd>

            <dt>MODULE : 클래스명이 동일하여 충돌을 피하기 위해 사용</dt>
            <dd className={s.text}>1. 파일명 규칙 = 파일명.module.scss</dd>
            <dd>2. 파일 가져오기(import 별칭 from '파일명.module.scss';)</dd>
            <dd>3. 적용 (className = 별칭.클래스명)</dd>
        </dl>
    )
}

export default Css