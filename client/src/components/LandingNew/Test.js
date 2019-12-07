import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, Avatar } from 'antd';
import { getChildrenToRender } from './utils';
import { Link } from "react-router-dom";

const { Item, SubMenu } = Menu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: undefined,
        };
    }

    phoneClick = () => {
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
        });
    };

    render() {
        const { dataSource, isMobile,isLoggedIn,imageLink, ...props } = this.props;
        const { phoneOpen } = this.state;
        const navData = dataSource.Menu.children;
        const navChildren = navData.map((item) => {
            const { children: a, subitem, ...itemProps } = item;
            if (subitem && a.href) {
                return (
                    <SubMenu
                        key={item.name}
                        {...itemProps}
                        title={
                            <div
                                {...a}
                                className={`header0-item-block ${a.className}`.trim()}
                            >
                                {a.children.map(getChildrenToRender)}
                            </div>
                        }
                        popupClassName="header0-item-child"
                    >
                        {subitem.map(($item, ii) => {
                            const { children: childItem } = $item;
                            const child = childItem.href ? (
                                <a {...childItem}>
                                    {childItem.children.map(getChildrenToRender)}
                                </a>
                            ) : (
                                    <Link {...childItem}>
                                        {childItem.children.map(getChildrenToRender)}
                                    </Link>
                                );
                            return (
                                <Item key={$item.name || ii.toString()} {...$item}>
                                    {child}
                                </Item>
                            );
                        })}
                    </SubMenu>
                );
            }
            else if (a.href && !isLoggedIn) {
                return (
                    <Item key={item.name} {...itemProps}>
                        <a {...a} className={`header0-item-block ${a.className}`.trim()}>
                                    {a.children.map(getChildrenToRender)}
                        </a>
                    </Item>
                );
            }
            else if (a.to && isLoggedIn) {
                return (
                    <Item key={item.name} {...itemProps}>
                        <Link {...a} className={`header0-item-block ${a.className}`.trim()}>
                                    {a.children.map(getChildrenToRender)}
                        </Link>
                    </Item>
                );
            }
            else if (a.to && !isLoggedIn) {
                console.log(a.to)
                if(a.to=='/shareKnowledge'){
                    return (
                        <Item key={item.name} {...itemProps}>
                            <Link to='/loginAlert' className={`header0-item-block ${a.className}`.trim()}>
                                        {a.children.map(getChildrenToRender)}
                            </Link>
                        </Item>
                    );
                }
                else{
                    return (
                        <Item key={item.name} {...itemProps}>
                            <Link {...a} className={`header0-item-block ${a.className}`.trim()}>
                                        {a.children.map(getChildrenToRender)}
                            </Link>
                        </Item>
                    );
                }
                
            }
            
            else if(a.avatar && isLoggedIn){
                return (
                    <SubMenu
                        key={item.name}
                        {...itemProps}
                        title={
                            <div
                                {...a}
                                className={`header0-item-block ${a.className}`.trim()}
                            >
                             <Avatar size="large" style={{marginLeft:'10px'}} src={imageLink} /> 
                                {/* {a.children.map(getChildrenToRender)} */}
                            </div>
                        }
                        popupClassName="header0-item-child"
                    >
                        {subitem.map(($item, ii) => {
                            const { children: childItem } = $item;
                            const child = childItem.href ? (
                                <a {...childItem}>
                                    {childItem.children.map(getChildrenToRender)}
                                </a>
                            ) : (
                                    <Link {...childItem}>
                                        {childItem.children.map(getChildrenToRender)}
                                    </Link>
                                );
                            return (
                                <Item key={$item.name || ii.toString()} {...$item}>
                                    {child}
                                </Item>
                            );
                        })}
                    </SubMenu>
                );
            }

        });
        const moment = phoneOpen === undefined ? 300 : null;
        return (
            <TweenOne
                component="header"
                animation={{ opacity: 0, type: 'from' }}
                {...dataSource.wrapper}
                {...props}
            >
                <div
                    {...dataSource.page}
                    className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                >
                    <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        {...dataSource.logo}
                    >
                        {/* <a href="/"><img width="100%" src={dataSource.logo.children} alt="img" /></a> */}
                        <a href='/' style={{textDecoration:'none',fontStyle:'poppins'}}>
                        <h1 style={{color:'#fff', fontSize:'30px',marginTop:'10px'}}>qaHUB</h1>
                        </a>
                    </TweenOne>
                    {isMobile && (
                        <div
                            {...dataSource.mobileMenu}
                            onClick={() => {
                                this.phoneClick();
                            }}
                        >
                            <em />
                            <em />
                            <em />
                        </div>
                    )}
                    <TweenOne
                        {...dataSource.Menu}
                        animation={
                            isMobile
                                ? {
                                    height: 0,
                                    duration: 300,
                                    onComplete: (e) => {
                                        if (this.state.phoneOpen) {
                                            e.target.style.height = 'auto';
                                        }
                                    },
                                    ease: 'easeInOutQuad',
                                }
                                : null
                        }
                        moment={moment}
                        reverse={!!phoneOpen}
                    >
                        <Menu
                            mode={isMobile ? 'inline' : 'horizontal'}
                            defaultSelectedKeys={['sub0']}
                            theme="dark"
                        >
                            {navChildren}
                        </Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        );
    }
}

export default Header;