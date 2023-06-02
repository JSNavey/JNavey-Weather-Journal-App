/* Global Variables */
const userInput = document.getElementById("user-input");

// Url and personal API Key for OpenWeatherMap API
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "252d8f5af13e40e7b1eb49d3db775580&units=imperial";
const weatherIconUrl = "https://openweathermap.org/img/wn/";

// Create a new date instance dynamically with JS 
// Month date, year Format
let d = new Date();
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
};
let newDate = d.toLocaleString("en-US", options);
console.log(newDate);


// Function to GET Web API Data
const fetchWeather = async (zip) => {
    try {
        let res = await fetch(`${baseUrl}?zip=${zip},us&appid=${apiKey}`);
        let data = await res.json();

        console.log(data);
        return data;

    } catch (error) {
        console.log("error", error);
    }
}

// Function to POST data
const postData = async (url="", data={}) => {
    const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await res.json();
        return result;
    } catch (error) {
        console.log("error", error);
    }
};

// Function to update UI
const updateUI = async () => {
    const res = await fetch("/all");
    try {
        const savedData = await res.json();
        
        document.getElementById("date").innerHTML = newDate;
        document.getElementById("city").innerHTML = savedData.city;
        document.getElementById("img").src = `${weatherIconUrl}${savedData.img}@2x.png`;
        document.getElementById("temp").innerHTML = Math.round(savedData.temp) + "&degF";
        document.getElementById("description").innerHTML = savedData.description;
        document.getElementById("content").innerHTML = savedData.content;

    } catch (error) {
        console.log("error", error);
    }
};

// Function called by event listener
const generateOnClick = (e) => {

    e.preventDefault();

    // Get values from client side form
    const zipCode = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    
    fetchWeather(zipCode)
    .then((data) => {
            postData("/addData", {
                date: newDate,
                city: data.name,
                img: data.weather[0].icon,
                temp: data.main.temp,
                description: data.weather[0].description,
                content: feelings
            })
        })
    .then(() => {
        updateUI();
    })
    .catch((error) => {
        console.log("error", error);
    })
    // Clear the user input form
    userInput.reset()
};


// Event listener to add function to existing HTML DOM element
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", generateOnClick);
