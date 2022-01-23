import styled from 'styled-components'

const Container = styled.div`
  padding: 25px 24px;
`

const TitleText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: rgba(0, 12, 30, 0.8);
  white-space: pre-wrap;
  line-height: 1.2;
`

const SubTitleText = styled.div`
  color: rgba(3, 24, 50, 0.46);
  font-size: 13px;
  margin-top: 3px;
`
const Title = ({ title, subTitle }) => {
  return (
    <Container>
      {title ? <TitleText>{title}</TitleText> : null}
      {subTitle ? <SubTitleText>{subTitle}</SubTitleText> : null}
    </Container>
  )
}

export default Title
