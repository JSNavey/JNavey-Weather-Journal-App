# JNavey-Weather-Journal-App
![HTML](https://img.shields.io/badge/HTML-HTML5-orange)
![CSS](https://img.shields.io/badge/CSS-CSS3-blue)
![Javascript lastest version](https://img.shields.io/badge/Javascript-ECMAScript%202022-f0db4f)
![Contribute](https://img.shields.io/badge/Contribute-Welcome-ff69b4)

This is the third project of Front End Development - Bertelsmann Next Generation Tech Booster Scholarship from Udacity. This project is focusing how to implement asynchronous Javascript with the Fetch API and Web APIs to create a weather journal app.

# Table of Contents

- [Installation](#installation)
- [OpenWeatherMap API Credential](#openweathermap-api-credentials)
- [How to Run the Application](#how-to-run-the-application)
- [Development](#development)
- [How to Contribute](#how-to-contribute)
- [Resource Credits](#resource-credits)
- [License](#license)

# Installation
To be able to start this project, `node` is needed to be installed.
1. Check if node and npm are installed in your computer. Open up the terminal and type these two commands<br> 
`node -v to see node version e.g v18.16.0`.<br>
`npm -v for npm version e.g 9.5.1`<br>
2. Otherwise download node.js from `https://nodejs.org/en/download`. Once it is installed, run those two commands above to double-check. 
3. Intall necessary project dependencies which are `express`, `cors` and `body-parser` by running this commnad <br>
`npm install express cors body-parser`

# OpenWeatherMap API Credentials
This project acquires API credentials from [OpenWeatherMap website](https://openweathermap.org/) in order to get weather data.
1. Sign up [OpenWeatherMap website](https://openweathermap.org/).
2. An API key will be sent to your registered email but it needs a few hours before activation.
3. Once the key is activated, store `baseUrl` and `apiKey` at the top of the `app.js` file<br>
>`const apiKey = '<your_api_key>&units=imperial';`

# How to Run the Application
Run `node server.js` command in the terminal.

# Development
This project is built from HTML, CSS and Javascript languages.<br>

[![My Skills](https://skills.thijs.gg/icons?i=js,html,css)](https://skills.thijs.gg)

# How to Contribute
There is plenty of room for improvement. You are very welcome to clone the repo.  
1. Clone the repo and create a new branch.<br>
`$ git checkout https://github.com/JSNavey/JNavey-Weather-Journal-App.git -b new_branch_name`
2. Make changes or add new features and test.
3. Submit Pull Request with comprehensive description.

# Resource Credits
[OpenWeatherMap API](https://openweathermap.org/)

# License
No license.
