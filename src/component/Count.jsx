import React, { useState } from 'react'

function Count(props) {

    console.log(props);

    let [count, setCount] = useState(0);

    function decre(){
        setCount(--count);
    }
    function incre(){
        setCount(++count);
    }

    return (
        <>
            ex) {props.title}
            <div>
                <button onClick={decre}>-</button>
                    <span>{count}</span>
                <button onClick={incre}>+</button>
            </div>
        </>
    )
}

export default Count