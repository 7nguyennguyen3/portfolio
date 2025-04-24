# Nguyen Nguyen's Portfolio

> The source code for my personal portfolio website, live at [2nguyen.info](https://2nguyen.info).

[![Live Site](https://img.shields.io/badge/Live%20Site-2nguyen.info-blue)](https://2nguyen.info)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-lightgrey)](https://github.com/7nguyennguyen3/portfolio)

---

**Last Updated:** April 23, 2025

## 🌟 About This Project

This repository contains the code for my personal portfolio website. It was created primarily to demonstrate my past projects and provide a central place for recruiters, collaborators, and anyone interested to view my work and learn more about my skills.

## 🏗️ Project Structure

The project's frontend code (main portfolio site logic) is contained within this repository (likely in the root or a `/frontend` directory). This includes UI components, project showcases, and general site navigation.

The only feature requiring separate backend interaction is the **chatbot**.

**Important Note on Backend:** The `/backend` folder included in this repository is **not fully configured for standalone deployment and may be incomplete.** For cost-saving purposes, the live version of the chatbot running on [2nguyen.info](https://2nguyen.info) uses a separate, combined backend service (hosted elsewhere and not included here) that merges logic from multiple projects.

## 🚀 Getting Started (Frontend)

You can run the main portfolio website locally without needing the backend/chatbot functionality.

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Running Locally

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/7nguyennguyen3/portfolio
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd portfolio/frontend
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) (or the port specified) in your browser.

## 🔑 Environment Variables

### Frontend

The main portfolio website **does not require any environment variables** to run.

### Backend (Chatbot Functionality)

To **connect the frontend to a chatbot backend**, you need to set up the following environment variables. Create a `.env` file in the root of your frontend project directory and add:

```plaintext
# A secret key, if required by the backend you build/configure
CHAT_SECRET=your_chat_secret_here

# The URL of your running LangGraph backend server
NEXT_PUBLIC_API_BASE_URL=http://your_langgraph_server_url_here
```
