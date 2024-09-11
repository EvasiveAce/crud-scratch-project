import './App.css';
import ReactDOM from 'react-dom/client';
import Router from './Components/ReactRouterComponent.js';


export default function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<Router />)
}

