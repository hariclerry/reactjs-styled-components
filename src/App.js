import React from 'react';
import './App.css';
import styled, { keyframes } from "styled-components";

import MenuItems from "./components/menu-items/menuItems"

function App() {
  // Create the keyframes
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  // Here we create a component that will rotate everything we pass in over two seconds
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 5rem 1rem;
    font-size: 5rem;
  `;
  return (
    <div className="App">
      <Rotate>&lt; ☂  &gt;</Rotate>
      <MenuItems />
    </div>
  );
}

export default App;
