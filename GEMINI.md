# Nguyen Nguyen's Portfolio Project Context

## Project Overview
This repository contains the source code for the personal portfolio website of Nguyen Nguyen ([2nguyen.info](https://2nguyen.info)). It is a full-stack application featuring a polished **Next.js frontend** and an **AI-powered chatbot backend**.

**Important:** The `backend/` directory in this repository is primarily for reference or local development. The live site's chatbot is powered by a separate, centralized backend service.

## Architecture

### Frontend (`frontend/`)
-   **Framework:** Next.js 14 (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS, Framer Motion (for animations), `cn` utility (clsx + tailwind-merge)
-   **UI Components:** Custom components built with Radix UI primitives (`src/components/ui`), Lucide React icons.
-   **Key Features:**
    -   **Chatbot:** AI assistant (`src/components/Chatbot.tsx`) that streams responses.
    -   **Project Showcase:** Dynamic rendering of projects (`src/components/Projects.tsx`).
    -   **Markdown Rendering:** Custom markdown support for chat messages (`src/components/markdown/`).

### Backend (`backend/`)
-   **Language:** Python
-   **New Implementation (`backend/new-backend/`):**
    -   **Framework:** LangGraph
    -   **LLM:** Google Gemini (via `langchain_google_genai`)
    -   **Logic:** StateGraph with tools to query project info (`off_info.json`, `off_project.json`).
-   **Legacy Implementation (`backend/main.py`):**
    -   **Framework:** FastAPI
    -   **Purpose:** Previous REST API version.

## Development Workflow

### Frontend Setup
1.  Navigate to the frontend directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Run development server: `npm run dev` (starts on `http://localhost:3000`)
4.  Build for production: `npm run build`

### Backend Setup (Local/Reference)
1.  Navigate to the backend directory: `cd backend`
2.  Create and activate a virtual environment:
    -   Windows: `python -m venv venv` then `venv\Scripts\activate`
    -   Unix/Mac: `python -m venv venv` then `source venv/bin/activate`
3.  Install dependencies: `pip install -r requirements.txt`
4.  Run legacy server (if needed): `python main.py`

## Key Files & Directories
-   `frontend/src/app/`: Next.js App Router pages.
-   `frontend/src/components/`: Reusable React components.
-   `frontend/src/app/_global/variables.ts`: Centralized data file for Skills.
-   `backend/new-backend/graph.py`: LangGraph agent definition and system prompt.
-   `backend/new-backend/tools.py`: Python functions exposed to the LLM.

## Environment Variables
-   **Frontend:** `NEXT_PUBLIC_API_BASE_URL` (for chatbot API), `CHAT_SECRET` (optional).
-   **Backend:** `GOOGLE_API_KEY`, `OPENAI_API_KEY` (if using OpenAI), `ALLOWED_ORIGINS`.

## Conventions
-   **Styling:** Use Tailwind CSS utility classes. Avoid inline styles where possible.
-   **Components:** Prefer functional components with TypeScript interfaces for props.
-   **State:** Use React hooks (`useState`, `useEffect`) for local state.
-   **Code Quality:** Run `npm run lint` to check for linting errors.
