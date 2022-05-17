import React,{ useState, useEffect } from "react";
import styles from  "./app.scss";
import "./demo.scss";

function Index (){

    const [ num, setNum ] = useState({num:2222})

    useEffect(()=>{
        setNum((pre)=>({
            ...pre,
            num:pre.num+1
        }))
    },[])

    return (
        <>
            <div className={styles.aaa}>
                <div className="bbb">{num?.num}</div>
            </div>
            <div className="bbb">{num?.num}</div>
        </>
    )
}

export default React.memo(Index);