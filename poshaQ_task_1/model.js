var mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String
    }
});

const categoryModel = mongoose.model('categories', categorySchema);
exports.categoryModel = categoryModel;

exports.findCategory = () => {
    return categoryModel.find().sort("categoryName");
}