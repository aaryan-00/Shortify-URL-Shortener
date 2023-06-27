<h1 align="center">
  Shortify URL Shortener
</h1>

Shortify URL Shortener is a user-friendly web application that simplifies the process of shortening URLs, managing notes, and tracking click statistics. With Shortify URL Shortener, users can securely register and log in to efficiently handle their shortened URLs, attach personal notes, search for saved URLs and notes, and monitor the click count of the shortened URLs. Additionally, users can easily access the history of their previously shortened URLs, along with the timestamps of their creation. Shortify URL Shortener provides a seamless and intuitive experience for users in managing and tracking their URLs.

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


<h2>
Internal working of my Project :
</h2>

The internal working of the project involves several key components and processes. Here's a breakdown of the internal workings:

   - Node.js and Express: The application was built using Node.js as the runtime environment and Express.js as the web framework. Node.js provided a powerful and scalable platform, while Express.js facilitated handling HTTP requests and responses efficiently.
   - MongoDB: To store user information, including hashed passwords, I opted for MongoDB as the database solution. The Mongoose library was employed for data modeling and interaction, simplifying the integration between the application and the database.
   - Short ID Generation: Generating unique and compact identifiers for shortened URLs was made possible by utilizing the shortid library. This library ensured that each shortened URL had a distinct identifier.
   - Number of Clicks : The number of clicks on shortened URLs was tracked by incrementing the 'clicks' counter by 1 for each click event.
   - ejs: The ejs templating engine was employed to dynamically render HTML templates on the server-side, enabling efficient generation of HTML content with embedded JavaScript logic.
   - CSS and Bootstrap: Custom CSS styles were implemented to enhance the visual presentation of the application. Additionally, the Bootstrap framework was leveraged to utilize its predefined styles and components, resulting in a consistent and responsive design across different devices.
   - Searching Data: To facilitate data searching and filtering, a filtering mechanism was implemented on the frontend. This enabled users to search and display specific data based on their input criteria, enhancing the user experience.
   - Header and Footer: A consistent user interface was achieved by implementing header and footer components that appeared across the entire application. This ensured a unified navigation experience for users.

<h2>
My Key Takeaways:
</h2>
   
Throughout the process of building the Shortify URL Shortener application, I acquired invaluable knowledge and hands-on expertise in diverse areas of web development. Here, I present my significant takeaways from this experience.

- Full Stack Development: Successfully implemented Full Stack Development by seamlessly integrating server-side and client-side components in a unified project leveraging Express, EJS, and Node.js.
- User Authentication: Enabled user registration and login for secure access to the application and implemented user authentication and session management.
- Password Hashing: Prioritized security by hashing passwords using bcrypt module before storing them.
- Bootstrap: Utilized Bootstrap for easy and visually appealing UI design.
- Search Functionality: Implemented a search feature for efficient querying of URLs and notes.
- Click Tracking: Tracked the number of clicks on shortened URLs for user engagement insights.
- MongoDB Cloud Database: Successfully connected to and utilized a MongoDB cloud database.
- Debugging Skills: Developed expertise in debugging type errors, Axios errors, and HTTP status codes.
- Working with HTML and styling using CSS and Bootstrap: Worked with HTML templates and static files and Styled the application using Bootstrap and CSS.
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











