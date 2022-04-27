import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 20px;

    div{
        flex: 1;
    }
    .information,
    .buttons{
        display: flex;
        justify-content: space-between;
    }
    img{
        max-width: 100px;
        object-fit: cover;
        margin-left: 10px;
    }
`;