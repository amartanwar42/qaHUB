import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="footer"
            
            // {...dataSource.copyright}
          >
            ©2019 <a href="https://www.thoughtworks.com">ThoughtWorks</a> All Rights Reserved
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
