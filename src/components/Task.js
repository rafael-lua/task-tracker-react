

const Task = (props) => {
  return (
    <div className={"task " + (props.task.reminder === true ? "reminder" : "")} onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3>{props.task.text}
      <i 
        className="fas fa-times" 
        style={{color: "red", cursor: "pointer"}} 
        onClick={() => props.onDelete(props.task.id)}
      ></i>
      </h3>
      <p>{props.task.day}</p>
    </div>
  )
}

export default Task
