import json
from typing import List, Dict

def get_message(payload: Dict) -> Dict:
    ref = payload['ref']
    before = payload['before']
    after = payload['after']
    pusher_name = payload['pusher']['name']
    pusher_email = payload['pusher']['email']
    compare = payload['compare']
    head_commit = payload['head_commit']
    commit_id = head_commit['id']
    commit_message = head_commit['message']
    commit_timestamp = head_commit['timestamp']
    commit_url = head_commit['url']
    author = head_commit['author']
    committer = head_commit['committer']
    commit_author_name = author['name']
    commit_author_email = author['email']
    commit_committer_name = committer['name']
    commit_committer_email = committer['email']
    before_hash = before[:-5]
    after_hash = after[:-5]
    modified_files = head_commit['modified']

    message = {
        "type": "message",
        "attachments": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "contentUrl": None,
                "content": {
                    "type": "AdaptiveCard",
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "version": "1.5",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": f"Details of Commit on {commit_timestamp.split(' ')[0]} at {commit_timestamp.split(' ')[1]}",
                            "weight": "Bolder",
                            "wrap": True
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {"type": "TextBlock", "text": "Branch:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Before Commit:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "After Commit:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Pusher Name:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Pusher Email:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Compare URL:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit ID:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Message:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Timestamp:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit URL:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Author Name:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Author Email:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Committer Name:", "weight": "Bolder", "wrap": True},
                                                {"type": "TextBlock", "text": "Commit Committer Email:", "weight": "Bolder", "wrap": True}
                                            ]
                                        },
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {"type": "TextBlock", "text": ref},
                                                {"type": "TextBlock", "text": before_hash},
                                                {"type": "TextBlock", "text": after_hash},
                                                {"type": "TextBlock", "text": pusher_name},
                                                {"type": "TextBlock", "text": pusher_email},
                                                {"type": "TextBlock", "text": compare},
                                                {"type": "TextBlock", "text": commit_id},
                                                {"type": "TextBlock", "text": commit_message},
                                                {"type": "TextBlock", "text": commit_timestamp},
                                                {"type": "TextBlock", "text": commit_url},
                                                {"type": "TextBlock", "text": commit_author_name},
                                                {"type": "TextBlock", "text": commit_author_email},
                                                {"type": "TextBlock", "text": commit_committer_name},
                                                {"type": "TextBlock", "text": commit_committer_email}
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "style": "default",
                            "bleed": True,
                            "border": True
                        },
                        {"type": "TextBlock", "text": "Modified Files:", "weight": "Bolder", "wrap": True},
                        *[{"type": "TextBlock", "text": file, "wrap": True} for file in modified_files],
                        {
                            "type": "ActionSet",
                            "actions": [
                                {"type": "Action.OpenUrl", "title": "View Commit Details", "url": commit_url}
                            ]
                        }
                    ]
                }
            }
        ]
    }

    return message


if __name__ == "__main__":
    event_data = sys.argv[1]
    event_data_json = json.loads(event_data)
    message = get_message(event_data_json)
    print(json.dumps(message, indent=4))  
