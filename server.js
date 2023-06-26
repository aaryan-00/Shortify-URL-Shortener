const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const randomstring = require('randomstring');
const bcrypt = require('bcrypt');
const ShortUrl = require('./models/shortUrl');
const User = require('./models/user');
const dotenv= require('dotenv');
dotenv.config()

// Creating an Express application:
const app = express();



// Connect to MongoDB
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URI, connectionParams)
  .then(() => {
    console.info("Connected to the MongoDB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });



// Configuring the application:
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));



//middlewares
// Session management middleware
app.use(
  session({
    secret: randomstring.generate({
      length: 32,
      charset: 'alphanumeric',
    }),
    resave: false,
    saveUninitialized: true,
  })
);

// Authentication middleware
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    // User is authenticated, proceed to the next middleware
    next();
  } else {
    // User is not authenticated, redirect to the login page
    res.redirect('/');
  }
};

// Routes
//search_url route
app.get('/search_url', isAuthenticated, async (req, res) => {
  // Passing the shortUrls array as a variable to the template
  const shortUrls = await ShortUrl.find({ createdBy: req.session.user._id });
  res.render('search_url', { shortUrls: shortUrls });
});



// Login route
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      // User not found
      return res.redirect('/');
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Invalid password
      return res.redirect('/');
    }
    // req.user=user;

    // Store the user in the session
    req.session.user = user;
    
    // Login successful
    res.redirect('/index');
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
});



//logout route
app.get('/logout', (req, res) => {
  // Perform the logout operation here (e.g., clear the session)
  req.session.destroy();
  // Redirect the user to the home page
  res.redirect('/');
});



// Registration route
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user instance
    const user = new User({ name, email, password: hashedPassword });
    // Save the user to the database
    await user.save();
    // Redirect to the login page after successful registration
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.send('Registration failed');
  }
});



// URL shortener route
app.get('/index', isAuthenticated, async (req, res) => {
  const shortUrls = await ShortUrl.find({ createdBy: req.session.user._id });
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', isAuthenticated, async (req, res) => {        //// creating endpoints for shortened urls/Handling form submissions:
  await ShortUrl.create({
    full: req.body.fullUrl,
    notes: req.body.notes,
    timestamp: req.body.timestamp,
    createdBy:req.session.user._id
  });
  res.redirect('/index');
});

app.get('/:shortUrl', async (req, res) => {         //// Redirecting short URLs:
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) {
    return res.sendStatus(404);
  }

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});



// Starting the server:
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
