import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import TextLayout from "../components/articles/TextLayout";
import Image from "next/image";
import { addUser } from "../utils/users";
import { useEffect } from "react";
import TextTitle from "../components/articles/TextTitle";
export default function Home() {
  useEffect(() => {
    addUser(
      {
        name: "Duranyork", 
        country: "Mexico",
        state: "Durassngels"
      },
      addUser()
    );
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>CPCR Wiki</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Base de conocimiento <span className={styles.bolt}> CPCR </span>
            <hr />
            <motion.div
              animate={{ y: [0, 100, 0] }}
              transition={{
                duration: 2.5,
                times: [0, 0.2, 0.5, 0.8],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <FaArrowAltCircleDown className={"text-primary mt-4"} />
            </motion.div>
          </h1>
        </main>
        <TextTitle title={array.title}>
          <Image
            src={"/images/" + array.image}
            alt="Current Image"
            layout={"fill"}
            objectFit={"contain"}
          />
        </TextTitle>
        <div>
          {array.articles.map((post) => (
            <TextLayout
              key={post.image + post.title}
              title={post.title}
              txt={post.txt}
            >
              {post.image && (
                <div className={styles.item_detail}>
                  <Image
                    src={"/images/" + post.image}
                    alt="Current Image"
                    layout={"fill"}
                    objectFit={"contain"}
                  />
                </div>
              )}
            </TextLayout>
          ))}
        </div>
        <footer className={styles.footer}></footer>
      </Layout>
    </div>
  );
}
