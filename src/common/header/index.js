import React , { Component } from 'react'
import {
  HeaderWrapper,
  SearchWrapper,
  NavWrapper,
  NavItem
} from './style'
class Header extends Component{
  render(){
    return (
      <HeaderWrapper>
        <div className="header-box">
          <img className="logo" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logos"/>
          <div className="search-box">
            <SearchWrapper>
            </SearchWrapper>
            <i className="iconfont icon-icon31 search-icon"></i>
          </div>
          <NavWrapper>
            <ul>
              <NavItem>首页</NavItem>
              <NavItem>新手入门</NavItem>
              <NavItem>Api</NavItem>
              <NavItem>关于</NavItem>
              <NavItem>注册</NavItem>
              <NavItem>登录</NavItem>
            </ul>
          </NavWrapper>
        </div>
      </HeaderWrapper>
    )
  }
}
export default Header
