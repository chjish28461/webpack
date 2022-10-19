import React from "react";
import ScenceChoose from "@/pages/home/components/ScenceChoose";
import Footer from "@/pages/home/components/Footer";
import Link from "@/pages/home/components/Link";
import styles from  "./app.scss";

function Index (){

    return (
      <div className={styles.wrap}>
          <ScenceChoose />
          <Footer />
          <Link />
      </div>
    )
}

export default React.memo(Index);