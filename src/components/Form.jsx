// import "./Form.css"

// import { useState } from "react";

// const Form = () => {
//   const [title, setTitle] = useState("")
//     const [details, setDetails] = useState("")
//     const [editingId, setEditingId] = useState(null)
//     const [task, setTask] = useState([])
//     const addTask=()=>{
//       if (editingId!=null){
//         const newInfo = {id:editingId,title:title,details:details}
//         const updTask = task.map(item => {
//         if (item.id === editingId) {
//         setTitle(item.title)
//         setDetails(item.details)
//         return { ...item, ...newInfo};
//         }
        
//         return item;
//         });
//         setTask(updTask)
//         setDetails('')
//         setTitle('')
//         setEditingId(null)
//       }
//       else{
//         let copyTask = [...task]
//       let id = Date.now()
//       copyTask.push({'id':id,"title":title,"details":details})
//       setTask(copyTask) 
//       setDetails('')
//       setTitle('')
//       }
      
//     }
//     const del=(id)=>{
//       const copyTask = task.filter(obj => obj.id !== id)
//       setTask(copyTask)
//     }
//     const edit= (el)=>{
//       setEditingId(el.id)
//       setTitle(el.title)
//       setDetails(el.details)
//     }
    
//     return (
//       <div className="form-con">
//         <div className="input-con">
//           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id="title"/>
//           <textarea value={details} onChange={(e)=>setDetails(e.target.value)} id="details">
//           </textarea>
//           <button onClick={()=>addTask()}>{editingId !== null ? "Update Task" : "Add Task"}</button>
//         </div>
//         <div className="data">
//           <ol className="card">
//             {task.map((el)=>{
//               return (
//               <ul key={el.id} className="list">
//                 <div>
//                     <li>{el.title}</li>
//                     <li>{el.details}</li>
//                 </div>
//                 <div className="btns">
//                     <button onClick={()=>edit(el)}>Edit</button>
//                     <button onClick={()=>del(el.id)}>Delete</button>
//                 </div>
//               </ul>
//             )})}
//           </ol>
//         </div>
//       </div>
//     );
// };

// export default Form;
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [task, setTask] = useState([]);
  const [theme, setTheme] = useState("dark");

  const addTask = () => {
    if (!title.trim() && !details.trim()) return; // ignore empty

    if (editingId !== null) {
      const newInfo = { id: editingId, title, details };
      const updTask = task.map((item) => {
        if (item.id === editingId) {
          return { ...item, ...newInfo };
        }
        return item;
      });
      setTask(updTask);
      setDetails("");
      setTitle("");
      setEditingId(null);
    } else {
      let copyTask = [...task];
      let id = Date.now();
      copyTask.push({ id, title, details });
      setTask(copyTask);
      setDetails("");
      setTitle("");
    }
  };

  const del = (id) => {
    const copyTask = task.filter((obj) => obj.id !== id);
    setTask(copyTask);
  };

  const edit = (el) => {
    setEditingId(el.id);
    setTitle(el.title);
    setDetails(el.details);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`page ${theme}`}>
      <div className="page-inner">
        <header className="top-bar" >
          <h1 className="app-title" style={{color:"white"}}>Task Manager</h1>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        </header>

        <div className="form-con">
          <div className="input-con">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Task title"
            />
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              id="details"
              placeholder="Task details..."
            ></textarea>
            <button onClick={addTask}>
              {editingId !== null ? "Update Task" : "Add Task"}
            </button>
          </div>

          <div className="data">
            {task.length === 0 ? (
              <p className="empty-text">No tasks yet. Add something 🚀</p>
            ) : (
              <ol className="card">
                {task.map((el) => {
                  return (
                    <ul key={el.id} className="list">
                      <div>
                        <li>{el.title}</li>
                        <li>{el.details}</li>
                      </div>
                      <div className="btns">
                        <button onClick={() => edit(el)}>Edit</button>
                        <button onClick={() => del(el.id)}>Delete</button>
                      </div>
                    </ul>
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
