import React from 'react'

export interface Information {
    name : string,
    phone : number,
    job : string,
    email : string,
    birth : number
}
// 프롭스 값에 해당 변수들의 타입들을 확인 할 수 있다.

function Profile(props : Information) {
    return (
        <>
            <div>
                <h2> 타입 스크립트를 이용한 나만의 프로필</h2>

                <div> 
                    <b> 이름 :{props.name}</b>
                    <b> 핸드폰 :{props.phone}</b>
                    <b> 직업 :{props.job}</b>
                    <b> 이메일 :{props.email}</b>
                    <b> 생일  :{props.birth}</b>
                </div>
            </div>
        </>
    )
}

export default Profile
