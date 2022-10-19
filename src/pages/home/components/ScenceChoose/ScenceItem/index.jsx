import React, { useRef, useState } from "react";
import { Row, Col, Icon } from "antd";

import styles from "./index.scss";

function Item(){
  const info = {
    title:"【小米】只能开合窗帘3米内直轨道",
    desc:"TH26B智能窗帘",
    price:"¥ 4,675.00"
  }
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img className={styles.img} src="https://lcscm-trantor.oss-cn-shenzhen.aliyuncs.com/082af8ab-01c4-419f-82d7-07963c1a9122.jpg" />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>{info?.title}</div>
        <div className={styles.desc}>{info?.desc}</div>
        <Row className={styles.bot} type="flex" justify="space-between">
          <Col className={styles.price}>{info?.price}</Col>
          <Col className={styles.cart}>
            <Icon type="shopping-cart" className={styles.icon} />
          </Col>
        </Row>
      </div>
    </div>
  )
}
function Index(){
  const videoRef = useRef();
  const [ data ] = useState(new Array(8).fill({}))
  return (
    <div className={styles.scenceItem}>
      <div className={styles.videoBox}>
        <video
          className={styles.video}
          src="https://vdse.bdstatic.com/9fe38fb1fa6e1204d028e1ab43fd0c85.mp4"
          ref={videoRef}
          preload="meta"
          controls
          loop
          muted
          poster="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"
        >
          您的浏览器不支持该视频
        </video>
      </div>
      <div className={styles.itemBox}>
        {data?.map((_d,idx)=><Item key={idx} />)}
      </div>
    </div>
  )
}

export default React.memo(Index);
