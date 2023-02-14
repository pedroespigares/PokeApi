import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";

function ListaDatos(){

    const [todos, setTodos] = useState([]);
    useEffect(() => { leerDatos() }, []);

    const leerDatos = async () => {
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs // datos de firestore
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
    };

    const escribirDatos = async () => {
        try{
            const docRef = await addDoc(collection(db, "todos"), {
                titulo: "Prueba",
                descripcion: "Prueba de escritura de datos"
            });
            console.log("Document written with ID: ", docRef.id);
            // Una vez escrito el dato, se vuelve a leer la coleccion
            leerDatos();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return <>
        <h1>Lista de datos</h1>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </>
}

export default ListaDatos;

// METODO DE ACCESO A DATOS CON FIREBASE Y DE ESCRITURA DE DATOS