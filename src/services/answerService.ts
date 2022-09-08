import * as answerRepository from '../repositories/answerRepository';
import { IAnswerData } from '../types/answerTypes';

  
export async function postAnswer(answer: IAnswerData) {
    await answerRepository.postAnswer(answer)
}
  

