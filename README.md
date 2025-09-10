# React Todo List App

A simple and efficient Todo List application built with React and Vite, designed to help users manage their daily tasks seamlessly.

## Features

- **Add Todos**: Easily add new tasks using the input field and "Add" button.
- **Edit Todos**: Click the edit button on any todo to modify it (the item is removed and its text is populated in the input for editing).
- **Delete Todos**: Remove unwanted tasks with the delete button.
- **Persistent Storage**: All todos are saved locally in the browser's localStorage, ensuring data persists across sessions.
- **Responsive Design**: Clean and intuitive UI with FontAwesome icons for actions.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Icons**: FontAwesome
- **Styling**: Custom CSS
- **State Management**: React useState and useEffect hooks

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reactjs--todo-list.git
   cd reactjs--todo-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- Enter a new task in the input field and click "Add" to create a todo.
- To edit a todo, click the edit icon (pen) next to it; the text will appear in the input field, and the original item will be removed.
- To delete a todo, click the delete icon (X) next to it.
- Your todos will be automatically saved and restored when you reload the page.

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint for code quality checks

## Author

Made by Zeynab Maleki rad

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
