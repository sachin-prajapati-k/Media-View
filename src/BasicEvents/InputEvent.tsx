import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function InputEvent() {
  const [newTask, setNeweTask] = useState<any>("");
  const [tasks, setTasks] = useState<any[]>([]);
  ///////////////////////////////////
  const Addtask = () => {
    if (newTask.trim()) {
      const task: { id: any; completed: boolean; text: string } = {
        id: Date.now(),
        completed: false,
        text: newTask,
      };

      setTasks([...tasks, task]);

      setNeweTask("");
    }
  };

  ///////////////////////////////////////
  const toggleTask = (id: any) => {
    setTasks(
      tasks.map((taskData) => {
        if (taskData.id === id) {
          return { ...taskData, completed: !taskData.completed };
        }
        return taskData;
      })
    );
  };
  ///////////////////////////////////////
  const CompleteTask = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  };
  //////////////////////////////////////
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed === true).length;
  const remainingTasks = tasks.filter(
    (task) => task.completed === false
  ).length;
  ////////////////////////////////
  const taskPer = (completedTasks / totalTasks) * 100;

  return (
    <>
      <div className="bg-cyan ms-3" style={{ height: "50px", width: "200px" }}>
        {newTask}{" "}
      </div>
      <div className="row ms-3">
        <div className="col-2">Total Tasks: {totalTasks}</div>
        <div className="col-2">Completed Tasks: {completedTasks}</div>
        <div className="col-2">Remaining Tasks: {remainingTasks}</div>
        <div className="row">
          <div
            className=" container-fluid col-8 m-3"
            style={{
              width: `${taskPer}%`,
              height: "30px",
              backgroundColor: "green",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          ></div>
        </div>
      </div>
      <div className="ms-3 d-flex gap-2">
        <input value={newTask} onChange={(e) => setNeweTask(e.target.value)} />
        <Button onClick={Addtask}>Add task</Button>
      </div>
      <h4>
        <ul className="" style={{ listStyle: "none" }}>
          {tasks.map((item, index) => (
            <div className="mt-2">
              {" "}
              <li>
                <div className="row">
                  <div className="col-2">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleTask(item.id)}
                    />{" "}
                    {item.text}
                  </div>
                  <Button
                    className="ms-2 bg-danger col-2"
                    onClick={CompleteTask}
                    style={{ height: "30px", width: "100px" }}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </h4>
    </>
  );
}
