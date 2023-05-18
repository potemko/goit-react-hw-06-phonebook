import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyRedux = () => {

    const dispatch = useDispatch();

const myAdd = () => {
dispatch({type: "ADD", payload: 1})
}

const myGet = () => {
    dispatch({type: "GET", payload: 1})
}
    
    const cash = useSelector(state => state.level.cash)

    useEffect(() => {
        console.log('cash', cash); // Вызывается только при первом рендере компонента
    }, [cash]);

  return (
    <div>
        <div>{cash}</div>
<button onClick={() => myAdd()}>ADD</button>
<button onClick={() => myGet()}>GET</button>
    </div>
  )
}

export default MyRedux