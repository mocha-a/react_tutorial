import React from 'react'

function Deploy() {
    return (
        <dl>
            <dt>Deploy (github/vercel)</dt>
            <dd>1. https://git-scm.com (git 다운로드 및 설치)</dd>
            <dd>2. 계정 등록<br/>
            ↪ git config --global user.name “anji”<br/>
            ↪ git config --global user.email “anji64852563@gmail.com”
            </dd>
            <dd>3. github에 프로젝트 업로드<br/>
            ↪ git init<br/>
            ↪ git add .<br/>
            ↪ git commit -m '메세지'<br/>
            ↪ git branch -M main<br/>
            ↪ git remote add origin '레파지토리 URL'<br/>
            ↪ git push -u origin main
            </dd>
            <dd>4. vercel.com (프로젝트 배포)</dd>
        </dl>
    )
}

export default Deploy