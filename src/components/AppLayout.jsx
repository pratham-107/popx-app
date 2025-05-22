import { Outlet } from 'react-router-dom';
import '../styles/App.css';

function AppLayout() {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
}

export default AppLayout;