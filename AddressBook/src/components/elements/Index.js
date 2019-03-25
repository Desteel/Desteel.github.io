import { StyledButton as Btn } from "./Styles";

const Button = ({ action, children, className, ...rest }) => (
    <Btn type="button" onClick={action} className={className}>
        {children}
    </Btn>
);

export default Button;
