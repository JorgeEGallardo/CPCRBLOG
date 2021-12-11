
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
      setArticles(snapshot.docs.map((doc) => doc.data())
      )
    ), []
  )
  return (
    <Layaout>
    <div >
      {console.log(articles)}
   <GroupCard cards={articles}></GroupCard>
      <ul>
        {articles.map((article) => (
          <l1 key={article.id}>
              <h1 > {article.title} </h1>
          </l1>
        ))}
      </ul>
    </div>
    </Layaout>
  );
}

export default Articles;