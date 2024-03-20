import React, { useReducer, useRef, useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'

const mockTodo = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥 주기',
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        task: '고양이 감자 캐기',
        createDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        task: '고양이 꾹꾹이 받기',
        createDate: new Date().getTime(),
    },
]

function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, mockTodo)
    const idRef = useRef(4)

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default TodoApp