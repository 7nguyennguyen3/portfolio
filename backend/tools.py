import json
from langchain.tools import Tool, tool

@tool
def get_info(arguments: str):
    """
    Returns information based on the provided arguments.
    The input should be a comma-separated string of arguments.
    Supported arguments: 'contact', 'about', 'projects', 'skills'.
    """
    try:
        # Split the input string into a list of arguments
        args_list = [arg.strip() for arg in arguments.split(",")]

        # Load the JSON file
        with open("off_info.json", "r", encoding="utf-8") as file:
            data = json.load(file)

        result = []

        # Process each argument
        for arg in args_list:
            if arg == "contact":
                contact_info = data["contact"]["content"]
                result.append(
                    f"Contact Information:\n"
                    f"Email: {contact_info['email']}\n"
                    f"Phone: {contact_info['phone']}\n"
                    f"Note: {contact_info['note']}\n"
                    f"Chatbot Note: {contact_info['chatbot_note']}"
                )
            elif arg == "about":
                about_info = data["about"]["content"]
                result.append(
                    f"About Me:\n"
                    f"Name: {about_info['name']}\n"
                    f"Title: {about_info['title']}\n"
                    f"Introduction: {about_info['introduction']}\n"
                    f"Special Note: {about_info['note']}\n"
                    f"Learning Journey: {about_info['learning_journey']}\n"
                    f"Coding Philosophy: {about_info['coding_philosophy']}\n"
                    f"Current Endeavors: {about_info['current_endeavors']}\n"
                    f"Professional Goals: {about_info['professional_goals']}\n"
                    f"Beyond Technology:\n"
                    f"- Learning to Cook: {about_info['beyond_technology']['content']['learning_to_cook']}\n"
                    f"- Walking in Nature: {about_info['beyond_technology']['content']['walking_in_nature']}"
                )
            elif arg == "projects":
                projects_info = data["projects"]["content"]
                projects_list = []
                for project in projects_info:
                    projects_list.append(
                        f"Title: {project['title']}\n"
                        f"Description: {project['description']}\n"
                    )
                result.append(
                    f"Projects:\n" + "\n".join(projects_list)
                )
            elif arg == "skills":
                skills_info = data["skills"]["content"]
                result.append(
                    f"Skills:\n"
                    f"Languages: {', '.join(skills_info['languages'])}\n"
                    f"Front-End: {', '.join(skills_info['front_end'])}\n"
                    f"Back-End: {', '.join(skills_info['back_end'])}\n"
                    f"Databases: {', '.join(skills_info['databases'])}\n"
                    f"Tools and Libraries: {', '.join(skills_info['tools_and_libraries'])}\n"
                    f"Other: {', '.join(skills_info['other'])}"
                )
            elif arg == "summary":
                summary_info = {
                    "about": "Nguyen Nguyen is a passionate full-stack developer with a love for technology, creativity, and learning. With a 'brute force' approach to coding, he enjoys tackling challenges and expanding his skills. Beyond tech, he finds joy in cooking and nature walks.",
                    "skills": "Proficient in TypeScript, JavaScript, and Python, Nguyen specializes in full-stack development using React, Next.js, FastAPI, and PostgreSQL. He is experienced with tools like Docker, Kubernetes, and AI frameworks such as LangChain.",
                    "projects": "Nguyen has developed a range of projects, including Versa AI for PDF-based conversations, an AI-powered e-commerce store, a microservices marketplace, and Finance Kaiju, a personal finance tracker.",
                    "contact": "Nguyen is open to connections via email or text. He prefers texting over calls from unknown numbers and has a chatbot available for inquiries."
                }
                result.append(
                    f"Summary:\n"
                    f"About: {summary_info['about']}\n"
                    f"Skills: {summary_info['skills']}\n"
                    f"Projects: {summary_info['projects']}\n"
                    f"Contact: {summary_info['contact']}"
                )
            else:
                result.append(f"❌ Unsupported argument: {arg}")

        return "\n\n".join(result)

    except FileNotFoundError:
        return "❌ Error: The data.json file was not found."
    except json.JSONDecodeError:
        return "❌ Error: The data.json file is malformed."
    except KeyError as e:
        return f"❌ Error: Missing key in JSON data - {str(e)}"

@tool
def get_project_details(project_keys: str):
    """
    Returns details for the specified projects.
    The input should be a comma-separated string of project keys.
    """
    try:
        # Split the input string into a list of project keys
        keys_list = [key.strip() for key in project_keys.split(",")]

        # Load the JSON file
        with open("off_project.json", "r", encoding="utf-8") as file:
            data = json.load(file)

        projects = data["section"]["projects"]  # Access the nested projects dictionary
        result = []

        # Process each project key
        for project_key in keys_list:
            # Convert the project key to lowercase (for consistency)
            project_key = project_key.lower()
            
            # Check if the project exists in the dictionary
            if project_key in projects:
                project = projects[project_key]
                # Format the project details
                project_details = (
                    f"Project Details for {project['title']}\n"
                    f"Link: {project['link']}\n"
                    f"Technologies: {', '.join(project['technologies'])}\n"
                    f"Description: {project['description']}\n"
                    f"More Details: {project['href']}"
                )
                result.append(project_details)
            else:
                result.append(f"❌ Project with key '{project_key}' not found.")

        return "\n\n".join(result)

    except FileNotFoundError:
        return "❌ Error: The off_projects.json file was not found."
    except json.JSONDecodeError:
        return "❌ Error: The off_projects.json file is malformed."
    except KeyError as e:
        return f"❌ Error: Missing key in JSON data - {str(e)}"
    
tools = [
    Tool(
        name="GetInfo",
        func=get_info,
        description=(
            "Useful for retrieving information about contact details, about me, projects, skills, and or a quick summary. "
            "The input should be a comma-separated string of arguments. "
            "Supported arguments: 'contact', 'about', 'projects', 'skills', 'summary'. "
            "Example input: 'contact,about,projects,skills' or 'about'"
        )
    ),
    Tool(
        name="GetProjectDetails",
        func=get_project_details,
        description=(
            "Useful for retrieving details about specific projects. "
            "The input should be a comma-separated string of project keys. "
            "Supported project keys are: "
            "'versa-ai', 'microservices', 'finance-kaiju-mobile', "
            "'petalsoft', 'hit-anime', 'finance-kaiju'. "
            "Example input: 'versa-ai,petalsoft' or 'hit-anime'"
        )
    )
]