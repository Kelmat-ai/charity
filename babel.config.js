module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAWT7vWVGdBOLO3wSVjPHuEtxkoU9pWixA",
//     authDomain: "charity-db0f5.firebaseapp.com",
//     projectId: "charity-db0f5",
//     storageBucket: "charity-db0f5.appspot.com",
//     messagingSenderId: "270833711950",
//     appId: "1:270833711950:web:6cc51be0f4a901942e3c1f",
//     measurementId: "G-SBRXSLD2V7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>