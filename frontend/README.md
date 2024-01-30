# Task Management Application Guide

## Create Task

1. Navigate to the "Add Task" page.
2. Fill out the form with all the required information.
3. Ensure that all input fields are completed to avoid errors.
4. Click the "Add Task" button.
5. A toast message will confirm the successful addition of your task.
6. Go to the "All Task" page, and you will see your task with proper information.

## Edit Task

1. Go to the "All Task" page.
2. Find the task you want to edit and click the "Edit" button.
3. Modify any information as needed.
4. Press the "Edit" button, and a success message will be displayed.

## Delete Task

1. In the "All Task" page, find the task card with the delete button.
2. Click the delete button.
3. Confirm the deletion in the toast message.
4. The task will be successfully deleted.

## Task Status

- By default, a task's status is "Make Complete."
- Click "Make Complete" to mark the task as finished.
- The button will change to "Completed" once the task is finished.

# Brief Explanation of Code Structure and Key Decisions

## Frontend (React)

- **src/Layout/Main.jsx:** Contains Navbar and routing outlet for children routes.
- **src/components:** Houses all necessary components.
- **src/Hooks:** Includes hooks for HTTP request URLs and tasks data fetching.

### Libraries and Tools Used

- **QueryClient:** Utilized for advantageous data fetching.
- **React Router Dom:** Implemented for proper routing beyond a single page.
- **React Hook Form:** Used for handling add and edit tasks.
- **Sweetalert2:** Employed for displaying toasts during CRUD operations.

## Backend (Node.js, Express, MongoDB)

### Folder Structure

- Handled everything in `index.js`.
- Established the database connection.

### Database

- Utilized MongoDB for storing and retrieving data.

### RESTful API

- Designed RESTful API endpoints for CRUD operations.

# Key Decisions Made

- A pivotal decision involved managing task status through patching (/task/:id) and updating the status value with $set from the backend. This process posed a challenge but proved to be both engaging and enjoyable.
