# 🚀 ChatOn App

Welcome to the **ChatOn App**! This application allows users to join chat rooms and communicate in real-time. Below you'll find step-by-step instructions to get started, as well as some useful VS Code extensions to enhance your development experience.

## 📝 Instruction

Follow these steps to get the project up and running on your local machine:

1. The Project's Data has already been setup with all the necessary install dependencies and base files so if you want to continue working with the given files then for that you can clone the repository in your system and start form the __ Step after the 2nd Step.

   ```bash
   git clone https://github.com/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install the Necessary NPM Modules:**

   ```bash
   npm install express socket.io moment
   npm install -D nodemon
   ```

4. **Setup Project  Files Structure**

   *The Project is going to have 2 main Folders in root, public and util. And other than that it will also have Server.js file. The public folder will have all the html css and js files and folder. And util will also have 2 utility javascript files, which will be discussed later on.*
   
   **Project Structure**

   chat-app\
   ├── node_modules\
   ├── public\
   │   ├── css\
   │   ├── css/styles.css\
   │   ├── js\
   │   ├── js/main.js\
   │   └── index.html\
   │   └── chat.html\
   ├── util\
   │   ├── users.js\
   │   └── messages.js\
   ├── server.js\
   └── package.json

5. **Creating both the Pages and Designing Them**
   
      *The Project is going to have 2 main pages, index.html and chat.html. The index.html will have the form to choose the room and all while chat.html will have the chat room. The index.html will have the form to enter the username and choose teh room that the user wants to enter. And chat.html will have the chat room where the user can chat with other users. The css and js files will be linked to the html files. The css file will have the styling for the pages and the js file will have the functionality for the pages.*


6. **Creating Main.js**
      
      *The main.js file will have the functionality for the chat room. The main.js file will have the functionality to connect to the server and emit the messages and the users to the chat room. The main.js file will also have the functionality to get the messages and the users from the chat room. The main.js file will also have the functionality to display the messages and the users in the chat room. All the other instructions are in files if you have cloned our application.*

7. ** Setting up the Server**
   
      *The server will be setup in the server.js file. The server will be setup using express and socket.io. The server will have the routes for the pages and the socket connection for the chat room. The server will also have the utility functions to get the users and messages. The server will also have the functionality to emit the messages and the users to the chat room. All the other instructions are in files if you have cloned our application.*

8. **Start And Test The Website**
   
      *After setting up the project files and the server, you can start the server and test the website. You can start the server using the following command and then you can open the website in the browser.*
   
      ```bash
      npm start
      ```
   
      *The website will be running on the following URL:*
   
      ```bash
      http://localhost:3000/
      ```


## 🧩 Useful VS Code Extensions

To make your development process smoother, here are some recommended VS Code extensions:

1. **Prettier - Code formatter** - An opinionated code formatter to maintain consistent code style.
2. **Live Server** - Launch a local development server with live reload feature.
3. **Bracket Pair Colorizer** - Adds color to matching brackets for better readability.
4. **Debugger for Chrome** - Debug your JavaScript code running in the browser directly from VS Code.


## 😊 Contributors

This project is developed by the following amazing people:
- Vansh
- Sukhpreet
- Vishal
- Astu

## 🌟 Happy Coding!
