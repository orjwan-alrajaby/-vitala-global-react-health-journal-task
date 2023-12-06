# SelfCare - React Health Journal App

Welcome to SelfCare, a health journaling app designed to help you track and categorize activities that contribute to a healthier lifestyle. Follow the steps below to set up and run the application.

## Prerequisites
- Make sure you have [Git](https://git-scm.com/) installed on your machine.
- You need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) installed to run the project.

## Installation

1. Open your terminal.

2. Clone the repository by running the following command:

   ```bash
   git clone https://github.com/orjwan-alrajaby/vitala-global-react-health-journal-task.git
   ```

3. Navigate into the cloned repository:

   ```bash
   cd vitala-global-react-health-journal-task
   ```

4. Move into the client folder:

   ```bash
   cd client
   ```

5. Install project dependencies using npm or yarn:

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

## Running the Application

6. After the installation is complete, run the following command to start the React server:

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

7. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the SelfCare app.

## SelfCare App Features

### 1. Create Activity Page
   - Add and save activities with a title, description, and type (e.g., exercise, meals, general, sleep, water).

### 2. My Activities Page
   - View all saved activities.
   - Search and filter activities by a search term or category (e.g., sleep, water, exercise).
   
### 3. Edit Activity Page
   - Edit an entry's title, description, or category.

### 4. Delete Activity Page
   - Delete an entry altogether.

### 5. 404 Page
   - Redirects to this page when the requested page doesn't exist.

## Technologies Used

- **React.js**: For building the frontend UI components and pages.
  - **Context API (React.js)**: To handle data flow and state updates across pages.
- **React Router DOM**: Handles routing and navigation on the frontend.
- **Material UI**: Utilized for styling using JSS and preconfigured components.
  - **Material UI Icons**: Used for incorporating icons into the application.
- **Day.js**: Manages date formatting and the creation of created_at dates for entries and last_modified_at dates.
- **UUID**: Generates unique identifiers for each entry on creation.

## Possible Future Features

- **A Backend Part**:Currently, SelfCare is a fully frontend application. However, there are plans to build a backend for the app in the future to enhance functionality, security, and data storage capabilities.
- **Goals Entry**: Introduce a new feature for creating, viewing, searching, and filtering goals.
- **Goals Structure**: Goals share the same structure as activities but include a start date and a due date.
- **Points System**: Assign points to each goal type (e.g., exercise 9 points, meals 6 points).