import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleHead = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    display: inline-block;
    height: 38px;
    width: 50px;
    &:hover {
        opacity: 0.6;
}
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;