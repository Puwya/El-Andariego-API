const { Router } = require('express');
const Item = require('../../models/menu/Item');

const router = Router();

router.get('/:item', async (req, res) => {
  const item = req.params.item;
  try {
    const payload = await Item.find({
      name: { $regex: item, $options: 'i' },
    });

    res.status(200).json(payload);
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
