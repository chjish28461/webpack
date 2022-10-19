import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

function Index(){
  return (
    <>
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
                线上注册
              </div>
              <div className={styles.li}>
                企业认证
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.li}>
                如何下单
              </div>
              <div className={styles.li}>
                下单流程
              </div>
              <div className={styles.li}>
                订单状态
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.li}>
                如何支付
              </div>
              <div className={styles.li}>
                网上支付
              </div>
              <div className={styles.li}>
                银行转账
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.li}>
                售后服务
              </div>
              <div className={styles.li}>
                如何退货
              </div>
              <div className={styles.li}>
                如何换货
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.li}>
                加入领潮
              </div>
              <div className={styles.li}>
                入围考察
              </div>
              <div className={styles.li}>
                集采招采
              </div>
              <div className={styles.li}>
                入驻领潮
              </div>
            </div>
            <div className={styles.ul}>
              <div className={styles.li}>
                关于领潮
              </div>
              <div className={styles.li}>
                公司介绍
              </div>
              <div className={styles.li}>
                隐私政策
              </div>
              <div className={styles.li}>
                联系我们
              </div>
              <div className={styles.li}>
                新闻中心
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  )
}

export default React.memo(Index);