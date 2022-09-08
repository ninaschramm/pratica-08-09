import { prisma } from '../config/database';
import { IAnswerData } from '../types/answerTypes';


export async function postAnswer(answer: IAnswerData) {        
    await prisma.answers.create({ data: answer });
  }