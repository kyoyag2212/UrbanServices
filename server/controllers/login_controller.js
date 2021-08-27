const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "urbanservices.db",
  },
  useNullAsDefault: true,
});


exports.usersAll = async (req, res) => {

  knex
    .select("user_id","username","user_type","email","u_phoneno")
    .from("users")
    .then((userData) => {
   
      res.json(userData);
    })
    .catch((err) => {
   
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.getUserDetails = async (req, res) => {
 
  knex("users")
    .where({ username: req.body.username })
    .select("user_id", "user_type", "email", "u_phoneno")
    .then((userData) => {
    
      res.json({ userData });
    })
    .catch((err) => {
    
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.usersSelect = async (req, res) => {

  knex("users")
    .where({ username: req.body.username })
    .pluck("password")
    .then((userData) => {
     
      if (userData == req.body.password) {
        res.json({ message: `successful` });
      } else {
        res.json({ message: "incorrect" });
      }
    })
    .catch((err) => {
   
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};


exports.userCreate = async (req, res) => {

  knex("users")
    .insert({
    

      username: req.body.username,
      password: req.body.password,
      user_type: req.body.user_type,
      email: req.body.email,
      u_phoneno: req.body.u_phoneno,
    })
    .then(() => {
 
      res.json({ message: "registered" });
    })
    .catch((err) => {
   
      let error = err.message;

      if (
        error.endsWith(
          "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
        )
      ) {
        console.log(
          error.endsWith(
            "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
          )
        );
        res.json({ message: `Unique` });
      } else {
        res.json({ message: `There was an error creating  user: ${err}` });
      }
    });
};

exports.serviceSearch = async (req, res) => {
 


  knex
    .select(
     
        "u.username","u.u_phoneno","s.description","s.experience"
      ).avg('r.rating').from({ u:'users' })
    
    .leftJoin({r:"review"},"u.user_id","r.r_id")

    .leftJoin({s:req.body.service_category},"u.user_id","s.sp_id")
 
    .leftJoin({sp:"service_provider"},"u.user_id", "sp.sp_id")

    .where("sp.pincode", req.body.pincode)
    .andWhere("sp.service_category", req.body.service_category)
    .groupBy("sp.sp_id")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
  
      res.json({ message: `There was an error retrieving data: ${err}` });
    });
};

exports.reviewCreate = async (req, res) => {

  knex("review")
    .insert({
  
      user_id: req.body.user_id,
      r_id: req.body.r_id,
      rating: req.body.rating,
      review: req.body.review,
      timestamp: req.body.timestamp,
    })
    .then(() => {
     
      res.json({ message: "recorded" });
    })
    .catch((err) => {
     

      res.json({ message: `There was an error creating review: ${err}` });
    });
};

exports.updateUserEmail = async (req, res) => {
  
  knex("users")
    .where({ user_id: req.body.user_id })
    .update({
      

      
      
      email: req.body.email,
    })
    .then(() => {
      
      res.json({ message: "updated" });
    })
    .catch((err) => {
      

      res.json({ message: `There was an error updating info: ${err}` });
    });
};
exports.updateUserPhone = async (req, res) => {
  
  knex("users")
    .where({ user_id: req.body.user_id })
    .update({
      

      
      

      u_phoneno: req.body.u_phoneno,
    })
    .then(() => {
      
      res.json({ message: "updated" });
    })
    .catch((err) => {
      

      res.json({ message: `There was an error updating info: ${err}` });
    });
};

exports.registerService = async (req, res) => {
  
  knex("service_provider")
    .insert({
      
      sp_id: req.body.user_id,
      service_category: req.body.service_category,
      pincode: req.body.pincode,
      uname: req.body.uname,
    })
    .then(() => {
      
      
      knex(req.body.service_category)
        .insert({
          
          sp_id: req.body.user_id,
          experience: req.body.experience,
          description: req.body.description,
        })
        .then(() => {
          

          knex("users")
            .where({ user_id: req.body.user_id })
            .update({
              user_type: "SP",
            })
            .then(() => {
              
              res.json({ message: "listed" });
            })
            .catch((err) => {
              

              res.json({ message: `There was an error updating info: ${err}` });
            });
        })
        .catch((err) => {
          
          res.json({ message: `There was an error creating review: ${err}` });
        });
    })
    .catch((err) => {
      
      res.json({ message: `There was an error creating review: ${err}` });
    });
};

exports.showService = async (req, res) => {
  
  
  if (req.body.pincode != "") {
    knex("service_provider")
      .select("uname", "pincode")
      .where({ service_category: req.body.service_category })
      .andWhere({ pincode: req.body.pincode })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        
        res.json({ message: `There was an error retrieving users: ${err}` });
      });
  } else {
    knex("service_provider")
      .select("uname", "pincode")
      .where({ service_category: req.body.service_category })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        
        res.json({ message: `There was an error retrieving users: ${err}` });
      });
  }
};

exports.getreviewid = async (req, res) => {
  
  knex
    .select("user_id") 
    .from("users").where({username:req.body.name}) 
    .then((userData) => {
      
      res.json(userData);
    })
    .catch((err) => {
      
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.getreviews = async (req, res) => {
  
  knex
    .select("review") 
    .from("review").where({r_id:req.body.rid}) 
    .then((userData) => {
      
      res.json(userData);
    })
    .catch((err) => {
      
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.adminLogin = async (req, res) => {
  
  knex("admin")
    .where({ username: req.body.username })
    .pluck("password")
    .then((userData) => {
      
      if (userData == req.body.password) {
        res.json({ message: `successful` });
      } else {
        res.json({ message: "incorrect" });
      }
    })
    .catch((err) => {
      
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

exports.commentCreate = async (req, res) => {
  
  knex("comments")
    .insert({
      
      sp_id: req.body.sp_id,
      timestamp: req.body.timestamp,
      description:req.body.description
    })
    .then(() => {
      
      res.json({ message: "recorded" });
    })
    .catch((err) => {
      

      res.json({ message: `There was an error creating review: ${err}` });
    });
};


exports.commentView = async (req, res) => {
  
  knex.select("description") 
  .from("comments").where({sp_id:req.body.sp_id})
    .then((userData) => {
      
      res.json(userData);
    })
    .catch((err) => {
      

      res.json({ message: `There was an error creating review: ${err}` });
    });
};

exports.commentALLView = async (req, res) => {
  
  knex.select("*") 
  .from("comments")
    .then((userData) => {
      
      res.json(userData);
    })
    .catch((err) => {
      

      res.json({ message: `There was an error creating review: ${err}` });
    });
};

exports.myListings = async (req, res) => {
  
  knex("service_provider")
    .where({ sp_id: req.body.user_id})
    .select("service_category","pincode")
    .then((userData) => {
      
        res.json(userData);
    })
    .catch((err) => {
      
      res.json({ message: `There was an error retrieving listings: ${err}` });
    });
};

exports.getAvgRating=async(req,res)=>{
  knex.avg({rating:'rating'}).from('review').where({r_id:req.body.user_id}).then((userData)=>{
    res.json(userData);
  }).catch((err) => {
    
    res.json({ message: `There was an error retrieving listings: ${err}` });
  });
};