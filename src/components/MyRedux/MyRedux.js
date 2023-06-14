import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../../redux/myReducer';
import css from './MyRedux.module.css'

const MyRedux = () => {
  const dispatch = useDispatch();

  const fetchUser = () => {
    return function (dispatch) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          // Отримання масиву імен користувачів
          const userNames = json.map(user => user.name);
          dispatch(addNewUser(userNames));
        })
        .catch(error => {
          // Обробка помилки, якщо виникла
          console.log('Error fetching users:', error);
        });
    };
  };

  const myAdd = () => {
    dispatch({ type: 'ADD', payload: 1 });
  };

  const myGet = () => {
    dispatch({ type: 'GET', payload: 1 });
  };

  const cash = useSelector(state => state.level.cash);
  const users = useSelector(state => state.level.customes);

  return (
    <div>
      <div>{cash}</div>
      <button onClick={() => myAdd()}>ADD</button>
      <button onClick={() => myGet()}>GET</button>
      <button onClick={() => dispatch(fetchUser())}>User</button>
      <ul className={css.ul}>
  {users.map((user, id) => (
    <li key={id}>{user}</li>
  ))}
</ul>

    </div>
  );
};

export default MyRedux;
