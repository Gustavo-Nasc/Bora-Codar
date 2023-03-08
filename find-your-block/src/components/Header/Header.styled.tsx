import { styled } from "@mui/system";

export const HeaderUI = styled("header")`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6.25rem 0;
    background-color: #F8F8FF;

    & > img {
        position: absolute;
        z-index: 0;
        width: 20%;

        ${({theme}) => theme.breakpoints.down("md")} {
            opacity: 0.4;
            width: 60%;
        }
    }
    
    & > div {
        z-index: 1;
        text-align: center;

        & h2 b {
            color: #6246EA;
        }
    }
`;

export const HeaderForm = styled("form")`
    background-color: #fff;
    border: 1px solid #EAEAEA;
    padding: 2.5rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    border-radius: 0.625rem;

    ${({theme}) => theme.breakpoints.down("md")} {
        flex-direction: column;
        width: max-content;
        margin: 0 auto;

        & button {
            width: 100%;
        }
    }
`;