# Step Counter

A simple React application for tracking steps while demonstrating state management with Redux Toolkit and persistent state using Redux Persist.

## Features

- Increment the step counter
- Decrement the step counter
- Reset the counter
- Prevent the counter from going below `0`
- Add a custom number of steps
- Manage application state with Redux Toolkit
- Persist counter state using Redux Persist
- Preserve the step count after refreshing the page
- Simple and responsive interface

## Technologies

- React
- Redux Toolkit
- React Redux
- Redux Persist
- JavaScript
- HTML
- CSS
- Create React App (CRA)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

Check your installed versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd step-counter
```

Install the dependencies:

```bash
npm install
```

### Run the Application

Start the development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## Usage

The application displays a step counter with controls for changing its value.

- Click **Increment** to increase the counter.
- Click **Decrement** to decrease the counter.
- Click **Reset** to return the counter to `0`.
- Enter a custom step amount to add multiple steps at once.
- The counter cannot go below `0`.
- The current step count is saved and restored when the application is refreshed.

## Example

```text
              Step Counter

                  250

     [ - ]      [ Reset ]      [ + ]

          Custom Steps
          [ 500       ]
          [ Add Steps ]
```

## State Management

The application uses **Redux Toolkit** to manage the counter state.

The Redux store contains the current step count:

```text
Redux Store
    │
    └── counter
          │
          └── count
```

Components read the current count using React Redux's `useSelector` hook and update it by dispatching Redux actions with `useDispatch`.

Example actions include:

```text
increment
decrement
reset
addCustomSteps
```

## State Persistence

The application uses **Redux Persist** to save the counter state in browser storage.

This means the step count is preserved when the user:

- Refreshes the page
- Closes the browser tab
- Returns to the application later

The persisted Redux state is automatically restored when the application starts.

## Redux Concepts Practiced

This project is useful for practicing:

- Redux Toolkit
- `configureStore`
- `createSlice`
- Redux reducers
- Redux actions
- `useSelector`
- `useDispatch`
- Redux Provider
- Redux Persist
- `persistReducer`
- `persistStore`
- `PersistGate`
- Redux serializable middleware configuration
- Updating state with Immer

## React Concepts Practiced

The project also demonstrates:

- Functional components
- Event handling
- Controlled inputs
- JSX
- Component styling
- Conditional button states
- Basic React project structure

## Project Structure

```text
step-counter/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── counterSlice.js
│   │   └── store.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

## Available Scripts

### `npm start`

Runs the application in development mode.

### `npm test`

Launches the test runner.

### `npm run build`

Builds the application for production.

## Purpose

Step Counter is a beginner-friendly React and Redux project created to practice application state management and user interactions.

The project starts with basic counter functionality and extends it with centralized Redux state, persistent storage, and custom step amounts.

The main goal is to understand how React components interact with a Redux store, how actions update application state, and how Redux Persist can preserve state between browser sessions.