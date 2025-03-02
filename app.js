import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCpm90VWm7a4aHqp9MDIWpNPVI4wvtqcNs",
    authDomain: "sign-up-login-form-6d4dd.firebaseapp.com",
    projectId: "sign-up-login-form-6d4dd",
    storageBucket: "sign-up-login-form-6d4dd.firebasestorage.app",
    messagingSenderId: "724693526328",
    appId: "1:724693526328:web:e6094c2f1a3c18588d83cd",
    measurementId: "G-KGPPF8BSEC"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  document.getElementById('signupBtn')?.addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth,email,password)
    .then(() =>{
      alert("signup successfully");
      window.location.href = "welcome.html";
    })
    .catch(error => document.getElementById('message').innerText=error.message);
  });
  document.getElementById("loginBtn")?.addEventListener("click",() =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
        alert("Login Successful");
window.location.href = "welcome.html";
})
.catch(error => document.getElementById("message").innerText = error.message);
    });
    export function logout() {
        signOut(auth)
        .then(() => {
        alert("Logged out");
        window.location.href = "index.html";
        })
        .catch(error => console.error("Logout Error:", error));
        }
        document.getElementById("logoutBtn")?.addEventListener("click", logout);
