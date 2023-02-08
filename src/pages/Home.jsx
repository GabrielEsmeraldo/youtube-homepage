import { Fragment } from "react";
import styled from "styled-components";
import { Content } from "../components/Content";
import Navbar from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const SideToSideAligment = styled.div`
  display: flex;
`

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <SideToSideAligment>
        <SideBar />
        <Content />
      </SideToSideAligment>
    </Fragment>

  )
}