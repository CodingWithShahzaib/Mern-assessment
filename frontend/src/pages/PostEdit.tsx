import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, Alert, Spin, message } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';
import { api } from '../api/api';
import type { Post } from '../types';

const { Title } = Typography;
const { TextArea } = Input;

export const PostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await api.getPost(Number(id));
        setPost(postData);
        
        form.setFieldsValue({
          title: postData.title,
          body: postData.body,
        });
        
        setError(null);
      } catch (err) {
        setError('Failed to load post details');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, form]);

  const handleSubmit = async (values: any) => {
    if (!post) return;
    
    try {
      setSubmitting(true);
      console.log('Sending update request to:', `/api/posts/${post.id}`);
      console.log('Update data:', {
        title: values.title,
        body: values.body,
      });
      
      const updatedPost = await api.updatePost(post.id, {
        title: values.title,
        body: values.body,
      });
      
      // Update the local post state with the response from the server
      setPost(updatedPost);
      console.log('Update successful, response:', updatedPost);
      
      message.success('Post updated successfully');
      navigate(`/post/${post.id}`);
    } catch (error) {
      console.error('Update failed:', error);
      message.error('Failed to update post');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Spin size="large" />
        <p style={{ marginTop: 16 }}>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return <Alert message="Error" description={error || 'Post not found'} type="error" showIcon />;
  }

  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <Button icon={<ArrowLeftOutlined />} style={{ marginBottom: 16 }}>
          Back to Post
        </Button>
      </Link>
      
      <Card>
        <Title level={2}>Edit Post</Title>
        
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input size="large" />
          </Form.Item>
          
          <Form.Item
            name="body"
            label="Content"
            rules={[{ required: true, message: 'Please enter post content' }]}
          >
            <TextArea rows={12} />
          </Form.Item>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={submitting}
              size="large"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}; 