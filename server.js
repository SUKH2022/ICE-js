// Step 1: Import all the required modules

// Step 2: Import utility functions for formatting messages and managing users

// Step 3: Initialize the express server and socket.io

// Step 4: Set the static folder for serving HTML, CSS, and JavaScript files

// Step 5: Define the bot name that will send messages

// Step 6: Listen for a connection event, which occurs when a client connects to the server
// In the function
// Listen for the 'joinRoom' event to join a user to a room
// Add the user to the list of users and join the specified room
// Send a welcome message to the current user
// Broadcast a message to all users in the room when a user connects except current user
// Send the room information and user list to the current user


// Step 7: Listen for the 'chatMessage' event to send messages to the room
// In the function
// Get the message from the event and send it to all the users

// Step 8: Listen for the 'disconnect' event to handle user disconnection
// In the function
// Remove the user from the list of users
// Broadcast a message to all users in the room when a user disconnects except current user
// Send the updated room and user list to the room

// Step 9: Start the server and listen on the specified port
// In the function
// Define the port to listen on, using environment variable or default to 3000
// Start the server and listen on the specified port
