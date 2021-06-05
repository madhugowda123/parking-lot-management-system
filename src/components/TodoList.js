import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput'
import {useSelector} from 'react-redux';
function TodoList()
{
	let todos=useSelector(state=>state);

	return(
		<div className="my-4" style={{backgroundColor:"lightgray"}}>
		<br/>

		<TodoInput/>
		<hr/>

			<h1 className="text-center" >Booking Slots</h1>

		<hr/>
		{/* list of slots */}
		{
			todos.map(todo=>
			{
				return <TodoItem key={todo.id} todo={todo}/>
			})
			
		}
		</div>
		)
		}
		
	

export default TodoList;