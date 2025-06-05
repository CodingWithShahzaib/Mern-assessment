import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { MainLayout } from './components/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Blogs } from './pages/Blogs';
import { PostDetail } from './pages/PostDetail';
import { PostEdit } from './pages/PostEdit';
import { UserProvider } from './contexts/UserContext';

// Import styles (no need to import antd CSS, it's included with components)
import './index.css';

const App = () => {
  return (
    <ConfigProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="post/:id" element={<PostDetail />} />
              <Route path="post/edit/:id" element={<PostEdit />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ConfigProvider>
  );
};

export default App;
