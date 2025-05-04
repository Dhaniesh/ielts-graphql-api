# GraphQL Article Carousel Demo

This mock project demonstrates how GraphQL can be used as a more efficient and flexible alternative to traditional REST APIs. It showcases the performance benefits of GraphQL by allowing clients to fetch only the data they need—improving response time, reducing payload size, and increasing maintainability.

## ✨ Purpose

To advocate for and demonstrate the advantages of GraphQL to stakeholders within the organization. The key use case is an article carousel UI component that only needs a subset of article data: `title`, `urlSlug`, `imageUrl`, and a short summary.

## 🚀 Technologies

- Node.js
- Apollo Server (GraphQL)
- Express
- JavaScript

## 🧠 Key Concepts Demonstrated

- **Selective Data Fetching:** Fetch only required fields (e.g., `title`, `slug`, `image`, `summary`) instead of full payloads.
- **Nested Types:** Example of how GraphQL handles nested data structures (e.g., `description.shortDescription`).
- **Query Efficiency:** Comparison with REST APIs showing significant reduction in JSON response size.
- **Scalability:** Flexible schema design supporting future extension without breaking existing clients.

- Graphql response (13.1KB):
![Graphql response](https://github.com/Dhaniesh/ielts-graphql-api/blob/main/graphql-response.png)

- Rest API response (469B):
![Rest response](https://github.com/Dhaniesh/ielts-graphql-api/blob/main/rest-api-response.png)

## 📦 Setup

1. Clone the repository:
   - git clone https://github.com/your-org/graphql-carousel-demo.git
   - cd graphql-carousel-demo

2. Install dependencies
    - npm install

3. Start the server
    - node index.js
