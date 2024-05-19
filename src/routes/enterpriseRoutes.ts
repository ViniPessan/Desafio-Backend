import { Router } from 'express';
import { createEnterprise, getEnterprises, getEnterpriseById, updateEnterprise, deleteEnterprise } from '../controllers/enterpriseController';

const router = Router();

router.post('/enterprises', createEnterprise);
router.get('/enterprises', getEnterprises);
router.get('/enterprises/:id', getEnterpriseById);
router.put('/enterprises/:id', updateEnterprise);
router.delete('/enterprises/:id', deleteEnterprise);

export default router;
