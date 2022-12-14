const { Router } = require('express');
const Category = require('../../models/menu/category');
const Item = require('../../models/menu/item');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const payload = [];
    const categories = await Category.find();

    for (var i = 0; i < categories.length; i++) {
      const list = await Item.find({ category: categories[i].name });
      payload.push({
        list,
        category: categories[i].name,
        priority: categories[i].priority,
      });
    }

    if (payload.length <= 0) {
      throw new Error('No items found.');
    }
    res.status(200).json(payload);
  } catch (err) {
    // TODO standardize errors
    res.status(404).send(err.message);
  }
});

router.get('/categories', async (req, res) => {
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

router.get('/items/:category', async (req, res) => {
  const category = req.params.category;
  if (!category) {
    throw new Error('Category has to be provided');
  }

  try {
    const payload = await Item.find({ category });
    res.status(200).json(payload);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
