import os
import json

event_payload = os.environ.get('GITHUB_EVENT_PATH')

if event_payload:
    with open(event_payload, 'r') as f:
        event_data = json.load(f)

    variables = {
        "repository": event_data.get('repository', {}).get('full_name'),
        "sender": event_data.get('sender', {}).get('login'),
    }

    # Get the path to the repository workspace
    workspace_path = os.environ.get('GITHUB_WORKSPACE')

    if workspace_path:
        # Construct the absolute path to the JSON file
        json_file_path = os.path.join(workspace_path, 'event_data.json')

        # Write variables to the JSON file
        with open(json_file_path, 'w') as f:
            json.dump(variables, f, indent=4)
    else:
        print("Unable to determine workspace path.")
else:
    print("No GitHub event payload found.")
