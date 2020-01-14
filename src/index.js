import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
/*
일반적으로 '<App />' 이것을 컴포넌트라고 부른다.
component는 HTML을 반환하는 함수이다. 
Javascript와 HTML 사이에 조합을 JSX하고 부른다.
react application은 하나의 component만 render할 수 있다.
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAs
