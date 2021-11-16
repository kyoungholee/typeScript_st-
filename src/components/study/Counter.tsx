import React , {useState} from 'react'



export interface Count {
    counter : number
}


function Counter(props : Count) {

    const [number, setNumber ] = useState(0);

    


    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default Counter
