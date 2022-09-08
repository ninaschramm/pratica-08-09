import * as questionRepository from '../repositories/questionRepository';
import { IQuestionData } from '../types/questionTypes';

export async function getAllQuestions() {
    const questions = await questionRepository.getAllQuestions();
    return questions;
  }

export async function getQuestionById(id: number) {
    const question = await questionRepository.getQuestionById(id) //mudar a query pra colocar o JOIN com as respostas
    return question;
}
  
export async function postQuestion(question: IQuestionData) {
    await questionRepository.postQuestion(question);
}
  
