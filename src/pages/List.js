import styled from 'styled-components'
import { useState, useEffect, useMemo } from 'react'

import Title from '../components/shared/Title'
import WriteButton from '../components/list/WriteButton'
import FilterTab from '../components/list/FilterTab'
import MemoList from '../components/list/MemoList'
import { useFilterContext } from '../contexts/filter'

// import { MOCKS } from '../constants'

const TitleContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 28px;
    right: 24px;
  }
`

const ListPage = () => {
  // 일기(메모)에 대한 정보를 가지고 있는 리스트
  const [diaries, setDiaries] = useState([])

  const { filter, setFilter } = useFilterContext()

  // class 컴포넌트는 componentDidMount 이라는 라이프사이클이 있음
  // 함수형 컴포넌트에는 라이프사이클이 없음 -> useEffect 사용
  // useEffect(콜백, 감시대상) : 최초 실행 후 감시대상이 변할때마다 콜백함수를 실행한다.
  // 감시대상을 비워두면 최초 1회만 실행되는 함수가 된다.
  useEffect(() => {
    // 1. 데이터를 가지고 온다.
    // 현재는 로컬스토리지 -> 서버에서 받아오는 것과 동일한 과정
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 2. 가져온 데이터를 state에 저장한다.
    setDiaries(diaries)
  }, [])

  const handleFilterClick = (filterType) => {
    // 상자에 들어있는 필터 값을 바꾼다
    setFilter(filterType)
  }

  // 감시 대상이 바뀌지 않으면 콜백은 동작하지 않는다.
  // useMomo(콜백, 감시대상)
  // useMemo(콜백, 필터) => 필터가 변경되었을 때 필터가 적용된 리스트를 얻는다.
  const filteredDiaries = useMemo(() => {
    switch (filter) {
      case 'ALL': {
        return diaries
      }
      case 'SAD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'SAD'
        })
      }
      case 'GOOD': {
        return diaries.filter((diary) => {
          return diary.emotion === 'GOOD'
        })
      }
      case 'AWESOME': {
        return diaries.filter((diary) => {
          return diary.emotion === 'AWESOME'
        })
      }
      default: {
        return diaries
      }
    }
  }, [filter, diaries])
  return (
    <div>
      <TitleContainer>
        <Title
          title="나의 기록들"
          subTitle={`지난 ${diaries.length}개의 기록이 있습니다.`}
        />
        <WriteButton />
      </TitleContainer>
      <FilterTab selectedFilter={filter} onClick={handleFilterClick} />
      <MemoList items={filteredDiaries} />
    </div>
  )
}

export default ListPage
