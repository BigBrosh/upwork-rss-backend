import express from 'express';
import { JobService } from "../../services/JobService";

const router = express.Router();

router.get('/list', JobService.listJobs);
router.delete('/:jobId', JobService.deleteJob);

export default router;
