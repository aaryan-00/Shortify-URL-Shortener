<h1 align="center">
  Shortify URL Shortener
</h1>

Shortify URL Shortener is a user-friendly web application that simplifies the process of shortening URLs, managing notes, and tracking click statistics. With Shortify URL Shortener, users can securely register and log in to efficiently handle their shortened URLs, attach personal notes, search for saved URLs and notes, and monitor the click count of the shortened URLs. Additionally, users can easily access the history of their previously shortened URLs, along with the timestamps of their creation. Shortify URL Shortener provides a seamless and intuitive experience for users in managing and tracking their URLs.

## Visit the application
<a href="https://shortify-y945.onrender.com/">Shortify URL Shortener</a>
## Screenshots
<div align="center" >
  <h3>Login View<h3/> 
  <img src="https://github.com/aaryan-00/Shortify-URL-Shortener/blob/main/public/images/login%20page.jpeg" width="600" alt="Login Page">
  <h3>Register View<h3/> 
  <img src="https://github.com/aaryan-00/Shortify-URL-Shortener/blob/main/public/images/Register%20page.jpeg" width="600" alt="Register Page">
  <h3>Home View<h3/> 
  <img src="https://github.com/aaryan-00/Shortify-URL-Shortener/blob/main/public/images/home%20page.jpeg" width="600" alt="Home Page">
  <h3>ALL URLs' or Search View<h3/> 
  <img src="https://github.com/aaryan-00/Shortify-URL-Shortener/blob/main/public/images/search_page_or_all_urls_page.jpeg" width="600" alt="All URLs' Page">   
</div>

## How to Run the Project:

To run the Shortify URL Shortener project, follow these steps:
1. Install Node.js on your machine if you haven't already (https://nodejs.org).
2. Clone the repository: `git clone <repository_url>`.
3. Navigate to the project directory.
4. Install the required dependencies by running the command `npm install`.
5. In the `.env` file, provide the necessary environment variables (e.g., database connection URI, PORT) or you can leave it as I have provided these in the `.env` file attached to this project.
6. Run the application: `npm run start`.
7. Access the application in your web browser at: `http://localhost:3000`.

## Accessing the Application:

1. Open your web browser and navigate to http://localhost:3000 to access the Shortify URL Shortener application.
2. Register for a new account or log in if you already have one.
3. Provide the necessary details for registration, such as name, email address, and password.
4. If you're logging in, enter your email and password to access the application.
5. Once logged in, you can start using the URL shortener application.
   - Shorten URLs by entering a long URL and personal notes and clicking the "Shorten" button.
   - Access your previously shortened URLs easily on the All URLs page.
   - Use the search function to find specific URLs or notes.
   - View click statistics to understand user engagement.
   - See the "Created At" timestamp for each shortened URL, indicating when it was created.
6. Explore the application further and try out different features.
7. Make the most of the URL shortener to efficiently manage your URLs, notes, and their creation timestamps.

## Dependencies:

- bcrypt
- dotenv
- ejs
- express
- express-session
- mongoose
- nodemon
- randomstring
- shortid


## Internal working of the Project :


Here's a breakdown of the internal workings of this project:

   - Node.js and Express: The application was built using Node.js as the runtime environment and Express.js as the web framework. This combination provided scalability and efficient handling of HTTP requests and responses.
   - dotenv: The `dotenv` library was used to load environment variables from a .env file into the Node.js application, allowing sensitive configuration data to be securely stored and accessed.
   - Nodemon: Used as a development tool to automatically restart the Node.js application upon file changes, enhancing the development workflow.
   - MongoDB: MongoDB atlas was used as the database solution to store user information, including hashed passwords. The integration with the database was simplified using the Mongoose library for data modeling and interaction.
   - User Registration and Login: Users can register by providing their information, which is securely stored in the MongoDB database. The application verifies user credentials during login and generates an authentication token upon successful authentication.
   - Session Management: Session management was implemented to maintain user sessions and handle authentication, allowing users to remain logged in across different pages. This was made possible by utilizing the express-sessions middleware, which facilitated the creation and management of user sessions.
   - Password Hashing: User passwords were hashed using `bcrypt` before being stored in the database. This ensured the security of user passwords even in the event of a data breach.
   - Randomstring: The `randomstring` library was used to generate unique tokens for session management and authentication, ensuring secure and reliable identification of users during subsequent requests.
   - Short ID Generation: The `shortid` library was used to generate unique and compact identifiers for shortened URLs. This ensured that each shortened URL had a distinct identifier.
   - Number of Clicks: The application tracked the number of clicks on shortened URLs by incrementing a 'clicks' counter for each click event. This provided insights into the popularity and usage of different URLs.
   - EJS: The application utilized the ejs templating engine to dynamically render HTML templates on the server side. This allowed for the efficient generation of HTML content with embedded JavaScript logic.
   - CSS and Bootstrap: Custom CSS styles were implemented to enhance the visual presentation of the application. The Bootstrap framework was leveraged to utilize predefined styles and components, resulting in a consistent and responsive design.
   - Filtering Data: A filtering mechanism was implemented on the frontend to facilitate data searching and filtering. This allowed users to search and display their shortened URLs using notes or URLs.
   - Header and Footer: The application implemented header and footer components that appeared consistently across the entire application, ensuring a unified navigation experience for users.

## My Key Takeaways:

   
Throughout the process of building the Shortify URL Shortener application, I acquired invaluable knowledge and hands-on expertise in diverse areas of web development. Here, I present my significant takeaways from this experience.

- Full Stack Development: Successfully implemented Full Stack Development by seamlessly integrating server-side and client-side components in a unified project leveraging Express, EJS, and Node.js.
- User Authentication: Enabled user registration and login for secure access to the application and implemented user authentication and session management.
- Password Hashing: Prioritized security by hashing passwords using bcrypt module before storing them.
- Bootstrap: Utilized Bootstrap for easy and visually appealing UI design.
- Search Functionality: Implemented a search feature for efficient querying of URLs and notes.
- Click Tracking: Tracked the number of clicks on shortened URLs for user engagement insights.
- MongoDB Cloud Database: Successfully connected to and utilized a MongoDB cloud database.
- Debugging Skills: Developed expertise in debugging type errors, Axios errors, and HTTP status codes.
- Working with HTML, CSS and Bootstrap: Worked with HTML templates and static files and Styled the application using Bootstrap and CSS.
- Structured Readme: Created a well-organized readme file in the Git repository.

## References:

During the development of the Shortify URL Shortener web application, the following resources were utilized to enhance knowledge and skills:

- npm Documentation (https://www.npmjs.com/)
- W3Schools (https://www.w3schools.com/)
- NodeJs Tutorial from codevolution's youtube playlist (https://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY)
- Authentication from WebDevSimplified's video (https://youtu.be/Ud5xKCYQTjM) 
- Bootstrap Documentation (https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- MongoDB tutorial from CodeWithHarry video (https://youtu.be/J6mDkcqU_ZE)
- Stack Overflow website for debugging (https://stackoverflow.com/)

These resources provided valuable guidance and support throughout the development process of the Shortify application.











