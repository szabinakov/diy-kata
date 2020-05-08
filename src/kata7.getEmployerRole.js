const getEmployerRole = (employeeName, employees) => {
 const theNewArray = employees.filter(a => a.name === employeeName);
 return theNewArray[0].role;
};

module.exports = getEmployerRole;
/* return employees.map(a => {if(a.name === employeeName) return employees.role
})*/
 /*const theName = eplo
    
    return employees[x].role;*/

    //return employees.map(a => a.role).toString();
// if employeeName = employees.name[index] return employees.role[index]
    //if (employeeName === employees.map(a => a.name));
  //return theString
//  return employees.map(a => if (a.name === employeeName) return a.role);

    //When I call employeename I hve to print out the role pair 


    /*const theFunc = function() {
     if (employees.name === employeeName)
     return employees.role;
 }
 const theSentence = employees.filter(theFunc);
 return theSentence.toString();*/


 /* let theRole;
    const theNewArray = employees.map(job => job.role);
    
    if (employeeName === employees.name) {
        theRole = theNewArray
    }
    return theRole;*/