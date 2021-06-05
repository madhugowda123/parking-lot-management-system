import React,{useState,useEffect} from 'react';
import {addTodo} from '../reducers/actions';
import {useDispatch} from 'react-redux';
import './TodoInput.css';
function TodoInput()
{
	let dispatch=useDispatch();
	let [id,setId]=useState();
	let [name,setName]=useState();
	let [phone,setPhone]=useState();
	 
	return(
		<div className="col m-6 hero-image" >
{/* details for booking */}
			<h1 className="text-center"  style={{color:"black"}}><i> Add Your Details</i></h1>
			<div className="size text-center">
				{/* parking slot number */}
			<label style={{color:"black"}}>Enter parking slot</label>
				<input 
				type="number" 
				value={id}
				onChange={(e)=>setId(e.target.value)}
				className="col form-control"/>
				{/* name for booking */}
				<label style={{color:"black"}}>Enter Your name</label>
				<input 
				type="text" 
				value={name}
				onChange={(e)=>setName(e.target.value)}
				className="col form-control" />
				{name?null:<div className="text-danger">Name is required</div>}
				{/* phone number for booking */}
				<label style={{color:"black"}} >Enter phone number</label>
				<input
				 type="number"  
				 value={phone}
				 onChange={(e)=>setPhone(e.target.value)}
				className="col form-control"/>
				<br/>
				<div className="text-center">
				<button 
					onClick={()=>
					{
						dispatch(addTodo(
						{
							id:id,
							name:name,
							phone:phone
						}));
						setPhone('');
						setName('');
						setId('');
					}}
					// onClick details will added to slot
				className="btn btn-primary  mx-2"><strong>Add</strong></button>
				</div>
			</div>
		</div>
		)
	
}
export default TodoInput;