import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import db from "../../utils/firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import Layaout from "../../components/Layout";
import GroupCard from "../../components/GroupCard";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  function awa(event) {
    setQuery(event.target.value);
  }
  useEffect(
    () =>
      onSnapshot(collection(db, "cities"), (snapshot) =>
        setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <Layaout>
      <input onChange={awa} />

      <h1 className="text-center my-4">Articulos</h1>
      <div>
        <GroupCard
          cards={articles.filter((val) => {
            if (query == "") {
              return val;
            } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
              return val;
            }
          })}
        ></GroupCard>
      </div>
    </Layaout>
  );
}

export default Articles;
