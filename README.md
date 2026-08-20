# JavaScript Course Projects

A collection of JavaScript exercises and browser-based mini-projects built while
following a JavaScript course. The repository progresses from language
fundamentals to DOM manipulation, asynchronous JavaScript, APIs, and interactive
games.

## Contents

| Directory | Focus |
| --- | --- |
| `day1` | Variables, blocks, objects, and first JavaScript programs |
| `day2`-`day3` | JavaScript practice scripts |
| `day4`-`day5` | Practice scripts and question-based exercises |
| `day6` | DOM manipulation and browser interaction |
| `day7`–`day8` | More DOM, CSS, and practice pages |
| `day9(TicTacToe)` | Two-player Tic-Tac-Toe game with score tracking |
| `day10(RockPaperScissors)` | Rock Paper Scissors game with image assets |
| `day11` | Fetch API example that displays a random dog breed, plus currency API practice |
| `day12` | Objects, prototypes, classes, constructors, inheritance, and `super` |
| `day13` | Asynchronous JavaScript: timers, callbacks, promises, chaining, and `async`/`await` |
| `currencyConvertor` | Currency converter with exchange-rate and flag APIs |

Most numbered days contain an `index.html` file, a JavaScript entry file, and
optional CSS or `practice` files. Earlier exercises are also available as
individual `.js` files inside their day directories.

## Featured projects

- **Tic-Tac-Toe** - Open `day9(TicTacToe)/index.html`.
- **Rock Paper Scissors** - Open `day10(RockPaperScissors)/index.html`.
- **Currency Converter** - Open `currencyConvertor/index.html`.
- **Dog Breed API example** - Open `day11/index.html`.

## Running the projects

No build step or package installation is required. Open the relevant
`index.html` file directly in a browser, or serve the repository with any local
static web server:

```bash
python -m http.server
```

Then visit `http://localhost:8000/` and open the project you want to explore.
Using a local server is recommended for consistent browser behavior.

The API examples require an internet connection:

- `day11` uses the Dog CEO API.
- `currencyConvertor` uses the jsDelivr currency API and Flags API.

## Repository layout

```text
.
├── currencyConvertor/
├── day1/ ... day8/
├── day9(TicTacToe)/
├── day10(RockPaperScissors)/
├── day11/
├── day12/
├── day13/
└── index.html
```
