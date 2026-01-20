
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqH2ZxyqbS6WshXwi2M7LfyZ-EXIneQrs",
  authDomain: "voice-of-college-project.firebaseapp.com",
  projectId: "voice-of-college-project",
  storageBucket: "voice-of-college-project.appspot.com",
  messagingSenderId: "851312399000",
  appId: "1:851312399000:web:9b56548d3c732339d136ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
