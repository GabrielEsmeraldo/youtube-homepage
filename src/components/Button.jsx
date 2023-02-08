import styled from "styled-components"

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1.44rem;
  width: 100%;
  height: 40px;
  border: none;
  padding: 0.5rem 1.69rem;
  cursor: pointer;
  font-size: 0.88rem;
  line-height: 1rem;
  align-items: center;
  color: #030303;

  svg {
    color: #606060;
  }
`

export function SideBarButton({ icon, children }) {
  return (
    <ButtonContainer>{icon}{children}</ButtonContainer>
  )
}