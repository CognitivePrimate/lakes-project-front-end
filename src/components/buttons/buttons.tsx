import { Link } from 'react-router-dom';

interface Props {
    className: string;
    onClick?: () => {};
    to: string;
    text: string;


}

const Button = ({className, onClick, to, text}: Props) => {

    return (
        <>
            <Link to={to}>
                <button className={className} onClick={onClick}>{text}</button>
            </Link>
        </>
    )
}

export default Button;