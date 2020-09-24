// Personal API Key for OpenWeatherMap API
const apiKey = "c990adf4aec8ce739518ff417723546d";

// Event listener to add function to existing HTML DOM element
const generate = document.querySelector('#generate');
generate && generate.addEventListener('click', generateHandler);

/* Function called by event listener */
function generateHandler(e) {
    console.log('clicked')
    getWeather()
    .then(postData)
    .then(getProjectData)
}

/* Function to GET Web API Data*/
async function getWeather() {
    console.log('Getting Weather');
}

/* Function to POST data */
async function postData() {
    console.log('Posting Data');
}

/* Function to GET Project Data */
async function getProjectData() {
    console.log('Getting Project Data');
}
