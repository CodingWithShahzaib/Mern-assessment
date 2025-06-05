import { Typography, Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, FileTextOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useRandomUser } from '../hooks/useRandomUser';

const { Title } = Typography;

export const Dashboard = () => {
  const { user } = useRandomUser();

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic 
              title="User Profile" 
              value={user?.name || 'Loading...'}
              prefix={<UserOutlined />} 
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic 
              title="Total Posts" 
              value={15} 
              prefix={<FileTextOutlined />} 
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic 
              title="Latest Activity" 
              value="Today" 
              prefix={<ClockCircleOutlined />} 
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}; 