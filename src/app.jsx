import React,{ useState, useEffect } from "react";
import { Button } from "antd";
import ScenceChoose from "@/pages/home/components/ScenceChoose";
import Footer from "@/pages/home/components/Footer";
import styles from  "./app.scss";

function Index (){

    return (
        <div className={styles.wrap}>
            <ScenceChoose />
            <Footer />
        </div>
    )
}

export default React.memo(Index);