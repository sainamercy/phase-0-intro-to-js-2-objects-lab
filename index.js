const employee = {
    name: "Mercy Saina",
    streetAddress: "NBI"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "jobId", 456))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "jobId", 987)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj
    
}

console.log(deleteFromEmployeeByKey(employee, "jobId"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "jobId")
console.log(employee);