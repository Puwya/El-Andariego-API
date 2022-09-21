const { Router } = require('express');
const Item = require('../../models/item');

const router = Router();

router.get('/:item', async (req, res) => {
  const item = req.params.item;
  try {
    const query = await Item.find({
      name: { $regex: item, $options: 'i' },
    });
    res.status(200).json(query);
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
