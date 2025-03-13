"use client"

import { createTodo } from '@/api/todo-api';
import React, { FormEvent } from 'react'

const TodoForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = FormData.get("todo-text") as string;
  
    await createTodo(todoText);

    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name='todo-text' required/>
      <button type='submit'>추가하기</button>
    </form>
  )
}

export default TodoForm