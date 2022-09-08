import { IQuestionData } from '../types/questionTypes';
import { prisma } from '../config/database'


export async function getAllQuestions(){
    return ( prisma.questions.findMany() )
}

export async function getQuestionById(id: number) {
    return prisma.questions.findUnique({
        where: { id },
        include: {
            answers: true,
        }
      });
}

export async function postQuestion(question: IQuestionData) {    
  await prisma.questions.create({ data: question });
}
