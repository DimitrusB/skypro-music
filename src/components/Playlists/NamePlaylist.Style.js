import styled from "styled-components"

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const SidebarLink = styled.a`
width: 100%;
height: 100%;
`

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;

  ${({ isLoading }) => isLoading &&
    `
      background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      width: 250px;
      height: 150px;
    `
  }
`
