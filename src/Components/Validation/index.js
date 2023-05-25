export const Validation = (answer, num, navigate, isAnswered, setErrors) => {
    if (answer.length > 0) {
        if (num === 6) {
            if(isAnswered === true){
            navigate(`/result`);
            }
            else{
                setErrors('Please go back and check if you have given an answer to every question')
            }
        }
        else{
            navigate(`/question-${num}`);
        }
    }
    else {
        setErrors('Please select an answer');
    }
};