import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Container } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container style={{ margin: 20 }}> {/* This styles the accordian - orlando */} 
    <App />
    </Container>
  </React.StrictMode>
);
