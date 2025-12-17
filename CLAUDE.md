# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Nguyen Nguyen, live at [2nguyen.info](https://2nguyen.info). The project consists of a Next.js frontend showcasing projects, skills, and experience, with an AI-powered chatbot feature backed by LangGraph.

## Repository Structure

```
portfolio/
├── frontend/          # Next.js application (main portfolio site)
│   ├── src/
│   │   ├── app/           # Next.js 14 App Router pages
│   │   ├── components/    # React components
│   │   └── lib/           # Utility functions
│   └── package.json
└── backend/           # Python chatbot backend (incomplete/reference only)
    ├── new-backend/   # LangGraph-based chatbot implementation
    └── *.py           # Legacy backend files
```

**Important**: The `/backend` folder is NOT fully configured for standalone deployment. The live site uses a separate, combined backend service hosted elsewhere. The backend code here is for reference or local development only.

## Development Commands

### Frontend

Navigate to `frontend/` directory first:

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Backend (Reference/Local Development)

The backend requires Python and uses LangGraph for the chatbot. The newer implementation is in `backend/new-backend/`.

```bash
# Navigate to backend
cd backend

# Create virtual environment (first time)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Unix/MacOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the old FastAPI server (if using legacy backend)
python main.py
# Or with uvicorn directly:
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

For the LangGraph backend in `new-backend/`, you would typically deploy it as a LangGraph service (deployment setup not included in this repo).

## Architecture

### Frontend (Next.js 14)

- **Framework**: Next.js 14 with App Router (TypeScript)
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth transitions
- **UI Components**: Custom components in `src/components/ui/` (buttons, cards, badges, tooltips, etc.)
- **State Management**: React hooks (no global state library for main site)
- **Font**: Recursive font from Google Fonts

#### Key Frontend Components

- **Layout** (`src/app/layout.tsx`): Root layout with Navbar, ThemeProvider, and ChatPopup globally available
- **Chatbot** (`src/components/Chatbot.tsx` & `src/components/chat/*`): AI assistant interface that communicates with backend via streaming API
- **Project Showcase** (`src/components/Projects.tsx`, `src/app/projects/`): Dynamic project pages and listings
- **Skills Display** (`src/app/page.tsx`): Categorized skills with tabs (Languages, Frontend, Backend, etc.)
- **Markdown Rendering** (`src/components/markdown/*`): Custom markdown components with syntax highlighting for chat messages

#### Frontend Data Flow

- Skills data is defined in `src/app/_global/variables.ts` as `SKILLS_DATA` array
- Skill categories are grouped and mapped using `SKILL_CATEGORIES`
- Projects are likely fetched or defined statically (check `src/app/projects/` for details)
- Chatbot uses axios to POST messages to backend API and handles streaming responses

### Backend (Python - LangGraph)

The newer backend (`backend/new-backend/`) uses:

- **Framework**: LangGraph for building the conversational AI agent
- **LLM**: Google Gemini (gemini-2.0-flash-001) via `langchain_google_genai`
- **Agent Architecture**: StateGraph with:
  - `chatbot` node: Main LLM interaction with tools
  - `tools` node: Tool execution (get_project_details, get_info)
  - Conditional edges for tool calling
- **Tools** (`tools.py`): Custom functions to retrieve information about Nguyen's projects and personal info from JSON files (`off_info.json`, `off_project.json`)
- **System Prompt**: Defines the AI assistant personality as professional, concise, and emoji-friendly

The legacy backend (`backend/main.py`) is a FastAPI application with CORS middleware and custom routes (`routes.py`), but the chatbot has transitioned to LangGraph.

#### Backend Environment Variables

The backend requires:
- API keys for LLM providers (OpenAI, Google Gemini, etc.)
- Potentially Pinecone credentials (if using vector search)
- Database connection strings (if applicable)
- CORS allowed origins

### Chatbot Integration

1. Frontend sends user message to backend API endpoint
2. Backend processes message through LangGraph StateGraph
3. LLM decides whether to call tools (get_project_details or get_info)
4. If tools are called, results are added to conversation context
5. LLM generates final response with emojis
6. Response is streamed back to frontend
7. Frontend renders markdown response with syntax highlighting

## Environment Variables

### Frontend

Create `.env` in `frontend/`:

```plaintext
# Optional: only needed to connect chatbot to backend
CHAT_SECRET=your_chat_secret_here
NEXT_PUBLIC_API_BASE_URL=http://your_langgraph_server_url_here
```

The main portfolio site runs without these variables. They're only required for chatbot functionality.

### Backend

Create `.env` in `backend/`:

```plaintext
# Required for LangGraph backend
GOOGLE_API_KEY=your_google_gemini_api_key
OPENAI_API_KEY=your_openai_api_key (if using OpenAI)
PINECONE_API_KEY=your_pinecone_key (if using vector DB)
ALLOWED_ORIGINS=https://2nguyen.info,http://localhost:3000
LOG_LEVEL=INFO
PORT=8000
```

## Key Implementation Patterns

### Adding New Skills

Edit `frontend/src/app/_global/variables.ts`:

1. Add skill to `SKILLS_DATA` array with appropriate `type`
2. Ensure the `type` matches one of the categories in `SKILL_CATEGORIES`
3. The skill will automatically appear in the correct tab on the homepage

### Modifying Chatbot Behavior

1. **System Prompt**: Edit `backend/new-backend/graph.py` → `system_prompt` variable
2. **Tools**: Add new tool functions in `backend/new-backend/tools.py` and register them in the `tools` list
3. **LLM Model**: Change `model` parameter in `ChatGoogleGenerativeAI` initialization
4. **Streaming**: LangGraph handles streaming automatically; frontend expects streaming response

### Adding New Projects

Projects appear to be managed through the projects directory. Check `frontend/src/app/projects/` for the data source and update accordingly.

## Testing

No formal test suite is included in the repository. Manual testing recommended:

- Frontend: Run `npm run dev` and navigate to http://localhost:3000
- Chatbot: Test by opening chat popup and sending messages (requires backend connection)
- Build: Run `npm run build` to ensure production build succeeds

## Deployment Notes

- **Frontend**: Deployed on Vercel (as indicated by `vercel` in dependencies)
- **Backend**: The live backend is NOT the code in this repo - it's a combined service elsewhere
- **Domain**: 2nguyen.info

When making changes, be aware that the backend in this repository may not reflect the production chatbot implementation.
