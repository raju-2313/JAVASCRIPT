# JavaScript Course Projects

This repository contains exercises and small projects from a JavaScript course. It is organized by day and includes practice files covering basics, DOM manipulation, and small games.

## Overview
- day1: Basics (variables, first programs, blocks, objects)
- day2: script exercises
- day3: script exercises
- day4: Exercises and practice files (q1–q3)
- day5: Exercises and practice problems (q1–q3)
- day6: DOM manipulation examples and practice pages
- day7: More DOM/CSS practice and examples
- day8: Practice pages and examples
- day9 (TicTacToe): A Tic Tac Toe game (index.html, script.js, style.css)

## Notable files
- day9(TicTacToe)/index.html — Tic Tac Toe game UI
- day9(TicTacToe)/script.js — Tic Tac Toe game logic
- day6/index.html — DOM practice page
- Multiple practice folders with small JS exercises (q1, q2, q3)

## How to publish this repository on GitHub (quick steps)
1. Create a new public repo named `javascript` on GitHub (or run the API/commands below).

Using GitHub API (replace <PAT> with your personal access token):

# Create repo
curl -H "Authorization: token <PAT>" -d '{"name":"javascript","description":"Include in the readme after analysing the source code","private":false}' https://api.github.com/user/repos

# Create README via API (base64-encoded content)
# Replace README_BASE64 with base64 of this README.md (PowerShell: [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes((Get-Content README.md -Raw))))

curl -H "Authorization: token <PAT>" -d '{"message":"Add README","content":"<README_BASE64>"}' https://api.github.com/repos/raju-2313/javascript/contents/README.md

Alternative: push from local machine

cd E:\\Javascript
git init
git add README.md
git commit -m "Add README"
git branch -M main
# Add remote — recommended to use credential helper; this example uses token in URL (be careful):
git remote add origin https://<PAT>@github.com/raju-2313/javascript.git
git push -u origin main

## Suggested README additions
- Short description of each day's goals
- How to run examples (open HTML files in a browser)
- License (optional)

If you'd like, provide your PAT here (not recommended in public chat) or run the above commands locally; tell me which and I will prepare commands exactly tailored to your environment.
