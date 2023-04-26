import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Unidad from './Views/Unidad';
import User from './Views/User';
import AlertPrompt from './components/AlertPrompt';
import TodoReduxPage from './Views/ReduxTodoPage/TodoReduxPage';
import ReduxFormView from './Views/ReduxForm/ReduxFormView';

const MyRoutes = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/user" element={<User />} />
                <Route path="/reduxTodo" element={<TodoReduxPage />} />
                <Route path="/reduxForm" element={<ReduxFormView />} />
                <Route path="/unidad" element={<Unidad />} />
                {/* <Route path="/about" component={About} /> */}
            </Routes>
        </Router>
        {/* <h1>Hola</h1>
        
        <AlertPrompt /> */}
        </>
    );
};

export default MyRoutes;