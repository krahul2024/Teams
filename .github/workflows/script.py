import sys, json 

event_data = sys.argv[1]
event_data_json = json.loads(event_data) 

print(event_data_json) 