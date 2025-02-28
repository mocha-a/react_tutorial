import Count from '../component/Count';

function StateProps() {

    return (
        <dl>
        <dt>State(변경된 값을 화면에 출력)</dt>
        <dd>1. useState() 리액트 훅을 사용<br/>
        ↪ import &#123; useState &#125; from 'react'<br/>
        ↪ let [count,setCount] = useState(0);<br/>
            * count는 값을 가져옴 <br/>
            * setCount는 값을 변경함 (setCount(변경 할 값))
        </dd>
        <dd>2. state 값이 변경되면 컴포넌트에 랜더링 발생<br/>
        ↪ 변경된 값이 화면에 출력됨   
        </dd>

        <dt>Props (부모와 자식 컴포넌트가 값을 주고 받을 때 사용)</dt>
        <dd>
ex) <br/>
<textarea cols="80" rows="10">{`
    function 부모(){
        let data = 100;
        <Count num={data}/>
    }

    function 자식(props){
        console.log (props.num) = 100
    }
    `}
</textarea>

        </dd>
        <dd>
            <Count title="좋아요"/>
            <Count title="별점"/>
        </dd>
        </dl>
    )
}

export default StateProps