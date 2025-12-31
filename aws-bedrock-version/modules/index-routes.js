import { Router } from 'express';
import CONFIG from '#config';

const router = Router();

/* GET home page - directly serve the chat interface */
router.get('/', function(req, res, next) {
	res.render('chat', { app_name: CONFIG.appName || 'Redish' });
});

router.get('/app', function(req, res, next) {
	res.render('chat', { app_name: CONFIG.appName || 'Redish' });
});

export default router;
