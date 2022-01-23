import styled, { css } from 'styled-components'
/*
사용법
  sylted.<태그>
  styled.div`
  color: red;
`
red라는 컬러를 가진 div가 만들어짐
*/

// 공통 믹스인 = 태그를 가지지 않음
const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// 스타일 컴포넌트 만드는 법
const Container = styled.div`
  ${centerFlex}
  font-weight: 600;
  color: #fff;

  ${({ width }) => {
    return width ? `width: ${width}px;` : ''
  }}
  ${({ height }) => {
    return height ? `height: ${height}px;` : ''
  }}
  ${({ color }) => {
    return color ? `background-color: ${color}` : ''
  }}
`
// 상속
// Container의 스타일을 물려받은 Container2 (div)
// const Container2 = styled(Container)`
//   color: red;
// `
const Box = ({ width, height, color, text }) => {
  return (
    <Container width={width} height={height} color={color}>
      {text}
    </Container>
  )
}

export default Box
