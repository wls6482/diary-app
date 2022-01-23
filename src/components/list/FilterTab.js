import styled from 'styled-components'

import { FILTER_LABELS } from '../../constants'

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
const FilterTab = ({ selectedFilter, onClick }) => {
  return (
    <div>
      <Container>
        {Object.entries(FILTER_LABELS).map(([type, label]) => {
          return (
            <Menu
              key={type}
              active={selectedFilter === type}
              onClick={() => {
                onClick(type)
              }}
            >
              {label}
            </Menu>
          )
        })}
        <Menu />
      </Container>
    </div>
  )
}

export default FilterTab
