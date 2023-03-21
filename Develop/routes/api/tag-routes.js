const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET ROUTE
router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "products",
      },
    ],
  })
    .then((TagData) => res.json(TagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET ROUTE
router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "products",
      },
    ],
  })
    .then((TagData) => {
      if (!TagData) {
        res
          .status(404)
          .json({ message: "There was no tag found with this id." });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE
router.post("/", (req, res) => {
  // Create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((TagData) => res.json(TagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT ROUTE
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData[0]) {
        res
          .status(404)
          .json({ message: 'There was no tag found with this id.' });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData) {
        res
          .status(404)
          .json({ message: 'There was no tag found with this id.' });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
