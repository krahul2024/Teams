@echo off

REM Run the Python script and capture its output
for /f %%i in ('python test.py') do set "json_output=%%i"

REM Post the JSON output to the specified URL using curl
curl -X POST -H "Content-Type: application/json" --data-raw "%json_output%" http://localhost:4000/curl-check
