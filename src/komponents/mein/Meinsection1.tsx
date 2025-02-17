import styles from "./Meinsection1.module.css"



type WrapperMainProps = {
  title: string;
}

function Meinsection1({title} : WrapperMainProps) {
  return (
    <>
    <div className={styles.section1}>
      <h1>{title}</h1>
    </div>
    <div className={styles.wrappir}>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>
        <div className={styles.section2}></div>

    </div>
    </>
  )
}

export default Meinsection1