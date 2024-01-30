import SingleTodo from "../SingleTodo/SingleTodo";

const TaskTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.map((item) => (
        <SingleTodo key={item._id} item={item}></SingleTodo>
      ))}
    </div>
  );
};

export default TaskTab;
