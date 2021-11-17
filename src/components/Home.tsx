import React from 'react';
//import { Counter } from './study/Counter'
import Profile from './study/Profile';
import Counter from './study/Counter';
import TodoList from './study/TodoList';

// 결론적으로 부모에서 자식 컴포넌트를 받아 온 뒤 
// 그 안에 값을 넣어주면  끝이다 ! 
function Home( ) {
    return (
        <>
            <div>
                    <Profile
                    name = "kyoungho"
                    phone = { 1234 }
                    job = "developer"
                    email = "asdlwd@naver.com"
                    birth = { 960313 }
                    />

                    <Counter 
                    />
                    <TodoList />
            </div>
        </>
    )
}

export default Home
