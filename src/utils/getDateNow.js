// 오늘의 날짜를 알려주는 함수
const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토']

function getDateNow() {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()

  const weekday = now.getDay() // 0~6

  return {
    nowDate: `${year}.${month}.${day}`, // ex. 2022.1.23
    weekdayLabel: WEEKDAY_LABELS[weekday], // ex. 일
  }
}

export default getDateNow
