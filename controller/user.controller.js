const User = require("../models/user.model");

const createUser = (req, res) => {
  const user = new User(req.body);
  user.save().then(() => {
      res.json({
        ok: true,
        user,
      });
    })
    .catch(() => {
      res.json({
        ok: false,
        msg: "Create user failed",
      });
    });
};
const getUser = (_req, res) => {
  User.find({}, "name email")
    .then((users) => {
      res.json({
        ok: true,
        users,
      });
    })
    .catch(() => {
      res.json({
        ok: false,
        msg: "Get user failed",
      });
    });
  };

const authenticarUser = (_req, res) => {
  let {email, pass} = _req.body
  User.find({email, pass}, "_id name role")
    .then((user) => {
      res.json({
        ok:true,
        user,
      });
    })
    .catch(() =>{
      res.json({
        ok: false,
        msg: "Get user failed",
      });
    });
  };

  const deleteUser = (_req, res) => {
    User.deleteOne({_id:_req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'User deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
  };

  const updateUser = (_req, res) => {
    // console.log(_req.body);
    let user = _req.body;
    User.findByIdAndUpdate({_id:_req.body._id}, user,{ new: true})
    .then(result=>{
      res.status(200).json({
          message:'user puted',
          user:result,
      })
    })
    .catch(err=>{
      res.status(500).json({
          error:err
      })
    })
  };

module.exports = {
  getUser,
  createUser,
  authenticarUser,
  deleteUser,
  updateUser,
};
