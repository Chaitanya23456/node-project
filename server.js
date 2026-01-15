// Import required core Node.js modules
const http = require("http");   // To create HTTP server
const fs = require("fs");       // To read files from system
const path = require("path");   // To handle file paths safely

// Define the port number
const PORT = process.env.PORT || 4000;

/**
 * Function to serve static files (HTML, CSS)
 * @param {object} res - HTTP response object
 * @param {string} filePath - Path of file to be served
 * @param {string} contentType - MIME type (text/html, text/css)
 * @param {number} statusCode - HTTP status code (default 200)
 */
function serveFile(res, filePath, contentType, statusCode = 200) {
  fs.readFile(
    filePath,
    contentType === "text/html" ? "utf8" : null,
    (err, data) => {
      if (err) {
        // If file read fails, send 500 error
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 - Internal Server Error");
        console.error(err);
        return;
      }

      // Send successful response with file content
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  );
}

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} received`);

  // Serve CSS files
  if (req.url.startsWith("/styles/")) {
    const cssPath = path.join(__dirname, req.url);
    serveFile(res, cssPath, "text/css");
    return;
  }

  // Routing logic for different pages
  if (req.url === "/" || req.url === "/home") {
    serveFile(res, path.join(__dirname, "pages", "home.html"), "text/html");
  } else if (req.url === "/about") {
    serveFile(res, path.join(__dirname, "pages", "about.html"), "text/html");
  } else if (req.url === "/contact") {
    serveFile(res, path.join(__dirname, "pages", "contact.html"), "text/html");
  } else {
    // Serve 404 page for unknown routes
    serveFile(
      res,
      path.join(__dirname, "pages", "404.html"),
      "text/html",
      404
    );
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
