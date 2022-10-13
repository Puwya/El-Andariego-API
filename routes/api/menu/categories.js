const { Router } = require('express');
const Category = require('../../../models/menu/category');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const payload = await Category.find();
    if (payload.length <= 0) {
      throw new Error('No categories found.');
    }
    res.status(200).json(payload);
  } catch (e) {
    res.status(404).json(e.message);
  }
});

module.exports = router;
