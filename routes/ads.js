const express = require('express');
const router = express.Router();

// Пример данных объявлений
const ads = [
  {
    id: 1,
    title: 'Продам велосипед',
    description: 'Почти новый, ни разу не падал!',
    price: 5000
  },
  {
    id: 2,
    title: 'Сдам квартиру',
    description: 'Уютная студия в центре города',
    price: 30000
  }
];

// GET /api/ads — получить все объявления
router.get('/', (req, res) => {
  res.json(ads);
});

module.exports = router;
