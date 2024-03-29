const { Schema, model,Types} = require("mongoose");


const schema = Schema({
    body: { type: String, required: [true, 'body is required']},
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'createdByModel'
    },
    createdByModel: {
        type: String,
        required: true,
        enum: ['doctor', 'parent', 'hospital']
    },
    postID:{type: Types.ObjectId, ref:"post"}
},{ timestamps: true, toJSON: { virtuals: true }, toObject:{ virtuals: true } })

schema.virtual('replies',{
    ref:'reply',
    localField: '_id',
    foreignField: 'commentID'
});
schema.pre(/^find/, function () {
    this.populate('replies' , '');
    this.populate({
        path: 'createdBy',
        select: 'name ' // Exclude the childerns field
    });
});

module.exports = model('comment' , schema);