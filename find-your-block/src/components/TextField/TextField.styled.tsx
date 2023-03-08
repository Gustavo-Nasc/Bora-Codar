import { styled } from "@mui/system";

export const TextFieldUI = styled("div")`
  background-color: #f4f4ff;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem 0.75rem 2.125rem;

  position: relative;

  & > svg {
    position: absolute;
    left: 0.875rem;
  }

  & fieldset {
    border: none;
  }
`;
