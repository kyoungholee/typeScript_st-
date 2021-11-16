import * as React from 'react';
//import { Counter } from './study/Counter'
import Profile from './study/Profile';
import Counter from './study/Counter';


function Home() {
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
                    <Counter />
            </div>
        </>
    )
}

export default Home
