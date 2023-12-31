const { Schema, model } = require("mongoose");

//Schema/blueprint of contact
const contactSchema = new Schema(
    {
        name: { type: String },
        address: { type: String },
        email: { type: String },
        phone: Number,
        profile: { type: String },
        admin_id: {
            type: Schema.Types.String, ref: "user", required: true
        }
    },
    { versionKey: false, timestamps: true }
);

//Model of contact
const ContactModel = model("contact", contactSchema);

module.exports = ContactModel;