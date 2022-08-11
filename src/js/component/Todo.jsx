import React, { useState } from "react";





//create your first component
const Todo = () => {
	const [task, setTask] = useState({ task: "", done: false })
	const [listTask, setListask] = useState([])

	const addTask = () => {
		
		setListask([
			...listTask,
			task

		])
		console.log(listTask)
		setTask({...task,task:""})
	}

	const handleKey = (event) => {
		if(event.key==="Enter"){
			addTask()
		}
		
	}
	const deleteTask = (id) =>{
		// console.log(id)
		let newList = listTask.filter((item, index)=>{
		// console.log(index)
			if(id !== index){
				return(
					item
				)
			}
			
		})
		setListask(newList)

	}
	const handleChange = (event) => {


		setTask({

			...task,
			[event.target.name]: event.target.value
		})
		console.log(task)
	}

	return (
		<div className="counter">
			
				

			<div className="col-12 row justify-content-center">
				<h3 className="text-center" >FINISH TO BEING AN EXCELLENT DEVELOPER!</h3>
				<div className="col-8 md d-flex flex-column align-items-center  ">
					<form onSubmit={(event)=>{event.preventDefault()}}>
						<input
							className="input"
							onKeyDown={handleKey}
							placeholder="Add your Task "
							onChange={handleChange}
							name="task"
							value={task.task}
						/>
					</form>

					<button

						type="button"
						className="btn btn-primary my-2 "
						onClick={addTask}>
						Save

					</button>
				</div>

				<div className="card col-8 md shadow-lg">
					<ul className="justify-content-center">
					{	
						listTask.map((tak, i) => {
							return (
								<li key={i} className="listT d-flex justify-content-between border-bottom">
									
									{tak.task}
																						
									<i 
										onClick={()=>{deleteTask(i)}}
										className="close far fa-times-circle mx-5 p-2"
										type="button"
									>
									</i>																				
								</li>
							)
						})
					}</ul>
				</div>
			</div>
		</div>
	)
};

export default Todo;
