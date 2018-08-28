const mongoose = require("mongoose");

//Created schema for label

const labelSchema = mongoose.Schema({
  labelName: {
    type: String,
    required: true
  }
});

const labelModel = mongoose.model("label", labelSchema);
exports.labelModel = labelModel;

//Display all labels from collection
exports.getLabel = () => {
  return labelModel.find({}).exec();
};

//Update labelName
exports.editLabel = (id, labelName) => {
  return labelModel.findByIdAndUpdate(
    {
      _id: id
    },
    labelName,
    {
      runValidators: true
    }
  );
};

//Delete label
exports.deleteLabel = (id, labelName) => {
  return labelModel
    .findByIdAndRemove({
      _id: id
    })
    .exec();
};

//Create label
exports.createLabel = label => {
  return labelModel.create(label);
};
