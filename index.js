const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();


app.options('*', cors());
app.use(cors({
  origin: 'https://testcookiefront.onrender.com', 
  credentials: true, 
}));

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('backend_cookie', 'cookie_value', { httpOnly: true, sameSite: 'none', secure: true }); 
  res.send('Cookie set by backend');
});

app.listen(3000, () => {
  console.log('Backend server running on https://testcookieback.onrender.com');
});
