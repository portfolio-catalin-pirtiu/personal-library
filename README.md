# Personal Library Records

Books Records tool for libraries or personal use. Add, edit and delete authors and books.

# Project Description

## What the app does

1. **Interactive Search Bar** – performs the search as you type and the search results are updated on every keystroke.

2. **Books Filter Bar** - filters the book in a useful way by:
   • books read;
   • books not read;
   • books on reading in progress;
   • books read in the current year;
   • books read in the previous year.

3. **Interactive Edit-Save fields for authors and books** – the App makes full use of the React State, which helps in creating interactive and compact UI by avoiding the need of navigating the user to another page when editing an author or a book is necessary. Instead, the Edit and Save features are rendered by toggling the editing state from false to true. When the state changes, the UI changes accordingly. This React feature enables the user to edit, save and view authors and books.

4. **Start or Stop reading a book** - by pressing the Start button, the user lets the App know that this is the book they started reading. That book will display as being in progress and the system adds the current date and time to the database. After the book in read, if the Stop button is pressed, the book will be displayed as read and the current date and time added to the database. The dates are used when filtering the books by "read in the current year" and "read in the previous year".

_Styling Note_ - this project's style sheets are minimal but pleasant because the styles are not the main focus of this project.

## Technologies Used

### Fronted

- Next.js – helps me create an interactive and modern application;
- Eslint – helps maintain code structure across all files.

### Backend

- Express.js – an enjoyable Node.js framework;
- MongoDB – NoSQL database.

## How to Install and Run the App

- Create a new folder where the project will be located;
- Open terminal at that folder's location;
- Clone the repository on your local machine by executing the following command: `git clone https://github.com/Cat4848/personal-library`
- Start the frontend server: change to `client` directory then execute the `npm start` command.
- Start the backend server: change to `server` directory then execute the `npm run start` command;
- Enjoy! 😀
