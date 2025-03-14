from langchain_openai import ChatOpenAI
from langchain.agents import initialize_agent
from langchain.schema import SystemMessage
from langchain.callbacks import AsyncIteratorCallbackHandler
from dotenv import load_dotenv

from tools import tools
from custom_memory import SlidingChatMemory

load_dotenv()

def create_agent():
    # Initialize the streaming LLM with callback handler
    callback_handler = AsyncIteratorCallbackHandler()
    model = ChatOpenAI(
        temperature=0,
        streaming=True,
        callbacks=[callback_handler],
        model="gpt-4o-mini"
    )

    # Define the system prompt
    system_prompt = SystemMessage(
        content="""You are a helpful AI Asssitant. Your job is to provide information and answer questions relating to Nguyen Nguyen.
        He is a full-stack developer and currently looking for new opportunities. Do your best to assist users with their queries about him.
        
        You have access to the following tools:
        1. GetInfo: Use this tool to retrieve information about contact details, about me, projects, and skills about Nguyen.
        2. GetProjectDetails: Use this tool to retrieve details about specific projects.
        
        Follow these guidelines:
        - Always be polite and professional.
        - If the user asks about shipping, refund, or product FAQs, use the `GetFAQContent` tool.
        - If the user asks for information about contact details, about me, projects, or skills, use the `GetInfo` tool.
        - If the user asks for details about specific projects, use the `GetProjectDetails` tool.
        - If the user's query requires searching for documents, use the `SearchDocuments` tool.
        - If you are unsure how to respond, ask the user for clarification.
        - Keep your responses concise and informative."""
    )

    # Initialize memory for chat history
    memory = SlidingChatMemory(max_messages=10, max_words=600)

    # Initialize the agent with streaming support
    agent = initialize_agent(
        tools=tools,
        llm=model,
        agent="chat-conversational-react-description",
        verbose=True,
        max_iterations=5,
        early_stopping_method="generate",
        memory=memory,
        system_message=system_prompt,
        return_intermediate_steps=True  # Enable intermediate steps for streaming
    )

    return agent, callback_handler  # Return both agent and callback handler