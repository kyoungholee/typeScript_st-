import React, {useState, useEffect} from 'react'

interface todoItem {
    item : string
}


interface List {
    item: string,
    id : number,
    isDelete: boolean
}

interface Todo{
    todoItem: List[]
}


function TodoList() {

    const [todoItem, setTodoItem] = useState<todoItem>({
        item: ''
    })


    const [todoList, setTodoList] = useState<List>({
        item : '',
        id: 0,
        isDelete : false
    })

    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        setTodoList({
            id: todoList.id +1,
            item: todoItem.item,
            isDelete : false
        })

    }

    useEffect(() => {
        setTodoItem({
            item: ''
        })
    })

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        const {name , value} = e.target 
        setTodoItem({
            item: value
        })

    }

    return (
        <>
            <h2>할일</h2>

            <div>
                <form onSubmit = {onSubmit}>
                    <input type = "text" name = 'content' 
                    value = {todoItem.item} onChange = {handleInput} />

                    <button type = "submit" >추가하기 </button>

                </form>
            </div>
        </>
    )
}

export default TodoList
