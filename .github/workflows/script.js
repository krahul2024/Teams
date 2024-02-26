function getMessage(payload) {
    const ref = payload.ref;
    const before = payload.before;
    const after = payload.after;
    const pusher_name = payload.pusher.name;
    const pusher_email = payload.pusher.email;
    const compare = payload.compare;
    const head_commit = payload.head_commit;
    const commit_id = head_commit.id;
    const commit_message = head_commit.message;
    const commit_timestamp = new Date(head_commit.timestamp).toISOString();
    const commit_url = head_commit.url;
    const author = head_commit.author;
    const committer = head_commit.committer;
    const commit_author_name = author.name;
    const commit_author_email = author.email;
    const commit_committer_name = committer.name;
    const commit_committer_email = committer.email;
    const before_hash = before.slice(0, -5);
    const after_hash = after.slice(0, -5);

    const message = {
        type: "message",
        attachments: [
            {
                contentType: "application/vnd.microsoft.card.adaptive",
                contentUrl: null,
                content: {
                    type: "AdaptiveCard",
                    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                    version: "1.5",
                    body: [
                        {
                            type: "TextBlock",
                            text: `Details of Commit on ${DateTime.fromISO(commit_timestamp)}`,
                            weight: "Bolder",
                            wrap: true
                        },
                        {
                            type: "Container",
                            items: [
                                {
                                    type: "ColumnSet",
                                    columns: [
                                        {
                                            type: "Column",
                                            width: "stretch",
                                            items: [
                                                { type: "TextBlock", text: "Branch:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Before Commit:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "After Commit:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Pusher Name:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Pusher Email:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Compare URL:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit ID:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Message:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Timestamp:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit URL:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Author Name:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Author Email:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Committer Name:", weight: "Bolder", wrap: true },
                                                { type: "TextBlock", text: "Commit Committer Email:", weight: "Bolder", wrap: true }
                                            ]
                                        },
                                        {
                                            type: "Column",
                                            width: "stretch",
                                            items: [
                                                { type: "TextBlock", text: ref },
                                                { type: "TextBlock", text: before_hash },
                                                { type: "TextBlock", text: after_hash },
                                                { type: "TextBlock", text: pusher_name },
                                                { type: "TextBlock", text: pusher_email },
                                                { type: "TextBlock", text: compare },
                                                { type: "TextBlock", text: commit_id },
                                                { type: "TextBlock", text: commit_message },
                                                { type: "TextBlock", text: commit_timestamp },
                                                { type: "TextBlock", text: commit_url },
                                                { type: "TextBlock", text: commit_author_name },
                                                { type: "TextBlock", text: commit_author_email },
                                                { type: "TextBlock", text: commit_committer_name },
                                                { type: "TextBlock", text: commit_committer_email }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            style: "default",
                            bleed: true,
                            border: true
                        },
                        {
                            type: "ActionSet",
                            actions: [
                                { type: "Action.OpenUrl", title: "View Commit Details", url: commit_url }
                            ]
                        }
                    ]
                }
            }
        ]
    };

    return message;
}

let event_data = {};
let message = {};
if (process.argv.length > 2) {
    event_data = JSON.parse(process.argv[2]);
    message = JSON.stringify(event_data, null, 4); // Stringify the event_data
}
console.log(message);
