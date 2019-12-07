import React,{Component} from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import CardGrid from './CardGrid';
import { Icon } from 'antd';


const { TabPane } = Tabs;
const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
      )}
    </Sticky>
  );

class TabComponent extends Component{
    render(){
        return(
            <StickyContainer  >
                <Tabs  defaultActiveKey="1" renderTabBar={renderTabBar}>
                <TabPane  tab={<span><Icon type="read" />Blogs/Articles</span>}key="1" style={{ height: '100%' , margin:0 }}>
                    <CardGrid category={this.props.categoryName} tabCategory="Blog/Article"/>
                </TabPane>
                <TabPane  tab={<span><Icon type="github" />Projects</span>} key="2" style={{height:'100%'}}>
                    <CardGrid category={this.props.categoryName} tabCategory="Project" />
                </TabPane>
                <TabPane tab={<span><Icon type="video-camera" />Videos/Podcasts</span>} key="3" style={{height:'100%'}}>
                    <CardGrid category={this.props.categoryName} tabCategory="Video/Podcast"/>
                </TabPane>
                <TabPane tab={<span><Icon type="desktop" />Presentations/Slides</span>} key="4" style={{height:'100%'}}>
                    <CardGrid category={this.props.categoryName} tabCategory="Presentation/Slides"/>
                </TabPane>
                </Tabs>
            </StickyContainer>
        );
    }
}


export default TabComponent;