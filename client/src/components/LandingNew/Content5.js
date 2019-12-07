import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';
import {Link} from 'react-router-dom'
import { Button } from 'antd'

class Content5 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
        <Link to={item.children.to} style={{textDecoration:'none'}}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content} style={{fontStyle:'poppins'}} >{item.children.content.children}</p>
          </div>
          </Link>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...dataSource.block}
            >
              {childrenToRender}
              <Link to='/category' style={{fontStyle:'poppins'}}>
                <Button type="primary" shape="circle" style={{height:'100px' ,width:'100px',marginLeft:'100px',marginTop:'38px'}}>
                  See All
                </Button>
              </Link>
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content5;
