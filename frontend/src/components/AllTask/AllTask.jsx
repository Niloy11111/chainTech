import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../../../src/App.css";
import UseTask from "../../Hooks/UseTasks";
import TaskTab from "../TaskTab/TaskTab";

const AllTask = () => {
  const [tasks, loading, refetch] = UseTask();
  const [activeTab, setActiveTab] = useState(0);
  const low = tasks?.filter((item) => item.priority === "Low");
  const high = tasks?.filter((item) => item.priority === "High");

  const moderate = tasks?.filter((item) => item.priority === "Moderate");

  return (
    <div className="mx-16 mb-20">
      <h2 className="text-4xl font-Inter font-bold text-center my-8">
        {" "}
        {tasks?.length} To Do Task
      </h2>

      <Tabs>
        <TabList className="flex mb-3 gap-6 justify-center">
          <Tab
            className={`cursor-pointer px-7 py-2  ${
              activeTab === 0 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(0)}
          >
            All Task
          </Tab>

          <Tab
            className={`cursor-pointer px-7 py-2  ${
              activeTab === 1 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Low
          </Tab>

          <Tab
            className={`cursor-pointer px-7 py-2  ${
              activeTab === 2 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Moderate
          </Tab>
          <Tab
            className={`cursor-pointer px-7 py-2  ${
              activeTab === 3 ? "active" : "inActive"
            }`}
            onClick={() => setActiveTab(3)}
          >
            High
          </Tab>
        </TabList>

        <TabPanel>
          <TaskTab items={tasks}></TaskTab>
        </TabPanel>
        <TabPanel>
          <TaskTab items={low}></TaskTab>
        </TabPanel>

        <TabPanel>
          <TaskTab items={moderate}></TaskTab>
        </TabPanel>
        <TabPanel>
          <TaskTab items={high}></TaskTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllTask;
