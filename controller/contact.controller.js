const Contact = require("../models/contact.model");

const createContact = (req, res) => {
    let contact = new Contact(req.body);
    contact.save().
    then(() => {
        res.status(201).json({
          ok: true,
          contact,
        });
      })
      .catch(() => {
        res.status(500).json({
          ok: false,
          msg: "Create contact failed",
        });
      });
  };
  const getContact = (req, res) => {
    Contact.find({}, "name phone address email job birthdate landline")
      .then((contacts) => {
        res.json({
          ok: true,
          contacts,
        });
      })
      .catch(() => {
        res.json({
          ok: false,
          msg: "Get contacts failed",
        });
      });
  };

  const getContactByID = (req,res) => {
    Contact.findById({_id:req.params.id})
      .then(contact=>{
        res.status(200).json({
            message:'contact finded',
            contact:contact
        })
    })
    .catch(() => {
        res.json({
          ok: false,
          msg: "Get ID contact failed",
        });
      });
  };

  const deleteContact = (req, res) => {
  Contact.deleteOne({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'contact deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })      
  }

  const updateContact = (req, res) => {
    // console.log(req.body);
    let contact = req.body;
    Contact.findByIdAndUpdate({_id:req.body._id}, contact,{ new: true})
    .then(result=>{
      res.status(200).json({
          message:'contact puted',
          contact:result,
      })
  })
  .catch(err=>{
      res.status(500).json({
          error:err
      })
  })
  }

  
module.exports = {
    createContact,
    getContact,
    getContactByID,
    deleteContact,
    updateContact,
  };