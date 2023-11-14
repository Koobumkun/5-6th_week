import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 0;
`

export default function Home() {
  const navigate = useNavigate();

  const [word, setWord] = useState('');


  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  }

  return (
    <PageContainer style={{ fontSize: "32px" }}>
      홈화면입니다.
      <input value={word} onChange={(e) => setWord(e.target.value)}/>
      <button onClick={onClickWord}>확인</button>
    </PageContainer>
  );
}