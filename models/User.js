import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      require:true
    },
    OrgName: {
      type: String,
      require:true
    },
    GstNo: {
      type: String,
      require:true
    },
    Address: {
      type: String,
      require:true
    },
    mobileNo: {
      type: Number,
      require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }


  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
