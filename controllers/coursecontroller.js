
const courses = [
    {
      id: 1,
      name: "Graphic Designing",
      shortName: "Graphic Design",
      fee: 1500,
    },
    {
      id: 2,
      name: "MERN Stack Development",
      shortName: "MERN Stack",
      fee: 2500,
    },
    {
      id: 3,
      name: "Python Programming",
      shortName: "Python",
      fee: 1200,
    },
    {
      id: 4,
      name: "Web Development",
      shortName: "Web Dev",
      fee: 2000,
    },
    {
      id: 5,
      name: "Java Programming",
      shortName: "Java",
      fee: 1800,
    },
    {
      id: 6,
      name: "Data Science",
      shortName: "Data Science",
      fee: 3000,
    },
    {
      id: 7,
      name: "iOS App Development",
      shortName: "iOS Dev",
      fee: 2800,
    },
    {
      id: 8,
      name: "Android App Development",
      shortName: "Android Dev",
      fee: 2700,
    },
    {
      id: 9,
      name: "Cloud Computing",
      shortName: "Cloud Computing",
      fee: 2200,
    },
    {
      id: 10,
      name: "Network Security",
      shortName: "Net Security",
      fee: 2600,
    },
    {
      id: 11,
      name: "Full Stack Web Development",
      shortName: "Full Stack Dev",
      fee: 2300,
    },
    // Add more courses as needed
  ];



const CourseController = {
    add:(req,res)=>{
        
    },
    edit:()=>{},
    get:(req, res) => {
        res.send(courses);
      
      },
    getbyid:(req, res) => {
        let id = req.params.id;
        let obj = courses.find((x) => x.id == id);
        if (obj) {
          res.send({
            isSuccessful: true,
            data: obj,
            message: "",
          });
      
        } else {
          res.send({
            isSuccessful: true,
            data: null,
            message: "No Data Found",
          })
      
        }
      
      },
    del:()=>{}

}

module.exports = CourseController;