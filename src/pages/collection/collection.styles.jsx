import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    /* > selects immediate div children */
    margin-bottom: 30px;
  }
`;