// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBRHxWepp00vAByBnrcdULNsNOMRbYmJM",
  authDomain: "blog-adv-leo.firebaseapp.com",
  projectId: "blog-adv-leo",
  storageBucket: "blog-adv-leo.appspot.com",
  messagingSenderId: "1003218231348",
  appId: "1:1003218231348:web:41e3fdc7e237f8aaac6a61",
  measurementId: "G-MVSDTHZPVK"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);
const auth = getAuth(app);

// Função para buscar todos os posts
export const fetchPosts = async () => {
  const postsCollection = collection(db, "posts");
  const postSnapshot = await getDocs(postsCollection);
  const postList = postSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return postList;
};

export { db, auth };
