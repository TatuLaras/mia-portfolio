import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './index.css';
import './Navbar.css';
import './Hero.css';
import './Projects.css';
import './ProjectItem.css';
import './CV.css';
import './ArrowButton.css';
import './Button.css';
import './Contact.css';
import './Footer.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
