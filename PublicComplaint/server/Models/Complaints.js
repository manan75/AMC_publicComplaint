const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({
    category: String,
    description: String,
    urgency: String,
    contact: String

})