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
           <a href="https://choosealicense.com/licenses/mit/" alt="/">MIT License</a> ©2019  qaHUB
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
