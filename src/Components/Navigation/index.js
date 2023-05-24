import { Link } from "react-router-dom";
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';

export const Navigation = ({ answer, index, isAnswered }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        Validation(answer, index, navigate, isAnswered)
    };

    return (
        <div className='validation'>
            <Link to={index > 2 ? `/question-${index - 2}` : '/'}>back</Link>
            <button className='nav-next-button' onClick={handleSubmit}>Next question
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    );
}