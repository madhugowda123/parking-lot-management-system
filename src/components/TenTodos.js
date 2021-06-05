import React from 'react';
import {useDispatch} from 'react-redux';
import {extendTodo}from '../reducers/actions';
import 'bootstrap/dist/css/bootstrap.css';

function TenTodos() {
	let dispatch=useDispatch();
  return (
<div style={{backgroundColor:"lightgray"}}>
<br/>
<br/>
<br/>
<br/>

<div className="text-center" >
<h1><b>You will get 10 Spaces at a time</b></h1>
{/* on click you will get 10 slots */}
				<button 
					onClick={()=>
					{	
						dispatch(extendTodo(
						));
					}}
				className="btn btn-primary  mx-2"><strong>CLICK HERE FOR NEW SPACES</strong></button>
			<hr/>	</div></div>
  );
}

export default TenTodos;