# Peddle Frontend Assessment

- Task 1 - Design Test
- Task 2 - REST Api Proficiency

## Requirements

NodeJs version 16 or newer installed on your computer.

## Installation

Clone or download the repository as a zip folder

- To run, on your command line navigate into project folder; then start with npm.

```JavaScript
cd peddle-frontend-assessment
npm start
```

## Usage

- Task 1 - To view any of the pages:

Navigate to the /comingsoon, /blog, /about routes respectively.

```JavaScript
localhost:3000/desiredpage
```

- Task 2 - To view the github task:

Navigate to the /github route as well.

## Dependencies Used

The following dependencies were required and used for the assessment:

- Millify - Converted long numbers to readable strings obtained from calling the REST api in the /github route
- Moment - Extracted and Parsed the date of each repository gotten from the GitHub API in the /github route.
- React-Icons - Got specific icons from a collection of libraries.
- React-Infinite-Scroll-Component - Used to implement infinite scroll in the /github route.
- React-Reveal - Implemented certain animations in the coming soon and contact components.

## What can be improved about this application

- The coming soon component could use a real time animated counter.
- For UI best practices a light and darkmode design of each page should be created with a custom button or switch to change styles to the desired mode. or render styles based on the specification by the OS.
