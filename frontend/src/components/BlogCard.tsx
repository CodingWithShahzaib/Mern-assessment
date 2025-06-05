import { Card, Typography, Space, Avatar, Button } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import type { Post, User } from '../types';

const { Meta } = Card;
const { Text } = Typography;

interface BlogCardProps {
  post: Post;
  user?: User;
  onDelete?: (id: number) => void;
}

export const BlogCard = ({ post, user, onDelete }: BlogCardProps) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Truncate body text
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Card
      hoverable
      cover={
        <div style={{ height: 200, overflow: 'hidden' }}>
          <img 
            alt={post.title} 
            src={post.image} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      }
      actions={[
        <Link key="edit" to={`/post/edit/${post.id}`}>
          <EditOutlined />
        </Link>,
        <DeleteOutlined key="delete" onClick={() => onDelete && onDelete(post.id)} />
      ]}
    >
      <Meta
        title={
          <Link to={`/post/${post.id}`} style={{ color: '#333' }}>
            {post.title}
          </Link>
        }
        description={
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Space size="small" align="center">
              {user && (
                <>
                  <Avatar 
                    src={user.avatar} 
                    icon={<UserOutlined />} 
                    size="small" 
                  />
                  <Text type="secondary">{user.name}</Text>
                </>
              )}
              <Text type="secondary">•</Text>
              <Text type="secondary">{formatDate(post.createdAt)}</Text>
            </Space>
            <Text>{truncateText(post.body)}</Text>
            <Link to={`/post/${post.id}`}>
              <Button type="link" style={{ padding: 0 }}>Read More</Button>
            </Link>
          </Space>
        }
      />
    </Card>
  );
}; 