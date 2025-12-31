import { Router } from 'express';
import { getProductById } from '../domain/product-service.js';
import CONFIG from '#config';

const router = Router();

/* GET product details page (HTML view) */
router.get('/:productId', async function(req, res, next) {
	const { productId } = req.params;
	
	try {
		const product = await getProductById(productId);
		
		if (!product) {
			return res.status(404).render('error', { 
				message: 'Product not found',
				error: { status: 404 }
			});
		}

		res.render('product', { 
			app_name: CONFIG.appName || 'Redish',
			product: product
		});
	} catch (error) {
		console.error('Error loading product page:', error);
		res.status(500).render('error', {
			message: 'Failed to load product',
			error: { status: 500 }
		});
	}
});

export default router;

