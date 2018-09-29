import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyB_Prgt2pZ4KhINkGfZxmEVmTz0DNAne58",
   authDomain: "smartwash-79154.firebaseapp.com",
   databaseURL: "https://smartwash-79154.firebaseio.com",
   projectId: "smartwash-79154",
   storageBucket: "smartwash-79154.appspot.com",
   messagingSenderId: "7333738443"
 };
const fire = firebase.initializeApp(config);
export default fire;
