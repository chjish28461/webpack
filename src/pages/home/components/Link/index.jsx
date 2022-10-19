import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

function Index(){
  return (
    <div className={styles.link}>
      <div className={styles.ul}>
        <div className={styles.li}>
          <a>商城首页</a>
        </div>
        |
        <div className={styles.li}>
          <a>关于我们</a>
        </div>
        |
        <div className={styles.li}>
          <a>新闻中心</a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Index);