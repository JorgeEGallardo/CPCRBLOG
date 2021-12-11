
import styles from '../../styles/Home.module.css'
import React,{useState,useEffect} from 'react';
import db from "../../utils/firebase" 
import { collection, onSnapshot } from '@firebase/firestore'
import Layaout from "../../components/Layout"
import GroupCard from '../../components/GroupCard';
function Articles() {  
const [articles, setArticles] = useState([])
  useEffect(
    () => 
    onSnapshot((collection(db,'cities')),(snapshot) => 
      setArticles(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      )
    ), []
  )
  return (
    <Layaout>
      <h1 className="text-center my-4">Articulos</h1>
    <div >
      {console.log(articles)}
   <GroupCard cards={articles}></GroupCard>
    </div>
    </Layaout>
  );
}

export default Articles;