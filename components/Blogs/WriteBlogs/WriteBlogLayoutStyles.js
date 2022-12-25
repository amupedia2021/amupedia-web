import ContentEditable from "node_modules/react-contenteditable/lib/react-contenteditable";
import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Sidebar = styled.div`
  background-color: black;
  height: 100%;
  min-width: 250px;
`

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const TitleWrapper = styled.div`
  margin: 15px 0;
  position: relative;
`
export const BlogTitle = styled(ContentEditable)`
  text-align: left;
  outline : none;
  margin: 0;
`
export const TitlePlaceholder = styled.h2`
  color: #a8a8a8;
  margin: 0;
  text-align: left;
  position: absolute;
  height: 100%;
  inset: 0;
  z-index: -1;
`

export const BlogContent = styled.div`
  overflow: auto;
  flex-grow: 1;
  background-color: whitesmoke;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 22px;
`