import Router from 'express';

import routerUser from './users'
import routerRole from './role'

const router = Router();


router.use("/user", routerUser);
router.use("role", routerRole)

module.exports = router;