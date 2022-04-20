    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAdbJ4J80HPqyGrJLbBFAcUQYrZ4HHx-Po",
      authDomain: "guilletiendacesde.firebaseapp.com",
      projectId: "guilletiendacesde",
      storageBucket: "guilletiendacesde.appspot.com",
      messagingSenderId: "280490967496",
      appId: "1:280490967496:web:8d88dc5fd1e427c2ea80fd",
      measurementId: "G-GXHRZ2ZML2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
