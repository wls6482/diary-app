import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import Navbar from '../components/shared/Navbar'
import Title from '../components/shared/Title'

import { EMOJI_MAPPER } from '../constants'

const Contents = styled.div`
  padding: 0 24px;
  line-height: 1.4;
`

const FooterContainer = styled.div`
  text-align: right;
  padding: 0 24px;
  margin-top: 30px;
`

const Button = styled.button`
  background-color: rgba(69, 147, 252, 0.12);
  color: #1b64da;
  padding: 6px 12px;
  border-radius: 6px;
`

// :id => useParams에서 id를 가져오도록 도와준다.

const DetailPage = () => {
  // useParams로 가져운 값을 string으로 판별된다.
  const { id } = useParams() // :id
  const [diary, setDiary] = useState(null)

  useEffect(() => {
    // 지금은 로컬스토리지지만 나중에는 서버에서 불러와서 똑같이 그려주면 된다.
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 배열에서 요소 찾기
    // 찾은 객체를 통으로 return 해주는 함수 find()
    const diary = diaries.find((diary) => {
      // 실제 우리가 저장한 id는 number 타입이기 때문에 타입을 맞춰줘야 한다.
      return diary.id === Number(id)
    })

    setDiary(diary)
  }, [id]) // id가 변할 때 id를 가진 요소를 찾아야한다.

  // 제대로 값을 불러오지 못했다면 화면에 그리지 않는다.
  if (diary == null) {
    return null
  }

  // 이 아래로 들어왔다는 것은 diary 데이터가 있다.
  const { createdAt, emotion, memo, id: currentDiaryId } = diary

  const handleDiaryRemove = () => {
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    const 삭제가반영된다이어리목록 = diaries.filter((diary) => {
      return diary.id !== currentDiaryId
    })

    // 삭제된 요소가 반영된 리스트를 저장
    window.localStorage.setItem(
      'DIARIES_KEY',
      JSON.stringify(삭제가반영된다이어리목록),
    )
    // 뒤로가기
    window.history.back()
  }

  return (
    <div>
      <Navbar />
      <Title title={`${createdAt} ${EMOJI_MAPPER[emotion]}`} />
      <Contents>{memo}</Contents>
      <FooterContainer>
        <Button onClick={handleDiaryRemove}>삭제</Button>
      </FooterContainer>
    </div>
  )
}

export default DetailPage
