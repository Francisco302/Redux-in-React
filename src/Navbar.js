import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">App</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/user">User</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/reduxTodo">Redux Todo</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/reduxForm">Redux Forms</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/unidad">Unidad</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;