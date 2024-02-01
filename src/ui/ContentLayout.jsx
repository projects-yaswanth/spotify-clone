import styled from 'styled-components';

const DisplayLayout = styled.main`
  background-color: #121212;
  border-radius: 10px;
  padding: 10px;
  flex-grow: 1;
`;

function ContentLayout({ children }) {
  return <DisplayLayout>{children}</DisplayLayout>;
}

export default ContentLayout;
