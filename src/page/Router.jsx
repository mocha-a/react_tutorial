import React from 'react'

function Router() {
    const t1 = "import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';";
    const t2 = `
    <BrowserRouter>

    <header>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/scc">CSS</NavLink>
        <NavLink to="/Router">Router</NavLink>
        <NavLink to="/StateProps">State & Props</NavLink>
        <NavLink to="/Deploy">Deploy</NavLink>
    </header>


    <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/css" element={<Css/>} />
        <Route path="/router" element={<Router/>} />
        <Route path="/stateProps" element={<StateProps/>} />
        <Route path="/deploy" element={<Deploy/>} />
        </Routes>
    </main>

    </BrowserRouter>
    `
    return (
        <dl>
            <dt>Router</dt>
            <dd>1. 모듈설치 (npm i react-router-dom)</dd>
            <dd>2. App.js 모듈 가져오기 ({t1})<br/>
            ↪ 자동완성 (imrr)
            </dd>
            <dd>3. 작업방법<br/>
            ↪ NavLink 컴포넌트를 a태그처럼 사용하면된다.<br/>
            ↪ 메뉴 클릭 시 다른 컴포넌트로 교체<br/>
            ↪ 브라우저 주소값과 path 값이 일치할 때 컴포넌트가 화면에 출력
            <textarea cols="80" rows="25">{t2}</textarea>
            </dd>
        </dl>
    )
}

export default Router