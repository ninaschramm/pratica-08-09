import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;
  await questionService.postQuestion(question)
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const question = +req.params.id;
  const answer = { ...req.body, question }
  await answerService.postAnswer(answer)
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions();
  res.send(questions)
}

export async function getById(req: Request, res: Response) {
  const id: number = +req.params.id;
  const question = await questionService.getQuestionById(id)
  res.send(question)
}
