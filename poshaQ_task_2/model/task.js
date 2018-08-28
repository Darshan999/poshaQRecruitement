const mongoose = require("mongoose");

//Created schema for task

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  labelId: {
    type: mongoose.Schema.ObjectId,
    ref: "label"
  }
});

const taskModel = mongoose.model("task", taskSchema);
exports.taskModel = taskModel;

//Display all tasks from collection
exports.getTask = () => {
  return taskModel
    .find({})
    .populate("labelName")
    .exec();
};

//Create task
exports.createTask = task => {
  return taskModel.create(task);
};

//Update taskName
exports.editTask = (id, taskName) => {
  return taskModel.findByIdAndUpdate(
    {
      _id: id
    },
    taskName,
    {
      runValidators: true
    }
  );
};

//Delete task
exports.deleteTask = (id, taskName) => {
  return taskModel
    .findByIdAndRemove({
      _id: id
    })
    .exec();
};
