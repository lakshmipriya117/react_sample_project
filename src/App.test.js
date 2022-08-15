//import { render, screen } from '@testing-library/react';
//import App from './App';

//test('renders learn react link', () => {
 // render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});

import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('app');
const root = createRoot(div); 
root.render(<App />);
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
});



