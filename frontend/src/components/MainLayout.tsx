import { Layout, Avatar, Button, Input } from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  MailOutlined, 
  BarChartOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useUser } from '../contexts/UserContext';

const { Header, Content } = Layout;

export const MainLayout = () => {
  const { user } = useUser();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft: 230, background: '#f5f7f9' }}>
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
          position: 'sticky',
          top: 0,
          zIndex: 9
        }}>
          <div style={{ width: '40%', maxWidth: 400 }}>
            <Input
              prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
              placeholder="Type here to search..."
              style={{ 
                borderRadius: 4,
                background: '#f5f5f5',
                border: 'none',
                height: 36
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              style={{
                background: '#fff',
                borderColor: '#e0e0e0',
                color: '#333',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                padding: '4px 12px',
                gap: 4,
                height: 36,
                boxShadow: 'none'
              }}
            >
              Add
            </Button>
            
            <div style={{ position: 'relative' }}>
              <Button
                type="text"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 8,
                  color: '#555'
                }}
              >
                <MailOutlined style={{ fontSize: 20 }} />
              </Button>
              <div 
                style={{ 
                  position: 'absolute', 
                  top: -2, 
                  right: -2, 
                  backgroundColor: '#397BF6', 
                  color: 'white',
                  fontSize: '11px',
                  borderRadius: '50%',
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                2
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <Button
                type="text"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 8,
                  color: '#555'
                }}
              >
                <BarChartOutlined style={{ fontSize: 20 }} />
              </Button>
              <div 
                style={{ 
                  position: 'absolute', 
                  top: -2, 
                  right: -2, 
                  backgroundColor: '#397BF6', 
                  color: 'white',
                  fontSize: '11px',
                  borderRadius: '50%',
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                5
              </div>
            </div>
            
            {user && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar 
                  src={user.avatar}
                  style={{ cursor: 'pointer' }}
                  size={36}
                />
                <div style={{ marginLeft: 8, display: 'flex', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#444'
                  }}>
                    {user.name}
                  </span>
                  <DownOutlined style={{ fontSize: 12, marginLeft: 4, color: '#555' }} />
                </div>
              </div>
            )}
          </div>
        </Header>
        
        <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', position: 'relative' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}; 