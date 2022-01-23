import styled from 'styled-components'

const Container = styled.div`
  padding: 15px 16px;
`
const Icon = styled.img`
  width: 24px;
`

const Navbar = () => {
  const handleBackButtonClick = () => {
    window.history.back()
  }
  return (
    <Container>
      <Icon
        src="/assets/images/icon-back.png"
        alt="뒤로가기 버튼"
        onClick={handleBackButtonClick}
      />
    </Container>
  )
}

export default Navbar
