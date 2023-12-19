// Part One: Solidify Terminology

// In your own terms, define the following terms:

// - What is HTTP?
// HyperText Transfer Protocol is a set of rules that specifies how communication should work between a browser and web server.

// - What is a URL?
// Uniform Resource Locator is the address used to locate a resource on the internet.

// - What is DNS?
// Domain Name System serves as the phonebook of the Internet, allowing users to access websites and other online services by typing in human readable domain names

// - What is a query string?
// It used to pass information between a web browser and a web server.

// - What are two HTTP verbs and how are they different?
// GET and POST, GET is used to request data and POST used to submit data

// - What is an HTTP request?
// Requesting a specific action and resource

// - What is an HTTP response?
// It contains information about status of the request and the requested data

// - What is an HTTP header? Give a couple examples of request and response headers you have seen.
// It is to provide additional information about the message or the requested resource.
// Examples: Content-Type, Server, Date, Accept, Cookie.

// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// URL Parsing, DNS Resolution, IP Connection, HTTP Request, Server Processing, HTTP Response, Browser Rendering, Page Rendering and Execution

// Part Two: Practice Tools

// 1. Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
//  Screenshots included.
// 2. Use dig to find what the IP address is for icanhazdadjoke.com
// IP address: 172.67.198.173
// 3. Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
// Screenshot included

// Part Three: Explore Dev Tools

// Build a very simple HTML form that uses the GET method
// (it can use the same page URL for the action) when the form
// is submitted.

// Add a field or two to the form and, after submitting it,
// explore in Chrome Developer tools how you can view the
// request and response headers.

// Edit the page to change the form type to POST,
// refresh in the browser and re-submit. Do you still see the
// field in the query string? Explore in Chrome how you can view
// the request and response headers, as well as the form data.

// Part Four: Explore the URL API
