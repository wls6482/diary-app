import { useState } from 'react'

import styled from 'styled-components'
import Navbar from '../components/shared/Navbar'
// 공통 타이틀
import Title from '../components/shared/Title'

import EmotionCheckbox from '../components/write/EmotionCheckbox'
import TextArea from '../components/write/TextArea'
import SubmitButton from '../components/write/SubmitButton'
import getDateNow from '../utils/getDateNow'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WritePage = () => {
  /*
   ** 새로운 일기를 추가하기 위한 값
   */
  const { nowDate } = getDateNow()
  const [diary, setDiary] = useState({
    id: Date.now(), // 지금 시간
    memo: '',
    emotion: '',
    createdAt: nowDate, // ex. 2022.1.23
  })

  // state를 계속 랜더링하지 않기 위해서 함수를 따로 만든다
  // 다이어리의 memo 값을 바꾼다
  const handleDiaryMemo = (event) => {
    setDiary({
      ...diary, // 기존값 복사
      memo: event.target.value,
    })
  }

  const handleEmotionClick = (emotion) => {
    setDiary({
      ...diary,
      emotion, // emotion: emotion 같은 의미! (key === value)
    })
  }

  const handleSubmit = () => {
    // 1. 이전 데이터를 가져옴
    //  저장된 데이터가 없다면 빈배열('[]')을 쓴다.
    //  getItem은 string으르 리턴한다. 그렇기 때문에 json parse를 이용하여 object로 변환한다.
    const diaries = JSON.parse(
      window.localStorage.getItem('DIARIES_KEY') || '[]',
    )

    // 2.  새로운 데이터를 추가하여 저장
    const newDiaries = [...diaries, diary]
    window.localStorage.setItem('DIARIES_KEY', JSON.stringify(newDiaries))

    //3. 저장 후 뒤로가기
    window.history.back()
  }

  return (
    <div>
      <Container>
        <Navbar />
        <Title
          title={`오늘은 \n어떤 하루를 보내셨나요?`}
          subTitle="TODO 오늘 날짜 해주기"
        />
        <EmotionCheckbox onClick={handleEmotionClick} />
        <TextArea label="기록" onChange={handleDiaryMemo} value={diary.memo} />
        {/* {이상한 데이터가 들어오지 못하도록 memo나 emotion이 선택되지 않도록} */}
        <SubmitButton label="작성하기" onClick={handleSubmit} />
      </Container>
    </div>
  )
}

export default WritePage
