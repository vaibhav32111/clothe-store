import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey:"AIzaSyAoRUCvuYB7VEIk0_C2y_4usSYWA-o6_Qo",
    authDomain: "stylespot-efd4d.firebaseapp.com",
    projectId:"stylespot-efd4d",
    storageBucket:"stylespot-efd4d.appspot.com",
    messagingSenderId:"437968702023",
    appId:"1:437968702023:web:e00b718bb754859284bf62",
    measurementId: "G-RFTC5ZSKVF"

}
// Initialize firebase
const app = initializeApp(firebaseConfig)
const analytics= getAnalytics(app)

const auth=getAuth()
export { app, auth }
