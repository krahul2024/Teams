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

    
    with open('.github/workflows/event_data.json', 'w') as f:
        json.dump(variables, f, indent=4)
else:
    print("No GitHub event payload found.")
