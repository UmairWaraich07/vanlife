// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo3Y5Fo20js-s0dx5EV-vKdx7AHpffWdI",
  authDomain: "vanlife-45600.firebaseapp.com",
  projectId: "vanlife-45600",
  storageBucket: "vanlife-45600.appspot.com",
  messagingSenderId: "644492865270",
  appId: "1:644492865270:web:c56148e89ac8d1776c46d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

const vanCollectionRef = collection(db, "vans");

export const getVans = async () => {
  const querySanpshot = await getDocs(vanCollectionRef);
  const dataArr = querySanpshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  // console.log(dataArr);
  return dataArr;
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};

export const getHostVans = async () => {
  const q = query(vanCollectionRef, where("hostId", "==", "123"));
  const querySanpshot = await getDocs(q);
  const dataArr = querySanpshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
};

// export const getHostVans = async (id) => {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch host vans",
//       status: response.status,
//       statusText: response.statusText,
//     };
//   }
//   const data = await response.json();
//   return data.vans;
//   // const response = await fetch("/api/host/vans");
// };

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
