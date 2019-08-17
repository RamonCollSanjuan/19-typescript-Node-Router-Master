"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src -> router -> router.js
const express_1 = require("express");
const router = express_1.Router();
router.get('/master', (req, res) => {
    try {
        res.json({ ok: true,
            msg: 'Hola mundo!!',
            date: new Date()
        });
    }
    catch (err) {
        res.json({ ok: false,
            err
        });
    }
});
exports.default = router;
