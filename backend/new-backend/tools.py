import json
from langchain.tools import tool


@tool
def get_info(arguments: str):
    """
    Returns information based on the provided arguments.
    Supported arguments: 'contact', 'about', 'projects', 'skills', 'education', 'experience'.
    Supported single and multiple arguments separated by commas.
    """
    try:
        args_list = [arg.strip().lower() for arg in arguments.split(",")]

        with open("./off_info.json", "r", encoding="utf-8") as file:
            data = json.load(file)

        result = []
        processed_args = set()
        for arg in args_list:
            if arg in processed_args:
                continue

            if arg == "contact":
                contact_info = data.get("contact", {}).get("content", {})
                if contact_info:
                    result.append(
                        f"--- Contact Information ---\n"
                        f"Email: {contact_info.get('email', 'N/A')}\n"
                        f"Phone: {contact_info.get('phone', 'N/A')}\n"
                        f"Note: {contact_info.get('note', '')}\n"
                        f"Chatbot Note: {contact_info.get('chatbot_note', '')}"
                    )
                else:
                    result.append("Contact information is not available.")
                processed_args.add(arg)

            elif arg == "about":
                about_info = data.get("about", {}).get("content", {})
                if about_info:
                    beyond_tech = about_info.get("beyond_technology", {}).get(
                        "content", {}
                    )
                    result.append(
                        f"--- About Me ---\n"
                        f"Name: {about_info.get('name', 'N/A')}\n"
                        f"Title: {about_info.get('title', 'N/A')}\n"
                        f"Introduction: {about_info.get('introduction', 'N/A')}\n"
                        f"Note: {about_info.get('note', 'N/A')}\n"
                        f"Learning Journey: {about_info.get('learning_journey', 'N/A')}\n"
                        f"Coding Philosophy: {about_info.get('coding_philosophy', 'N/A')}\n"
                        f"Current Endeavors: {about_info.get('current_endeavors', 'N/A')}\n"
                        f"Professional Goals: {about_info.get('professional_goals', 'N/A')}\n"
                        f"Beyond Technology:\n"
                        f"- Learning to Cook: {beyond_tech.get('learning_to_cook', 'N/A')}\n"
                        f"- Walking in Nature: {beyond_tech.get('walking_in_nature', 'N/A')}"
                    )
                else:
                    result.append("About information is not available.")
                processed_args.add(arg)

            elif arg == "projects":
                projects_content = data.get("projects", {}).get("content", [])
                if projects_content:
                    projects_list = []
                    for project in projects_content:
                        projects_list.append(
                            f"- Title: {project.get('title', 'N/A')}\n"
                            f"  Description: {project.get('description', 'N/A')}"
                        )
                    result.append(
                        f"--- Project Summaries ---\n" + "\n".join(projects_list)
                    )
                else:
                    result.append("Project summaries are not available.")
                processed_args.add(arg)

            elif arg == "skills":
                skills_info = data.get("skills", {}).get("content", {})
                if skills_info:
                    skill_lines = ["--- Skills Overview ---"]
                    # Dynamically list skill categories found in JSON
                    for category, skills_list in skills_info.items():
                        if isinstance(skills_list, list):
                            # Capitalize category name for display
                            cat_name = category.replace("_", " ").title()
                            skill_lines.append(f"{cat_name}: {', '.join(skills_list)}")
                    result.append("\n".join(skill_lines))
                else:
                    result.append("Skills information is not available.")
                processed_args.add(arg)

            # --- NEW: Handle Education ---
            elif arg == "education":
                education_list = data.get("education", {}).get("content", [])
                if education_list:
                    edu_lines = ["--- Education ---"]
                    for entry in education_list:
                        edu_lines.append(
                            f"- Institution: {entry.get('institution', 'N/A')}\n"
                            f"  Focus: {entry.get('focus', 'N/A')}\n"
                            f"  Duration: {entry.get('duration', 'N/A')}"
                            + (
                                f"\n  Notes: {entry['notes']}"
                                if entry.get("notes")
                                else ""
                            )  # Add notes only if they exist
                        )
                    result.append("\n".join(edu_lines))
                else:
                    result.append("Education information is not available.")
                processed_args.add(arg)

            # --- NEW: Handle Experience ---
            elif arg == "experience":
                experience_list = data.get("experience", {}).get("content", [])
                if experience_list:
                    exp_lines = ["--- Experience ---"]
                    for entry in experience_list:
                        exp_lines.append(
                            f"- Role: {entry.get('role', 'N/A')} at {entry.get('company', 'N/A')}\n"
                            f"  Duration: {entry.get('duration', 'N/A')}\n"
                            f"  Description: {entry.get('description', 'N/A')}"
                            + (
                                f"\n  Key Technologies: {', '.join(entry['technologies'])}"
                                if entry.get("technologies")
                                else ""
                            )  # Add tech only if it exists
                        )
                    result.append("\n".join(exp_lines))
                else:
                    # Tailor message based on known freelance work
                    result.append(
                        "Experience primarily includes freelance work (details below if available elsewhere or upon request). No formal company roles listed."
                    )
                processed_args.add(arg)
            else:
                result.append(
                    f"❌ Information category '{arg}' is not supported. Please use 'contact', 'about', 'projects', 'skills', 'education', 'experience', or 'summary'."
                )
                processed_args.add(
                    arg
                )  # Add even if unsupported to avoid repeating error

        return (
            "\n\n".join(result)
            if result
            else "No information found for the requested arguments."
        )

    except FileNotFoundError:
        return (
            "❌ Error: The 'off_info.json' file was not found at the expected location."
        )
    except json.JSONDecodeError:
        return "❌ Error: The 'off_info.json' file is not valid JSON."
    except KeyError as e:
        return f"❌ Error: Missing expected key structure in JSON data - {str(e)}"


@tool
def get_project_details(project_keys: str):
    """
    Returns details for the specified projects.
    Supported project keys are: "chatbot-ui-demo", 'versa-ai', 'microservices', 'finance-kaiju-mobile',
    'petalsoft', 'hit-anime', 'finance-kaiju'.
    Supported single and multiple arguments separated by commas.
    """
    try:
        # Split the input string into a list of project keys
        keys_list = [key.strip() for key in project_keys.split(",")]

        # Load the JSON file
        with open("./off_project.json", "r", encoding="utf-8") as file:
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
                    f"Live Site: {project['liveSite']}\n"
                    f"Technologies: {', '.join(project['technologies'])}\n"
                    f"Description: {project['description']}\n"
                    f"More Details at Project Site: {project['href']}\n"
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
