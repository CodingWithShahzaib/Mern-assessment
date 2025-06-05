import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Typography, Card, Button, Skeleton, Alert, Popconfirm, message, Divider } from 'antd';
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { api } from '../api/api';
import type { Post, User } from '../types';
import { getPostImagePath, handleImageError } from '../utils/imageHelpers';

const { Title, Text, Paragraph } = Typography;

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await api.getPost(Number(id));
        setPost(postData);
        
        // Fetch the post's author
        const userData = await api.getUser(postData.userId);
        setUser(userData);
        
        setError(null);
      } catch (err) {
        setError('Failed to load post details');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  const handleEdit = () => {
    navigate(`/post/edit/${id}`);
  };

  const handleDelete = async () => {
    try {
      await api.deletePost();
      message.success('Post deleted successfully');
      navigate('/blogs');
    } catch (err) {
      message.error('Failed to delete post');
    }
  };

  if (loading) {
    return (
      <Card style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
        <Skeleton active paragraph={{ rows: 6 }} />
      </Card>
    );
  }

  if (error || !post) {
    return (
      <Alert 
        message="Error" 
        description={error || 'Post not found'} 
        type="error" 
        showIcon 
        action={
          <Button type="primary" onClick={() => navigate('/blogs')}>
            Back to Blogs
          </Button>
        }
      />
    );
  }

  return (
    <Card style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0 }}>{post.title}</Title>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button 
            type="primary" 
            icon={<EditOutlined style={{ fontSize: 18 }} />} 
            onClick={handleEdit}
            size="large"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: '#397BF6',
              borderColor: '#397BF6',
              width: 42,
              height: 42,
              borderRadius: 8,
              boxShadow: '0 2px 6px rgba(57, 123, 246, 0.3)'
            }}
          />
          <Popconfirm
            title="Delete this post?"
            description="Are you sure you want to delete this post?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button 
              type="primary" 
              danger 
              icon={<DeleteOutlined style={{ fontSize: 18 }} />} 
              size="large"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: 42,
                height: 42,
                borderRadius: 8,
                boxShadow: '0 2px 6px rgba(244, 67, 54, 0.3)'
              }}
            />
          </Popconfirm>
        </div>
      </div>
      
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        By {user?.name || 'Unknown Author'} • {post.createdAt ? formatDate(post.createdAt) : ''}
      </Text>
      
      {post.image && (
        <div style={{ marginBottom: 16 }}>
          <img 
            src={getPostImagePath(post.id, post.image)} 
            alt={post.title}
            style={{ 
              width: '100%', 
              maxHeight: 400, 
              objectFit: 'cover',
              borderRadius: 4
            }}
            onError={(e) => handleImageError(e, post.id)}
          />
        </div>
      )}
      
      <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
        {post.body}
      </Paragraph>
      
      {/* Additional paragraphs if needed */}
      <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
        {post.body}
      </Paragraph>
      
      <Divider />
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/blogs">
          <Button 
            type="primary"
            icon={<ArrowLeftOutlined />}
          >
            Back to Blogs
          </Button>
        </Link>
      </div>
    </Card>
  );
}; 