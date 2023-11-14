import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 0;
`

export default function Celebrity() {
  return (
    <PageContainer style={{ fontSize: "32px" }}>
      인물 화면입니다.
    </PageContainer>
  );
}