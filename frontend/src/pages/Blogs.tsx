import { useState, useEffect } from "react";
import { Typography, Card, Alert, Empty, Button, Spin, Tabs } from "antd";
import {
  FileTextOutlined,
  FilterOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useUser } from "../contexts/UserContext";
import { api } from "../api/api";
import { Link } from "react-router-dom";
import { getPostImagePath, handleImageError } from "../utils/imageHelpers";
import type { Post } from "../types";
import { SimplePagination } from "../components/SimplePagination";

const { Title, Text, Paragraph } = Typography;

// Blog post item component
const BlogPostItem = ({ post, formatDate }: { post: any; formatDate: any }) => {
  return (
    <div style={{ padding: "20px 0" }}>
      <div style={{ display: "flex", gap: 20 }}>
        <div
          style={{
            flexShrink: 0,
            width: 150,
            height: 100,
            overflow: "hidden",
            borderRadius: 4,
          }}
        >
          <img
            src={getPostImagePath(post.id, post.image)}
            alt={post.title}
            style={{ width: "100%", height: "100%" }}
            onError={(e) => handleImageError(e, post.id)}
          />
        </div>
        <div style={{ flex: 1, position: "relative", paddingRight: 120 }}>
          <Link
            to={`/post/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Title
              level={5}
              style={{
                margin: 0,
                marginBottom: 8,
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "1.4",
                color: "#262626",
              }}
            >
              {post.title}
            </Title>
          </Link>

          <Paragraph
            style={{
              margin: 0,
              color: "rgba(0, 0, 0, 0.65)",
              fontSize: 14,
              lineHeight: "1.5",
              marginBottom: 10,
            }}
            ellipsis={{ rows: 2 }}
          >
            {post.body}
          </Paragraph>

          <Link to={`/post/${post.id}`}>
            <Button
              type="link"
              size="small"
              style={{
                padding: 0,
                height: "auto",
                fontSize: 14,
                color: "#397BF6",
              }}
            >
              Read more
            </Button>
          </Link>

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              textAlign: "right",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "rgba(0, 0, 0, 0.45)",
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              {post.createdAt ? formatDate(post.createdAt) : ""}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Header component
const BlogHeader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          backgroundColor: "#397BF6",
          borderRadius: 8,
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FileTextOutlined style={{ fontSize: 20, color: "white" }} />
      </div>
      <div>
        <Title level={5} style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>
          All Blog posts
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Qatar Development Bank
        </Text>
      </div>
    </div>
    <Button
      icon={<FilterOutlined />}
      style={{
        display: "flex",
        alignItems: "center",
        height: 32,
        fontWeight: "normal",
      }}
    >
      Filter/Sort by
    </Button>
  </div>
);

// Tab Navigation component
const TabNavigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: any;
  onTabChange: any;
}) => {
  const items = [
    {
      key: "all",
      label: <span style={{ fontSize: 12, fontWeight: 500 }}>ALL POSTS</span>,
    },
    {
      key: "latest",
      label: (
        <span style={{ fontSize: 12, fontWeight: 500 }}>LATEST POSTS</span>
      ),
    },
    {
      key: "archived",
      label: <span style={{ fontSize: 12, fontWeight: 500 }}>ARCHIVED</span>,
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      onChange={onTabChange}
      tabBarStyle={{ margin: 0, borderBottom: "1px solid #f0f0f0" }}
      items={items}
    />
  );
};

export const Blogs = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  function formatDate(dateString: any) {
    try {
      const date = new Date(dateString);

      const month = date
        .toLocaleString("en-US", { month: "long" })
        .toUpperCase();
      const day = date.getDate();
      const year = date.getFullYear();

      return `${month} ${day}, ${year}`;
    } catch (e) {
      return dateString;
    }
  }

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        setError(null);

        const userId = user?.id || 1;
        const postsData = await api.getUserPosts(userId);
        setPosts(postsData);
      } catch (error) {
        console.log("Failed to fetch posts:", error);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, [user]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  let filteredPosts = posts;

  if (activeTab === "latest") {
    filteredPosts = [...posts]
      .sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
      .slice(0, 5);
  }

  if (activeTab === "archived") {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    filteredPosts = posts.filter(
      (post) => new Date(post.createdAt) < thirtyDaysAgo
    );
  }

  const postsPerPage = 5;
  const totalPosts = filteredPosts.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </div>
    );
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  if (posts.length === 0) {
    return (
      <Empty
        description="No blog posts found"
        style={{ margin: "100px auto" }}
      />
    );
  }

  return (
    <div>
      <BlogHeader />

      <Card
        styles={{ body: { padding: "0 24px" } }}
        style={{
          marginBottom: 24,
          borderRadius: 8,
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
        }}
      >
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div>
          {currentPosts.map((post) => (
            <BlogPostItem key={post.id} post={post} formatDate={formatDate} />
          ))}
        </div>

        <SimplePagination
          currentPage={currentPage}
          totalItems={totalPosts}
          pageSize={postsPerPage}
          onPageChange={handlePageChange}
        />
      </Card>
    </div>
  );
};
