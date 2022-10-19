import React,{ useState, useEffect } from "react";
import { Button } from "antd";
import styles from  "./app.scss";

function Index (){

    const [ num, setNum ] = useState({num:2222})

    useEffect(()=>{
        setNum((pre)=>({
            ...pre,
            num:pre.num+1
        }))
    },[])

    return (
        <div className={styles.wrap}>
            <Button type="primary">1111</Button>
        </div>
    )
}

export default React.memo(Index);