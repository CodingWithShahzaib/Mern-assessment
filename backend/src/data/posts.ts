export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  image: string;
  createdAt: string;
}

export const posts: Record<number, Post[]> = {
  1: [
    {
      id: 1,
      userId: 1,
      title: "Getting Started with TypeScript",
      body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.\n\nIn this blog post, we'll explore the basics of TypeScript and how it can improve your development workflow. TypeScript's static typing helps catch errors early during development rather than at runtime, making your code more reliable and easier to maintain.",
      image: "/assets/images/post-1.jpg",
      createdAt: "2023-09-15T14:30:00Z"
    },
    {
      id: 2,
      userId: 1,
      title: "React Best Practices",
      body: "React is a popular JavaScript library for building user interfaces. Here are some best practices to follow when developing React applications.\n\nUse functional components with hooks instead of class components when possible. Implement proper state management with context or a state management library for larger applications. Break your UI into small, reusable components that follow the single responsibility principle.",
      image: "/assets/images/post-2.jpg",
      createdAt: "2023-10-02T10:15:00Z"
    },
    {
      id: 3,
      userId: 1,
      title: "Introduction to Node.js",
      body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.\n\nIn this post, we'll cover the basics of Node.js, including how to set up a simple server, work with the file system, and use npm to manage dependencies. Node.js's event-driven, non-blocking I/O model makes it lightweight and efficient, perfect for data-intensive real-time applications.",
      image: "/assets/images/post-3.jpg",
      createdAt: "2023-10-20T16:45:00Z"
    }
  ],
  2: [
    {
      id: 4,
      userId: 2,
      title: "CSS Grid vs Flexbox",
      body: "CSS Grid and Flexbox are two powerful layout systems in CSS. Let's compare them and see when to use each one.\n\nFlexbox is designed for one-dimensional layouts (either rows OR columns), making it perfect for navigation bars, card layouts, or centering elements. CSS Grid is designed for two-dimensional layouts (rows AND columns), ideal for overall page layouts and complex grid systems. In modern web development, you'll often use both together - Grid for the main layout and Flexbox for component alignment.",
      image: "/assets/images/post-4.jpg",
      createdAt: "2023-09-10T09:20:00Z"
    },
    {
      id: 5,
      userId: 2,
      title: "Understanding RESTful APIs",
      body: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.\n\nThis blog post explains the principles of REST, including statelessness, client-server architecture, and the use of standard HTTP methods. We'll also cover best practices for designing RESTful APIs, such as using nouns instead of verbs in endpoints, properly handling errors, and implementing versioning.",
      image: "/assets/images/post-5.jpg",
      createdAt: "2023-09-28T11:30:00Z"
    },
    {
      id: 16,
      userId: 2,
      title: "Modern JavaScript Features You Should Know",
      body: "JavaScript has evolved significantly in recent years. This post covers some of the most useful modern features that every developer should know.\n\nWe'll explore arrow functions, destructuring, spread/rest operators, template literals, async/await, and other ES6+ features that make your code more concise and readable. These modern JavaScript features can dramatically improve your productivity and code quality when used properly.",
      image: "/assets/images/post-16.jpg",
      createdAt: "2023-11-05T13:40:00Z"
    }
  ],
  3: [
    {
      id: 6,
      userId: 3,
      title: "Docker for Beginners",
      body: "Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package up an application with all the parts it needs.\n\nThis beginner's guide to Docker covers the basic concepts, how to create and use Docker images, and how to manage containers. You'll learn how Docker simplifies the development process by ensuring consistency across different environments and making deployment more straightforward.",
      image: "/assets/images/post-6.jpg",
      createdAt: "2023-09-05T15:25:00Z"
    },
    {
      id: 17,
      userId: 3,
      title: "Optimizing React Performance",
      body: "React applications can sometimes suffer from performance issues. Here are some techniques to optimize your React apps.\n\nWe'll cover memoization with React.memo, useMemo, and useCallback, implementing virtualization for long lists, code splitting with React.lazy, and other performance optimization strategies. These techniques can significantly improve your application's responsiveness and user experience, especially for complex or data-heavy applications.",
      image: "/assets/images/post-17.jpg",
      createdAt: "2023-11-12T10:10:00Z"
    },
    {
      id: 18,
      userId: 3,
      title: "Functional Programming in JavaScript",
      body: "Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions. JavaScript supports many functional programming concepts.\n\nThis post introduces core functional programming concepts like pure functions, immutability, higher-order functions, and function composition. We'll show practical examples of how to apply these concepts in JavaScript to write more predictable, testable, and maintainable code.",
      image: "/assets/images/post-18.jpg",
      createdAt: "2023-11-20T14:15:00Z"
    }
  ],
  4: [
    {
      id: 7,
      userId: 4,
      title: "Getting Started with AWS",
      body: "Amazon Web Services (AWS) offers a broad set of global cloud-based products. This guide will help you get started with AWS.\n\nWe'll walk through setting up your AWS account, understanding the core services like EC2, S3, and RDS, and implementing best practices for security and cost management. Whether you're looking to host a simple website or build a complex, scalable application, AWS provides the infrastructure you need.",
      image: "/assets/images/post-7.jpg",
      createdAt: "2023-08-28T12:50:00Z"
    },
    {
      id: 19,
      userId: 4,
      title: "Responsive Web Design Principles",
      body: "Responsive web design ensures that your website looks good on all devices. Let's explore the core principles of responsive design.\n\nThis post covers fluid layouts with percentage-based widths, flexible images, media queries for different screen sizes, and the mobile-first approach to design. We'll also discuss modern CSS techniques like Flexbox and Grid that make responsive layouts easier to implement.",
      image: "/assets/images/post-19.jpg",
      createdAt: "2023-11-28T09:30:00Z"
    },
    {
      id: 20,
      userId: 4,
      title: "Introduction to GraphQL",
      body: "GraphQL is a query language for APIs that gives clients the power to ask for exactly what they need. Let's learn the basics of GraphQL.\n\nIn this post, we'll explore how GraphQL differs from REST, how to define schemas with types and resolvers, and how to execute queries and mutations. We'll also discuss the advantages of GraphQL, such as reduced over-fetching of data and the ability to fetch related data in a single request.",
      image: "/assets/images/post-20.jpg",
      createdAt: "2023-12-05T16:20:00Z"
    }
  ],
  5: [
    {
      id: 8,
      userId: 5,
      title: "Cybersecurity Best Practices",
      body: "Cybersecurity is more important than ever in today's digital world. Here are some best practices to keep your applications secure.\n\nThis comprehensive guide covers input validation, proper authentication and authorization, secure data storage, protection against common attacks like XSS and CSRF, and the importance of keeping dependencies updated. We'll also discuss the security mindset and how to integrate security throughout the development lifecycle.",
      image: "/assets/images/post-8.jpg",
      createdAt: "2023-08-15T08:40:00Z"
    },
    {
      id: 9,
      userId: 5,
      title: "Machine Learning Fundamentals",
      body: "Machine learning is a subfield of artificial intelligence that gives computers the ability to learn without being explicitly programmed. Let's explore the fundamentals.\n\nThis introduction covers the different types of machine learning (supervised, unsupervised, and reinforcement learning), common algorithms, the process of training and evaluating models, and tools and libraries you can use to get started. We'll demystify the field and show how ML is becoming accessible to more developers.",
      image: "/assets/images/post-9.jpg",
      createdAt: "2023-09-02T13:15:00Z"
    },
    {
      id: 21,
      userId: 5,
      title: "Progressive Web Apps (PWAs)",
      body: "Progressive Web Apps combine the best of web and mobile apps. They are websites that progressively enhance to function like installed native apps.\n\nThis post explains the core features of PWAs, including service workers for offline capabilities, web app manifests for home screen installation, push notifications, and strategies for achieving app-like performance. We'll walk through the steps to convert an existing web application into a PWA.",
      image: "/assets/images/post-21.jpg",
      createdAt: "2023-12-12T11:45:00Z"
    }
  ],
  6: [
    {
      id: 10,
      userId: 6,
      title: "Introduction to Microservices",
      body: "Microservices architecture is an approach to developing a single application as a suite of small services. Let's explore the basics of microservices.\n\nThis post covers the principles behind microservices, their advantages and challenges compared to monolithic architectures, strategies for service communication, and considerations for deployment and monitoring. We'll also discuss when microservices make sense and when they might add unnecessary complexity.",
      image: "/assets/images/post-10.jpg",
      createdAt: "2023-07-25T10:05:00Z"
    },
    {
      id: 22,
      userId: 6,
      title: "TypeScript Advanced Types",
      body: "TypeScript's type system goes beyond the basics. This post explores advanced typing features that can make your code more robust.\n\nWe'll cover union and intersection types, generics, utility types, conditional types, mapped types, and type guards. These advanced features allow you to create more precise type definitions, improving code readability and catching more potential errors at compile time.",
      image: "/assets/images/post-22.jpg",
      createdAt: "2023-12-18T14:30:00Z"
    },
    {
      id: 23,
      userId: 6,
      title: "Web Accessibility (A11y) Essentials",
      body: "Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. Here's what you need to know.\n\nThis comprehensive guide covers the WCAG guidelines, semantic HTML, keyboard navigation, ARIA attributes, color contrast requirements, and testing tools for accessibility. Making your applications accessible not only helps users with disabilities but often improves the experience for all users.",
      image: "/assets/images/post-23.jpg",
      createdAt: "2023-12-28T09:25:00Z"
    }
  ],
  7: [
    {
      id: 11,
      userId: 7,
      title: "Testing in JavaScript",
      body: "Testing is a crucial part of software development. This post covers different testing approaches for JavaScript applications.\n\nWe'll explore unit testing with Jest, component testing with React Testing Library, end-to-end testing with Cypress, and concepts like test-driven development and code coverage. Good testing practices lead to more reliable code, fewer bugs in production, and more confident refactoring.",
      image: "/assets/images/post-11.jpg",
      createdAt: "2023-07-15T11:20:00Z"
    },
    {
      id: 24,
      userId: 7,
      title: "State Management in React",
      body: "State management is a critical aspect of React applications. Let's explore different state management options and when to use each one.\n\nThis post compares useState and useReducer hooks for local state, Context API for shared state, and external libraries like Redux, MobX, and Zustand for more complex state management needs. We'll provide guidelines for choosing the right approach based on your application's size and requirements.",
      image: "/assets/images/post-24.jpg",
      createdAt: "2024-01-05T13:10:00Z"
    },
    {
      id: 25,
      userId: 7,
      title: "Serverless Architecture",
      body: "Serverless computing allows you to build and run applications without thinking about servers. Let's dive into serverless architecture.\n\nThis post explains the concept of Functions as a Service (FaaS), benefits like automatic scaling and reduced operational costs, challenges like cold starts, and popular serverless platforms such as AWS Lambda, Azure Functions, and Google Cloud Functions. We'll also cover serverless frameworks that simplify development and deployment.",
      image: "/assets/images/post-25.jpg",
      createdAt: "2024-01-15T15:45:00Z"
    }
  ],
  8: [
    {
      id: 12,
      userId: 8,
      title: "Git and GitHub for Beginners",
      body: "Git is a distributed version control system, and GitHub is a platform for hosting and collaborating on Git repositories. This guide is perfect for beginners.\n\nWe'll cover basic Git commands, creating and cloning repositories, branching and merging, resolving conflicts, and collaborating through pull requests. Whether you're working solo or as part of a team, these skills are essential for modern software development.",
      image: "/assets/images/post-12.jpg",
      createdAt: "2023-07-05T09:15:00Z"
    },
    {
      id: 26,
      userId: 8,
      title: "CSS Architecture for Large Projects",
      body: "As CSS grows in a project, it can become difficult to maintain. This post covers strategies for organizing CSS in large applications.\n\nWe'll explore methodologies like BEM, SMACSS, and ITCSS, the use of CSS preprocessors like Sass, CSS Modules for component-scoped styles, and utility-first frameworks like Tailwind CSS. A good CSS architecture prevents specificity conflicts, promotes reusability, and makes styles easier to reason about.",
      image: "/assets/images/post-26.jpg",
      createdAt: "2024-01-22T10:30:00Z"
    },
    {
      id: 27,
      userId: 8,
      title: "Web Performance Optimization",
      body: "Performance is a crucial aspect of user experience. This guide covers techniques to optimize your web application's performance.\n\nWe'll discuss critical rendering path optimization, lazy loading of assets, code splitting, image optimization, caching strategies, and measuring performance with tools like Lighthouse. These optimizations can significantly improve loading times, interactivity, and overall user satisfaction.",
      image: "/assets/images/post-27.jpg",
      createdAt: "2024-01-30T14:20:00Z"
    }
  ],
  9: [
    {
      id: 13,
      userId: 9,
      title: "Continuous Integration and Deployment",
      body: "CI/CD practices automate the building, testing, and deployment of applications. Let's explore how to implement CI/CD in your projects.\n\nThis comprehensive guide covers setting up CI/CD pipelines with GitHub Actions, CircleCI, or Jenkins, automating tests and builds, implementing deployment strategies like blue-green deployments, and monitoring your applications in production. These practices help teams deliver changes more frequently and reliably.",
      image: "/assets/images/post-13.jpg",
      createdAt: "2023-06-20T14:10:00Z"
    },
    {
      id: 28,
      userId: 9,
      title: "Building APIs with Node.js and Express",
      body: "Node.js and Express provide a powerful combination for building RESTful APIs. This post walks through creating a complete API.\n\nWe'll cover setting up routes and middleware, connecting to databases, implementing authentication and authorization, handling errors, and testing your API. By the end, you'll have a solid foundation for building robust, scalable APIs for your web and mobile applications.",
      image: "/assets/images/post-28.jpg",
      createdAt: "2024-02-05T11:15:00Z"
    },
    {
      id: 29,
      userId: 9,
      title: "Introduction to WebSockets",
      body: "WebSockets enable real-time, bidirectional communication between clients and servers. Let's explore how to use WebSockets in your applications.\n\nThis tutorial covers the WebSocket protocol, implementing WebSockets with libraries like Socket.IO, handling connection management, broadcasting messages, and securing WebSocket connections. Real-time features like chat, notifications, and live updates can significantly enhance user engagement.",
      image: "/assets/images/post-29.jpg",
      createdAt: "2024-02-12T16:30:00Z"
    }
  ],
  10: [
    {
      id: 14,
      userId: 10,
      title: "MongoDB for Beginners",
      body: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. This guide will help you get started with MongoDB.\n\nWe'll cover basic CRUD operations, document schema design, indexing for performance, aggregation framework for complex queries, and integrating MongoDB with Node.js applications. NoSQL databases like MongoDB offer flexibility and scalability that make them suitable for many modern applications.",
      image: "/assets/images/post-14.jpg",
      createdAt: "2023-06-10T13:30:00Z"
    },
    {
      id: 15,
      userId: 10,
      title: "Frontend Build Tools",
      body: "Modern frontend development relies on various build tools. This post compares popular build tools and how to use them effectively.\n\nWe'll explore module bundlers like Webpack, Rollup, and Parcel, task runners, transpilers like Babel, minification, and newer build tools like Vite and Snowpack. Understanding these tools helps you optimize your development workflow and build process for production.",
      image: "/assets/images/post-15.jpg",
      createdAt: "2023-06-28T11:45:00Z"
    },
    {
      id: 30,
      userId: 10,
      title: "Authentication Strategies for Web Applications",
      body: "Authentication is a critical aspect of most web applications. This post covers different authentication strategies and their implementation.\n\nWe'll discuss session-based authentication, token-based approaches (JWT), OAuth 2.0 for third-party authentication, multi-factor authentication, and security considerations for each approach. Choosing the right authentication strategy depends on your application's requirements and security needs.",
      image: "/assets/images/post-30.jpg",
      createdAt: "2024-02-20T10:00:00Z"
    }
  ]
}; 