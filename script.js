import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import {getFirestore,doc,onSnapshot,updateDoc,increment} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
const firebaseConfig={apiKey:"AIzaSyB1vl_xYjzyKQY8vgqWTKFw8QDg3mMVrQs",authDomain:"petition-5378c.firebaseapp.com",projectId:"petition-5378c",storageBucket:"petition-5378c.firebasestorage.app",messagingSenderId:"755613810110",appId:"1:755613810110:web:8c787de8ebe7b9dc334def"};
const app=initializeApp(firebaseConfig);const db=getFirestore(app);const ref=doc(db,"petition","counter");
const btn=document.getElementById("signBtn"),count=document.getElementById("count"),bar=document.getElementById("bar");
if(localStorage.getItem("signed")){btn.disabled=true;btn.textContent="✅ Already Signed";}
onSnapshot(ref,s=>{const c=s.data().count;count.textContent=c+" Community Signatures";bar.style.width=Math.min(c/1000*100,100)+"%";});
btn.onclick=async()=>{if(localStorage.getItem("signed"))return;await updateDoc(ref,{count:increment(1)});localStorage.setItem("signed","1");btn.disabled=true;btn.textContent="✅ Thank You!";};