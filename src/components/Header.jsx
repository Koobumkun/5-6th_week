import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: rgba(3,37,65,1);
`

const HeaderWrap = styled.div`
  max-width: 1400px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const HeaderLeftWrap = styled.div`
  display: flex;
`

const Ul = styled.div`
  display: flex;
  margin-left: 16px;
`

const Li = styled.div`
  padding: 8px;
  margin-right: 14px;
`
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderLeftWrap>
          <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
            <Ul>
            <Li>
              <Link className="header-nav-item" to="/movie">
                영화
              </Link>
            </Li>
            <Li>
              <Link className="header-nav-item" to="/tv">
                TV 프로그램
              </Link>
            </Li>
            <Li>
              <Link className="header-nav-item" to="/celebrity">
                인물
              </Link>
            </Li>
          </ Ul>
        </HeaderLeftWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
}