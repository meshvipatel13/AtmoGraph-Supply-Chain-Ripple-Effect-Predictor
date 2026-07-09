import styles from "./NodeDetails.module.css";

const NodeDetails = () => {

    return(

        <div className={styles.card}>

            <h2>Node Details</h2>

            <div className={styles.placeholder}>

                Select a node to view details

            </div>

        </div>

    )

}

export default NodeDetails;