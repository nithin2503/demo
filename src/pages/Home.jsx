import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";

const Home = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const handleEdit = (index) => {
    navigate(`/edit/${index}`, { state: tasks[index] });
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
