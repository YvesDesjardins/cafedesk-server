const express = require('express');
const {
  Op,
} = require('sequelize');
const db = require('../models');
const {
  combineWithRemoteInfo,
} = require('../helpers/combineWithRemote');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    const tags = ['Quiet', 'Outlets', 'Relaxing Music', 'Good For Groups', 'Close To Skytrain', 'Cheap', 'Lively', 'Comfortable Chairs', 'Food', 'Friendly', 'Baked Goods', 'Not Busy', 'Air-Conditioning', 'Well Lit', 'Laptop Friendly', 'Free Wifi'];
    db.Tag.findAll({
        where: {
          name: {
            [Op.or]: tags,
          },
        },
      })
      .then((result) => {
        if (result.length === 0) {
          return Promise.reject('No results found');
        }

        return result;
      })
      .map(tag => tag.get('BusinessId'))
      .reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
      .then((businessIdArray) => {
        db.Business.findAll({
            where: {
              id: {
                [Op.or]: businessIdArray,
              },
            },
          })
          .then(businessResults => combineWithRemoteInfo(businessResults))
          .then((combinedResults) => {
            res.send(combinedResults);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  return router;
};
