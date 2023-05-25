import { Link } from "react-router-dom";
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../QuizContext';
import { useContext } from 'react';
import './styles.scss';

export const Navigation = ({ answer, index, isAnswered }) => {
    const {
        setErrors
    } = useContext(QuizContext);

    const navigate = useNavigate();

    const handleSubmit = () => {
        Validation(answer, index, navigate, isAnswered, setErrors)
    };

    return (
        <div className='navigation'>
            <Link
                to={index > 2 ? `/question-${index - 2}` : '/'}
                >Back</Link>
            <button className='nav-next-button' onClick={handleSubmit}>Next question
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    );
}