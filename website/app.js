// Personal API Key for OpenWeatherMap API
const apiKey = "c990adf4aec8ce739518ff417723546d";

// Event listener to add function to existing HTML DOM element
const generate = document.querySelector('#generate');
generate && generate.addEventListener('click', generateHandler);

/* Function called by event listener */
const baseURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
function generateHandler(e) {
    const zip = document.querySelector('#zip').value;
    getWeather(baseURL, zip, apiKey)
        .then(postEntry)
        .then(getProjectData)
}

/* Function to GET Web API Data*/
async function getWeather(baseURL, zip, apiKey) {

    const url = `${baseURL}&zip=${zip}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const resutls = await response.json();
            return resutls;
        }
        else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

    } catch (error) {
        // Fetch call faild
        alert(error.message);
    }
}

/* Function to POST data */
async function postEntry(weather) {
    const { main: { temp: temperature } } = weather;
    const userResponse = document.querySelector('#feelings').value;
    const entry = { temperature, userResponse, date: new Date(), };
    postData('/post', entry);
}

/* Function to GET Project Data */
async function getProjectData() {
    console.log('Getting Project Data');
}


// Helper: posts data to a url
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        if (response.ok) {
            const newData = await response.json();
            return newData;
        }
        else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

    } catch (error) {
        alert(error.message);
    }
}
