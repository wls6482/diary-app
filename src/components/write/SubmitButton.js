import styled from 'styled-components'

const Conatiner = styled.div`
  padding: 24px;
`

const Button = styled.button`
  width: 100%;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  padding: 17px 0px;
  background-color: #3182f6;
  color: #fff;
  font-weight: bold;

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.3;
  `}
`

const SubmitButton = ({ label, onClick }) => {
  return (
    <Conatiner>
      <Button onClick={onClick}>{label}</Button>
    </Conatiner>
  )
}

export default SubmitButton
