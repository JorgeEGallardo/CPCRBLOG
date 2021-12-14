import Layout from "../../components/Layout";
import { doc, getDoc } from "@firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../utils/firebase";
import { withRouter } from "next/router";
import Router from "next/router";
import TextLayout from "../../components/articles/TextLayout";
import Image from "next/dist/client/image";
import styles from "../../styles/Home.module.css";

const Articulo = withRouter((props) => {
  const [article2, setArticle] = useState([]);
  const [articles2, setArticles] = useState([]);
  const id = props.router.query.id;
  useEffect(() => {
    fetch();
  }, []);
  async function fetch() {
    if (id) {
      const docRef = doc(db, "cities", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle({ ...docSnap.data(), id: docSnap.id });
        if (docSnap.data().articles)
          setArticles({ ...docSnap.data().articles });
        console.log(article2, "ewsdae");
      }
    } else {
      Router.push("/articulos");
    }
  }
  return (
    <Layout>
      <h1 className="text-center">{article2.title}</h1>
      {Object.keys(articles2).map((keyName, i) => (
        <TextLayout
          key={articles2[keyName].image + articles2[keyName].title}
          title={articles2[keyName].title}
          txt={articles2[keyName].txt}
        >
          {articles2[keyName].image && (
            <div className={styles.item_detail}>
              <Image
                src={"/images/" + articles2[keyName].image}
                alt="Current Image"
                layout={"fill"}
                objectFit={"contain"}
              />
            </div>
          )}
        </TextLayout>
      ))}
    </Layout>
  );
});

export default Articulo;
