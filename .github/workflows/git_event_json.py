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

    workspace_path = os.environ.get('GITHUB_WORKSPACE')
    print("Workspace path:", workspace_path)

    if workspace_path:
        destination_dir = os.path.join(workspace_path, '.github', 'workflows')
        print(destination_dir); 

        os.makedirs(destination_dir, exist_ok=True)
        
        json_file_path = os.path.join(destination_dir, 'event_data.json')

        with open(json_file_path, 'w') as f:
            json.dump(variables, f, indent=4)
    else:
        print("Unable to determine workspace path.")
else:
    print("No GitHub event payload found.")
