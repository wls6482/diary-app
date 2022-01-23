import styled from 'styled-components'
import { FILTERS_LABELS } from '../../constants'

const Container = styled.ul`
  display: flex;
  padding: 10px 24px;
  border-bottom: 1px solid rgba(0, 12, 30, 0.1);
`

const Menu = styled.li`
  padding: 5px;
  color: rgba(3, 24, 50, 0.46);
  font-weight: bold;
  position: relative;

  ${({ active }) =>
    active &&
    `
    color: rgba(0, 12, 30, 0.8);

    &::after {
        content: '';
        left: 0;
        right: 0;
        position: absolute;
        height: 2px;
        bottom: -12px;
        background: rgba(0, 12, 30, 0.8);
      }
  `}
`

const FilterTab = () => {
  /**
   * const [a, b] = [1, 2] ==> a = 1, b = 2
   *
   * [
   *  ["SAD", "슬픔"] => type: SAD, label: 슬픔
   * ]
   */
  return (
    <Container>
      {Object.entries(FILTERS_LABELS).map(([type, label]) => {
        return <Menu key={type}>{label}</Menu>
      })}
    </Container>
  )
}

export default FilterTab
