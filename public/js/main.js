// Step 1: Get necessary DOM elements like form or users or the room's Name etc.

// Step 2: Extract username and room from the URL using Qs library

// Step 3: Initialize socket.io client


// Step 4: Emit event to join the chatroom with the provided username and room


// Step 5: Listen for 'roomUsers' event to get the current room and user list


// Step 6: Listen for 'message' event from the server and display the message to the chat window and also add automatic scroll to latest message if you want


// Step 7: Listen for form submission to send a new chat message
// In the function
// Prevent the form from submitting in the traditional way
// Get the message text from the input field
// Trim whitespace from the message
// If the message is empty, do not send it
// Emit the message to the server
// Clear the input field and refocus it for the next message


// Step 8: create a  function to display a new message in the chat window
// In that function 
// Create a div for the message
// Add a CSS class for styling
// Create a paragraph for the meta information
// Add a CSS class for styling
// Set the username
// Append the message time
// Add the meta paragraph to the message div
// Create a paragraph for the message text
// Add a CSS class for styling
// Set the message text
// Add the text paragraph to the message div


// Step 9: Function to display the room name in the DOM


// Step 10: Function to display the list of users in the room


// Step 11: Prompt the user before leaving the chat room

