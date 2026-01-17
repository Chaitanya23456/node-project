# node-project

Explanation: How My Server Works (Use This)
Node.js Server with Multiple Routes

This project uses a Node.js server to serve different HTML pages based on the requested URL. The server listens on a specific port and handles incoming HTTP requests using route handling.

When the server is running and a user enters a URL in the browser, the request is sent to the server. The server checks the request path and responds with the corresponding HTML page.

The Home route (/) displays the main landing page.

The About route (/about) returns information about the application.

The Contact route (/contact) displays contact details.

If a user enters an invalid route, the server responds with a 404 page, informing the user that the requested page was not found.

This approach demonstrates basic server-side routing. Each route sends an HTML response back to the browser, which then renders the page for the user.

The server follows the request–response cycle:

The browser sends an HTTP request.

The server matches the request to a route.

The server sends the appropriate HTML page.

The browser displays the page.

For development purposes, nodemon is used to automatically restart the server whenever changes are made, making development faster and more efficient.