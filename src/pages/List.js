import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Title from '../components/shared/Title'
import WriteButton from '../components/list/WriteButton'

import FilterTab from '../components/list/FilterTab'
import MemoList from '../components/list/MemoList'

// MOCKS에 있는 데이터 기본값으로 넣어주기
// import { MOCKS } from '../constants'

const TitleContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 28px;
    right: 24px;
  }
`

// class => componentsDidMount (최초 랜더링 후 한번 호출되는 함수)

// function => 라이프사이클

const ListPage = () => {
  // TODO: 필터 변경에 따른 diaries 변경
  // 일기에 대한 정보를 가지고 있는 리스트

  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    // 최초에 한번만 동작하는 함수
    // 1. 데이터를 가지고 온다
    // 지금은 로컬스토리지지만 나중에는 서버에서 받아오는 것으로 바꾸면 똑같이 동작한다
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )
    // 2. 가져온 데이터를 state에 저장한다
    setDiaries(diaries)
  }, []) // 감시 대상을 주지 않는다

  return (
    <div>
      <TitleContainer>
        <Title
          title="나의 기록들"
          subTitle={`지난 ${diaries.length}개의 기록이 있습니다.`}
        />
        <WriteButton />
      </TitleContainer>
      <FilterTab />
      <MemoList items={diaries} />
    </div>
  )
}

export default ListPage
