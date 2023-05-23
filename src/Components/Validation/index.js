export const Validation = (answer, num, navigate, isAnswered) => {

    if (answer.length > 0) {
        if (num === 9) {
            if(isAnswered === true){
            navigate(`/result`);
            }
            else{
                console.log('Please go back and check if you have given an answer for every question')
            }
        }
        else{
            navigate(`/question-${num}`);
        }
    }
    else {
        console.log('Please check if you have ' + answer)
    }
};