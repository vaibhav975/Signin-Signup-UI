const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_submit = document.querySelector("#signup");
const sign_in_submit = document.querySelector("#signin");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrW7reBAyR0wxafNar5vsd3Qe11avRQnw",
    authDomain: "signin-form-63344.firebaseapp.com",
    projectId: "signin-form-63344",
    storageBucket: "signin-form-63344.appspot.com",
    messagingSenderId: "922626821552",
    appId: "1:922626821552:web:b99763ddadda36e01a9a75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");

});

sign_up_submit.addEventListener("click", () => {
    console.log("Sign Up button clicked");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            //var user = userCredential.user;
            alert("user created");
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
});

sign_in_submit.addEventListener("click", () => {
    var email = document.getElementById("email_signin").value;
    var password = document.getElementById("password_signin").value;
    console.log(email);
    console.log(password);  
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("user signed in");
        // ...
    })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        }); 
});