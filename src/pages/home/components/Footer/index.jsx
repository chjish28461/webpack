import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

function Index(){
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.logo} src="https://lcscm-trantor-test.oss-cn-shenzhen.aliyuncs.com/lcscm/mall/logo.png" />
          <p className={styles.p}>领潮基于中海在地产行业领先的集采价格</p>
          <p className={styles.p}>优势和42年建材供应链管理经验</p>
        </div>
        <div className={styles.center}>
          <div className={styles.li}>
            <img className={styles.img} />
            <p className={styles.txt}>领潮公众号</p>
          </div>
          <div className={styles.li}>
            <img className={styles.img} />
            <p className={styles.txt}>领潮小程序</p>
          </div>
          <div className={styles.li}>
            <img className={styles.img} />
            <p className={styles.txt}>企业微信号</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.ul}>
            <div className={styles.li}>
              如何入驻
            </div>
            <div className={styles.li}>
              <a>线上注册</a>
            </div>
            <div className={styles.li}>
              <a>企业认证</a>
            </div>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}>
              如何下单
            </div>
            <div className={styles.li}>
              <a>下单流程</a>
            </div>
            <div className={styles.li}>
              <a>订单状态</a>
            </div>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}>
              如何支付
            </div>
            <div className={styles.li}>
              <a>网上支付</a>
            </div>
            <div className={styles.li}>
              <a>银行转账</a>
            </div>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}>
              售后服务
            </div>
            <div className={styles.li}>
              <a>如何退货</a>
            </div>
            <div className={styles.li}>
              <a>如何换货</a>
            </div>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}>
              加入领潮
            </div>
            <div className={styles.li}>
              <a>入围考察</a>
            </div>
            <div className={styles.li}>
              <a>集采招采</a>
            </div>
            <div className={styles.li}>
              <a>入驻领潮</a>
            </div>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}>
              关于领潮
            </div>
            <div className={styles.li}>
              <a>公司介绍</a>
            </div>
            <div className={styles.li}>
              <a>隐私政策</a>
            </div>
            <div className={styles.li}>
              <a>联系我们</a>
            </div>
            <div className={styles.li}>
              <a>新闻中心</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Index);