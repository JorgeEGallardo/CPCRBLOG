import styles from '../../styles/Home.module.css'
const TextTitle = (props) => (
<div>
<h2 className={styles.text_title}>{props.title}</h2>
        <div className={styles.item_detail}>
            {props.children}
        </div>
</div>
)
export default TextTitle; 