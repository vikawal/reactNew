import { useState, useEffect } from "react";

function useShuffleFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // shuffle the data once during the initial fetch
        setData(shuffleArray(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        let errorCode = "";
        if (error.response && error.response.status) {
          errorCode = error.response.status;
        } else if (error.request) {
          errorCode = "NETWORK_ERROR";
        } else {
          errorCode = "UNKNOWN_ERROR";
        }
        switch (errorCode) {
          case 404:
            setError("Countries data not found.");
            break;
          case "NETWORK_ERROR":
            setError(
              "Network error. Please check your internet connection and try again."
            );
            break;
          case "UNKNOWN_ERROR":
            setError("Unknown error occurred. Please try again later.");
            break;
          default:
            setError("Failed to load data. Please, try again later");
        }
      });
  }, [url]);

  function shuffleArray(arr) {
    let shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  function refetch() {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(shuffleArray(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Failed to fetch data. Please try again later.");
      });
  }

  return { data, loading, error, refetch };
}

export default useShuffleFetch;

// import { useState, useEffect } from "react";

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function useShuffleFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(shuffle(data));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//         setError(error);
//       });
//   }, [url]);

//   return { data, loading, error };
// }

// export default useShuffleFetch;

