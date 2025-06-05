import { Layout, Menu, Avatar, Typography, Button } from 'antd';
import { 
  BarChartOutlined, 
  FileOutlined, 
  ClockCircleOutlined, 
  DashboardOutlined, 
  MenuOutlined, 
  CheckCircleOutlined,
  BorderOutlined,
  DownOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import type { MenuProps } from 'antd';

const { Sider } = Layout;
const { Text } = Typography;

export const Sidebar = () => {
  const { user, error } = useUser();
  const location = useLocation();

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return '1';
    if (path.includes('/blogs')) return '2';
    return '1'; // Default to Dashboard
  };

  const dashboardItems: MenuProps['items'] = [
    {
      key: '1',
      icon: <BarChartOutlined style={{ fontSize: 16 }} />,
      label: <Link to="/">Overview</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    },
    {
      key: '3',
      icon: <FileOutlined style={{ fontSize: 16 }} />,
      label: <Link to="/calendar">Calendar</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    },
    {
      key: '4',
      icon: <ClockCircleOutlined style={{ fontSize: 16 }} />,
      label: <Link to="/schedule">Schedule Actions</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    },
    {
      key: '5',
      icon: <DashboardOutlined style={{ fontSize: 16 }} />,
      label: <Link to="/live">Live Alerts</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    }
  ];

  const blogItems: MenuProps['items'] = [
    {
      key: '2',
      icon: <CheckCircleOutlined style={{ fontSize: 16, color: '#397BF6' }} />,
      label: <Link to="/blogs" style={{ color: '#397BF6' }}>All</Link>,
      style: { 
        margin: 0, 
        height: 30, 
        lineHeight: '30px',
        fontSize: 13,
        paddingLeft: 16,
        fontWeight: 500,
        color: '#397BF6',
        backgroundColor: '#e6f4ff'
      }
    },
    {
      key: '6',
      icon: <PieChartOutlined style={{ fontSize: 16, color: '#bfbfbf' }} />,
      label: <Link to="/blogs/latest">Latest</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    },
    {
      key: '7',
      icon: <BorderOutlined style={{ fontSize: 16, color: '#bfbfbf' }} />,
      label: <Link to="/blogs/archived">Archived</Link>,
      style: { margin: 0, height: 30, lineHeight: '30px', fontSize: 13, paddingLeft: 16 }
    }
  ];

  return (
    <Sider width={200} style={{ 
      background: '#fff', 
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto',
      zIndex: 10,
      borderRight: '1px solid #eaeaea'
    }}>
      <div style={{ 
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        background: '#397BF6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/QDB-logo.png" alt="QDB Logo" style={{ height: '90px', width: '100px' }} />
          </div>
        </div>
        <Button 
          type="text" 
          icon={<MenuOutlined />} 
          style={{ 
            color: 'white', 
            padding: 0, 
            height: 'auto', 
            border: 'none' 
          }} 
        />
      </div>
      
      {error ? (
        <div style={{ 
          padding: '25px 0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#ff5454',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
            color: 'white',
            fontSize: '26px',
            fontWeight: 'bold'
          }}>
            !
          </div>
          <Text style={{ 
            fontSize: '13px', 
            color: '#757575'
          }}>
            Error
          </Text>
        </div>
      ) : (
        <div style={{ 
          padding: '20px 0 15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          {user && (
            <>
              <Avatar
                size={64}
                src={user.avatar}
                style={{ marginBottom: 10 }}
                data-testid="user-avatar"
              />
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Text style={{ 
                  margin: 0, 
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#444'
                }} data-testid="user-name">
                  {user.email}
                </Text>
              </div>
              <Button 
                type="text" 
                style={{ 
                  fontSize: 12, 
                  color: '#397BF6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: 4,
                  marginTop: 8,
                  height: 'auto'
                }}
              >
                Live metrics
              </Button>
            </>
          )}
        </div>
      )}
      
      <div style={{ padding: '0', margin: '0' }}>
        <div style={{ padding: '10px 16px', fontSize: 12, color: '#8c8c8c', fontWeight: 500 }}>
          Dashboards
        </div>
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          style={{ border: 'none' }}
          className="sidebar-menu"
          items={dashboardItems}
        />
        
        <div style={{ padding: '10px 16px', fontSize: 12, color: '#8c8c8c', fontWeight: 500, marginTop: 5 }}>
          Blogs
        </div>
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          style={{ border: 'none' }}
          className="sidebar-menu"
          items={blogItems}
        />
        
        <div style={{ 
          padding: '10px 16px', 
          fontSize: 12, 
          color: '#8c8c8c', 
          fontWeight: 500, 
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          DOCUMENTATION
          <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
        </div>
        
        <div style={{ 
          padding: '10px 16px', 
          fontSize: 12, 
          color: '#8c8c8c', 
          fontWeight: 500, 
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          REPORTS
          <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
        </div>
        
        <div style={{ 
          padding: '10px 16px', 
          fontSize: 12, 
          color: '#8c8c8c', 
          fontWeight: 500, 
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          NEED HELP?
          <DownOutlined style={{ fontSize: 12, color: '#8c8c8c' }} />
        </div>
      </div>
    </Sider>
  );
}; 