const { Router } = require('express');
const Category = require('../../../models/menu/category');
const Item = require('../../../models/menu/item');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const payload = [];
    const categories = await Category.find();

    for (var i = 0; i < categories.length; i++) {
      payload.push(await Item.find({ category: categories[i].name }));
    }

    if (payload.length <= 0) throw new Error(`No items found!`);
    res.status(200).json(payload);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
