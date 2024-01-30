import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseTask from "../../Hooks/UseTasks";
import SingleTodo from "../SingleTodo/SingleTodo";

const AllTask = () => {
  //   const [tasks, setTasks] = useState([]);

  const axiosPublic = UseAxiosPublic();

  const [tasks, loading, refetch] = UseTask();

  //   useEffect(() => {
  //     fetch("http://localhost:5000/tasks")
  //       .then((res) => res.json())
  //       .then((data) => setTasks(data));
  //   }, []);

  return (
    <div className="mr-10 ml-16 mb-20">
      <h2 className="text-4xl font-Inter font-bold text-center my-8">
        {" "}
        To Do Task {tasks?.length}{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks?.map((item) => (
          <SingleTodo key={item._id} item={item}></SingleTodo>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
