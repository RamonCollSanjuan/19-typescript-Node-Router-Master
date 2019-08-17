// src -> router -> router.js
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/master', (req: Request, res: Response) => {

        try {
                res.json(
                        { ok:true,
                          msg:'Hola mundo!!',
                          date: new Date()
                        }
                );        
        } catch (err) {
                
                res.json(
                        { ok:false,
                          err 
                        }
                );
        }
        
});

export default router;
