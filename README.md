# Step Counter

A simple React application that demonstrates basic state management by allowing users to increment, decrement, and reset a counter.

## Features

- Increment the counter
- Decrement the counter
- Reset the counter
- Simple and responsive interface
- Uses React state management with the `useState` hook

## Technologies

- React
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

The application displays a counter with controls for changing its value.

- Click **Increment** to increase the counter by `1`.
- Click **Decrement** to decrease the counter by `1`.
- Click **Reset** to return the counter to `0`.

## Example

```text
        Step Counter

             0

[ Decrement ] [ Reset ] [ Increment ]
```

## React Concepts Practiced

This project is useful for practicing:

- Functional components
- React `useState` hook
- Event handling
- State updates
- JSX
- Component styling
- Basic React project structure

## Available Scripts

### `npm start`

Runs the application in development mode.

### `npm test`

Launches the test runner.

### `npm run build`

Builds the application for production.

## Project Structure

```text
step-counter/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Purpose

Step Counter is a beginner React project created to practice state management and user interactions.

The main focus of the project is understanding how React updates the user interface when application state changes.