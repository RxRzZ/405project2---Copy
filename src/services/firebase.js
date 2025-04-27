import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  deleteDoc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDda_ocdZUveunw3TKIoQsOzLOcaY2h8qQ",
    authDomain: "project-401f9.firebaseapp.com",
    projectId: "project-401f9",
    storageBucket: "project-401f9.firebasestorage.app",
    messagingSenderId: "367332319868",
    appId: "1:367332319868:web:4dd4020f052e6b252e9ff9",
    measurementId: "G-LYG1SW7HPC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Auth Methods
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);
export const registerWithEmail = (email, password) => 
  createUserWithEmailAndPassword(auth, email, password);
export const loginWithEmail = (email, password) => 
  signInWithEmailAndPassword(auth, email, password);

// Firestore Methods
export const getTasks = (userId, callback) => {
  const tasksRef = collection(db, "tasks");
  return onSnapshot(tasksRef, (snapshot) => {
    const tasks = snapshot.docs
      .filter(doc => doc.data().userId === userId)
      .map(doc => ({ id: doc.id, ...doc.data() }));
    callback(tasks);
  });
};

export const addTask = (task) => addDoc(collection(db, "tasks"), task);
export const updateTask = (id, updates) => updateDoc(doc(db, "tasks", id), updates);
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));