import { useState } from 'react'
import Box from '../components/banner/Box'

/*
useState의 사용법
const [상태값, 상태값을 변경할 수 있는 함수] = useState()
*/

const BannerPage = () => {
  // 넓이
  const [width, setWidth] = useState(0)
  // 높이
  const [height, setHeight] = useState(0)
  // 컬러
  const [color, setColor] = useState('#fff')
  // 텍스트
  const [text, setText] = useState('Hello Banner')

  return (
    <div>
      <div>
        <div>
          <label>넓이</label>
          <input
            placeholder="넓이"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value)
            }}
          />
        </div>
        <div>
          <label>높이</label>
          <input
            placeholder="높이"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value)
            }}
          />
        </div>
        <div>
          <label>색상</label>
          <input
            placeholder="색상"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </div>
        <div>
          <label>텍스트</label>
          <input
            placeholder="텍스트"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </div>
      <Box width={width} height={height} color={color} text={text} />
    </div>
  )
}

export default BannerPage
