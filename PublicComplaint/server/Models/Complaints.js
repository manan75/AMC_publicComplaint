const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({
    category: String,
    description: String,
    urgency: String,
    contact: String

})
const ComplaintModel = mongoose.model("complaints", ComplaintSchema)
module.exports = ComplaintModel