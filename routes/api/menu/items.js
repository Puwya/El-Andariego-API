const { Router } = require('express');
const Item = require('../../../models/menu/item');
const Category = require('../../../models/menu/category');

const router = Router();

router.get('/:category', async (req, res) => {
  const category = req.params.category;
  if (!category) throw new Error('Category has to be provided');

  try {
    const payload = await Item.find({ category });
    if (payload.length <= 0) {
      throw new Error(`Category: ${category} not found.`);
    }
    res.status(200).json(payload);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
