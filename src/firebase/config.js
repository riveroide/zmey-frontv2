
import { initializeApp } from "firebase/app";
import {getStorage , ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'
const firebaseConfig = {
    apiKey: "AIzaSyAjRTTetrg6W0JE9rCmdurn8odPCDtpCuQ",
    authDomain: "zmeyphotos.firebaseapp.com",
    projectId: "zmeyphotos",
    storageBucket: "zmeyphotos.appspot.com",
    messagingSenderId: "921571487426",
    appId: "1:921571487426:web:46df4566390a583e05155b",
    measurementId: "G-W2MYL9KKF9"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile (file){
   const storageRef= ref(storage,v4())
    await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url

}
