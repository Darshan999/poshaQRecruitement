const express = require("express");
const router = express.Router();
const labelModel = require("../model/label");
const taskModel = require("../model/task");

// CRUD Operations for Labels..

router.get("/display_label", function(req, res, next) {
  labelModel
    .getLabel()
    .then(labelData => {
      if (labelData && labelData.length) {
        res.send(labelData); //Display data from collection
      }
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/create_label", function(req, res, next) {
  labelModel
    .createLabel(req.body)
    .then(labelData => {
      res.send(labelData);
    })
    .catch(err => {
      res.send(err);
    });
});

router.delete("/delete_label/:id", function(req, res, next) {
  labelModel
    .deleteLabel(req.params.id)
    .then(labelData => {
      res.send("Successfully Deleted");
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/update_label/:id", function(req, res, next) {
  labelModel
    .editLabel(req.params.id, req.body)
    .then(labelData => {
      res.send(labelData);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/move_label/:id", function(req, res, next) {
  labelModel
    .editLabel(req.params.id, req.body)
    .then(labelData => {
      res.send(labelData);
    })
    .catch(err => {
      res.send(err);
    });
});

// CRUD operations for Task..

router.get("/display_task", function(req, res, next) {
  taskModel
    .getTask()
    .then(taskData => {
      if (taskData && taskData.length) {
        res.send(taskData); //Display data from collection
      }
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/create_task", function(req, res, next) {
  taskModel
    .createTask(req.body)
    .then(taskData => {
      res.send(taskData);
    })
    .catch(err => {
      res.send(err);
    });
});

router.delete("/delete_task/:id", function(req, res, next) {
  taskModel
    .deleteTask(req.params.id)
    .then(taskData => {
      res.send("Successfully Deleted");
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/update_task/:id", function(req, res, next) {
  taskModel
    .editTask(req.params.id, req.body)
    .then(taskData => {
      res.send(taskData);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/move_task/:id", function(req, res, next) {
  taskModel
    .editTask(req.params.id, req.body)
    .then(taskData => {
      res.send(taskData);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
