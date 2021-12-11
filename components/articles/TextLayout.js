import styles from '../../styles/Home.module.css'

const TextLayout = (props) => (
  <div>
    {props.title && (<div>
    <h3 className={styles.title}>{props.title}</h3>
    <hr className="bg-danger border-2 border-top border-dark" />
    </div>
    )}
  
    <article className={styles.text_body}>{props.txt}</article>
    {props.children}
  </div>
);

export default TextLayout;
