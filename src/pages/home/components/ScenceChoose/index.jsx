import React, { useCallback, useRef, useState } from "react";
import { Tabs, Carousel, Icon } from "antd";
import ScenceItem from "./ScenceItem";
import styles from "./index.scss";

const { TabPane } = Tabs;
function Index(){
  const swiperRef = useRef()
  const [ lists ] = useState([
    {
      id:1,
      title:"住宅装修"
    },
    {
      id:2,
      title:"商业办公"
    },
    {
      id:3,
      title:"学校教育"
    },
    {
      id:4,
      title:"高端酒店"
    },
    {
      id:5,
      title:"抗疫设施"
    }
  ]);
  const handlePrev = () => {
    swiperRef.current.prev()
  }
  const handleNext = () => {
    swiperRef.current.next()
  }
  const renderTabBar = useCallback((props, DefaultTabBar)=>{
    return (
      <div className={styles.tabbar}>
        <div className={styles.title}>场景选购</div>
        <DefaultTabBar {...props} />
      </div>
    )
  },[])
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Tabs 
          defaultActiveKey="1"
          className={styles.tabs}
          renderTabBar={renderTabBar}
        >
          {lists?.map((d)=>{
            return (
              <TabPane tab={d?.title} key={d?.id}>
                <div className={styles.carouselContainer}>
                  <Carousel 
                    className={styles.carousel}
                    dots={false}
                    ref={swiperRef}
                  >
                    <ScenceItem />
                    <ScenceItem />
                    <ScenceItem />
                  </Carousel>
                  <div className={styles.prev} onClick={() => handlePrev()}>
                    <Icon type='left' />
                  </div>
                  <div className={styles.next} onClick={() => handleNext()}>
                    <Icon type='right' />
                  </div>
                </div>
              </TabPane>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}

export default React.memo(Index);