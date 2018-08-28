var mongoose = require('mongoose');
var model = require('./model.js');
// Load the full build.
var _ = require('lodash');


const submission = async (client, dbName, collectionName, bucketSize) => {

    const connectionString = 'mongodb://' + client + '/' + dbName;

    (async () => {
        const client = await mongoose.connect(connectionString, { useNewUrlParser: true });

        try {
            var res;
            model.findCategory().then((categoryData) => {
                let category = {}
                categoryData.map(data => {
                    category[data.categoryName] = [...(category[data.categoryName] || []), data._id]
                })
                Object.keys(category).map(data => {
                    let cat = {
                        category: data,
                        id: category[data]
                    }
                    console.log(cat.category);
                    console.log(_.chunk(cat.id, bucketSize));

                })

            }).catch(err => {
                console.log(err);
            })
        }
        finally {
        }
    })().catch(err => console.error(err));
}

exports.connection = submission;