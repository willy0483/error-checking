//errorchecking with logic operator

//Denne funktion skal checkes for om den modtager data
myFunction();

function myFunction(myData) {
  if (myData) {
    console.log(myData);
  } else {
    console.log("error: no data");
  }
}

// denne funktion skal checkes for modtagelse af en array
myArrayFunction();

function myArrayFunction(myData) {
  if (Array.isArray(myData)) {
    myData.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("error: data is not an array");
  }
}

// error checking in fetch
// http response codes see here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses

//her skal du checke om vi har et respons der er ok
function getData(myUrl) {
  fetch(myUrl)
    .then((response) => {
      if (!response.ok) {
        console.log("error: status is not ok");
        console.log(response);
      } else {
        console.log("status is  ok");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.log("my error: " + error);
    });
}

// getData("https://dummyjson.com/http/429");
getData("https://dummyjson.com/products/1");
