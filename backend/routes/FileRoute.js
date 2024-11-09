import express from 'express';
import FileControllers from '../controllers/FileControllers.js';

const FileRouter=express.Router();

FileRouter.post('/create',FileControllers.createfile)

FileRouter.get('/getallfiles',FileControllers.getfiles)

FileRouter.put('/request',FileControllers.requestfile)

FileRouter.put('/approve',FileControllers.approvefile)

FileRouter.put('/update',FileControllers.updateFile)

export default FileRouter;