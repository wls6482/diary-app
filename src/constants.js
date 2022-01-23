// 프로젝트에서 사용되는 상수들을 모아놓은 파일
// SAD, GOOD, AWESOME

export const MOCKS = [
  {
    id: 0,
    memo: '오늘은 너무 배가 고팠다.', // 내용
    createdAt: '2021.01.15', // 작성 날짜
    emotion: 'SAD', // 그 날의 기분
  },
  {
    id: 1,
    memo: '오늘은 기분이 그냥 그랬다. 그래도 행복했다.',
    createdAt: '2021.01.14',
    emotion: 'GOOD',
  },
  {
    id: 2,
    memo: '너무 행복한 하루였다.',
    createdAt: '2021.01.13',
    emotion: 'AWESOME',
  },
]

export const FILTER_LABELS = {
  All: '전체',
  SAD: '슬픔',
  GOOD: '좋음',
  AWESOME: '매우 좋음',
}

export const EMOJI_MAPPER = {
  SAD: '😭',
  GOOD: '😄',
  AWESOME: '🥰',
}
