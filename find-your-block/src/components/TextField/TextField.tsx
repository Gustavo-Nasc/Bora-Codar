import { TextFieldUI } from "./TextField.styled";

type TextFieldProps = {
    children: any,
}

export function TextField({ children }: TextFieldProps): JSX.Element {
    return (
        <TextFieldUI>
            {children}
        </TextFieldUI>
    )
}