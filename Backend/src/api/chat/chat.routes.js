import express from 'express';


const chatRouter = express.Router();
import { getConversationsController, createConversationController } from './controller/chat.controller.js';
// /api/chat
chatRouter.post('/conversations', createConversationController);

chatRouter.get('/conversations', getConversationsController);

export default chatRouter;

