import styled from "styled-components";

export const PostCardContainer = styled.div`
    width: 26rem;
    height: 16.25rem;

    margin-bot: 2rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;

`

export const PostCardHeader = styled.header`

    display: flex;
    justify-content: space-between;

    > span {
        font-size: 14px;
    }

`

export const PostCardContent = styled.div`

overflow: hidden;

`