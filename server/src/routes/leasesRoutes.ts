import express from 'express';
import { getLeases, getLeasesPayment } from '../controllers/leaseControllers';
import { authMiddleware } from '../middleware/authMiddleware';
const router = express.Router();


router.get('/', authMiddleware(["manager", "tenant"]), getLeases);
router.get('/:id/payements', authMiddleware(["manager", "tenant"]), getLeasesPayment);


export default router;

