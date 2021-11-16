import React from 'react';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}


/**  1. data.json에 있는 값들을
 * 실제 값이 아닌 해당 변수에 타입을 미리 정한다.  
 * 새로운 interface Iword { } 라고 만들어서  
export interface 이런식으로 사용하면 
다른 컴포넌트에서 사용가능 !!  


2.  위와 같이 미리 word에 대한 데이터의 값들을 타입으로 정해 놓으면
    word. 변수를 선언 할때 어떤 것들 넣어야 할지 알려준다.!! 


3. 딱히 인터페이스를 설정하지 않는다면
제네릭을 사용한다. 

ex) const { day } = useParams<{day : string}>();
제네릭은 어떤 타입을 사용할지 paramete 처럼 
각각 정할 수 있고 

3.2 두번째로 제네릭은 변수에 여러 타입들이 나열 되었을 때 
코드상에 보기 좋지 않기 때문에 
Coffee<T>: T를 넣어줘서  사용하는 함수에 각각 표시할 수 있게 사용한다. 


4. interface IDay 라는게 있다면 
    배열이라고 나타내고 싶으면  IDay[]라고 표현 가능하다 


5. <HTMLInputElement>, <HTMLSelectElement> 처럼 
html에 들어가는 속성에 타입도 있다. 

*/

export default App;
