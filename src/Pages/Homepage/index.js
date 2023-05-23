import { Link } from "react-router-dom";
import './styles.scss';

export const Homepage =()=> {
  return (
    <div className='homepage'>
      <h1 className='homepage--heading'>Build a self care routine suitable for you</h1>
      <p className='homepage--description'>Take out test to get a personalised self care routine based on your needs.</p>
     <Link to='/question-1'>Start the quiz</Link>
  </div>
  );
}
