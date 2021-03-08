export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await(await fetch(endpoint)).json()
    console.log(data);
<<<<<<< HEAD
    console.log('staging2');
=======
    console.log('1');
>>>>>>> 4e63031df058499ab55b4c6677b18926cb84fd79
    
}