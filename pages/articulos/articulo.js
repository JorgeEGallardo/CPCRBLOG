import Layout from "../../components/Layout";
import { doc, getDoc } from "@firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../utils/firebase";
import { withRouter} from "next/router";
import Router from "next/router";
import { async } from "@firebase/util";
const Articulo = withRouter((props) => {
  const [article, setArticle] = useState([]);
  const id = props.router.query.id;
  useEffect(() => {
    async function fetch() {
      if (id) {
        const docRef = doc(db, "cities", id);
        const docSnap = await getDoc(docRef);
        setArticle({ ...docSnap.data(), id: docSnap.id });
      } else {
        Router.push("/articulos");
      }
    }
    fetch();
  }, []);
  return (
    <Layout>
      <h1 className="text-center">{article.title}</h1>
    </Layout>
  );
});

export default Articulo;
