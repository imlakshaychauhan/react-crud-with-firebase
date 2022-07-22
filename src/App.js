import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, {name: newName, age: Number(newAge)});
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: newAge };
    await updateDoc(userDoc, newFields);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <input
        placeholder="Enter Name"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Gender: {user.Gender}</h1>
            <input type="number" placeholder="Enter new Age Here" onChange={(e) => {
                setNewAge(e.target.value);
            }} />
            <button onClick={() => {updateUser(user.id, user.age)}}>Change Age</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
