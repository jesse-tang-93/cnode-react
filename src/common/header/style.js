import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height:50px;
  line-height:50px;
  background:#444;
  .logo{
    width:120px;
    padding: 3px 0;
    height: 34px;
    line-height: 34px;
    display:inline-block;
    float:left;
    margin-right:20px;
  }
  .header-box{
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
    box-sizing: border-box;
    overflow:hidden;
    padding:5px;
    .search-box{
      float:left;
      position:relative;
      .search-icon{
        position:absolute;
        top:-2px;
        left:6px;
      }
    }
  }
`
export const SearchWrapper = styled.input`
  display:inline-block;
  padding-left:22px;
  height:24px;
  color: #666;
  border: 0;
  margin-top: 9px;
  transition: all .5s;
  outline:none;
  float:left;
  width:210px;
  border-radius:12px;
  background:#888;
  &:hover{
    background:#fff;
  }
`
export const NavWrapper = styled.div`
  float:right;
  ul{
    overflow:hidden;
  }
`
export const NavItem = styled.li`
  float:left;
  color:#ccc;
  line-height:20px;
  font-size:13px;
  padding: 10px 15px;
  a{
    color:#fff;
  }
`
