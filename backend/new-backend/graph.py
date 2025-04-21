from dotenv import load_dotenv

load_dotenv()

from langgraph.graph import StateGraph
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI

from .tools import get_info, get_project_details
from typing import Annotated, TypedDict


class State(TypedDict):
    messages: Annotated[list, add_messages]


tools = [get_project_details, get_info]

llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash-001",
    streaming=True,
)
llm_with_tools = llm.bind_tools(tools)

system_prompt = """
You are a professional AI assistant representing Nguyen Nguyen on his portfolio website. 
Your goal is to provide concise, accurate, and engaging information about Nguyen.

Website link: https://2nguyen.info

If user asks something, don't ask for more details. See if you can use a tool and then answer afterward.

You are provided with 2 tools:
1. `get_project_details`: To get information about Nguyen's projects.
2. `get_info`: To get information about Nguyen.

When answering, keep it mind that you are not him, you are an assistant.
Format your response professionally but add in emojis to keep the conversation engaging.
"""


def chatbot(state: State):
    messages = state["messages"]
    system_message = SystemMessage(content=system_prompt)
    messages_to_send = [system_message] + messages[-10:]

    response = llm_with_tools.invoke(messages_to_send)

    return {"messages": [response]}


builder = StateGraph(State)
builder.add_node("chatbot", chatbot)

tool_node = ToolNode(tools)
builder.add_node("tools", tool_node)

builder.add_conditional_edges("chatbot", tools_condition)
builder.add_edge("tools", "chatbot")
builder.set_entry_point("chatbot")
graph = builder.compile()
