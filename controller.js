const subject = require('./subjectmodel')
const student = require('./studentmodel')


exports.createStudents = (req,res) => {
    try{
    const name = req.body.name;
    console.log(name);
    const address = req.body.address;
    const sname = req.body.subjects;
    console.log(sname);

    student.create({
        name: name,
        address:address,
        subjects:sname
        
        
    },{include: [{
        model: subject,
        as: 'subjects'
    }]
    })

    res.status(201).send("Students added successfully.")
}catch(e){
    console.log(e);
    res.send(e);
}
}



//all
exports.getStudents = async (req,res) => {
    try{
        const students = await student.findAll({
            attributes: ['studentId','name', 'address'],
            include:{
                model:subject,
                attributes: ['subjectId','sname'],
                through:{
                    attributes: []
                },
            }
        });

        var results = [];

        for (var i of students){
            var data = {
                StudentId: i.studentId,
                StudentName: i.name,
                StudentAddress: i.addrses,
            };

            var subjects= [];

            for (var sub of i.subjects){
                var s = {
                    SubjectId: sub.subjectId,
                    SubjectName: sub.sname
                };

                subjects.push(s);
            }
            
            data.Subjects = subjects;
            results.push(data);
        }
        res.status(200).send(results);
    }catch(e){
        console.log(e);
    }
}


//individual
exports.getStudentsById = async (req,res) => {
    try{
        const id = req.params.id;
        const students = await student.findByPk(id,{
            attributes: ['studentId','name', 'address'],
            include:{
                model:subject,
                attributes: ['subjectId','sname'],
                through: {
                    attributes: []
                }
            }
        });
        
            var data = {
                StudentId: students.studentId,
                StudentName: students.name,
                StudentAddress: students.addrses,
                Subjects: []
            };
             for (var sub of students.subjects){
                var s = {
                    SubjectId: sub.subjectId,
                    SubjectName: sub.sname
                };

                data.Subjects.push(s);
            }
            res.send(data).status(201);
    }catch(e){
        console.log(e);
    }
}
