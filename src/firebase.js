// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
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
