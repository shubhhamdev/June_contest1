let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter((employee) => employee.profession === "developer");
    const developerNames = developers.map((developer) => developer.name);
    console.log(developerNames);
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    arr = arr.filter((employee) => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    const additionalArr = [
      { id: 4, name: "emma", age: "22", profession: "designer" },
      { id: 5, name: "peter", age: "21", profession: "manager" },
      { id: 6, name: "lucy", age: "23", profession: "developer" },
    ];
  
    const combinedArr = arr.concat(additionalArr);
    console.log(combinedArr);
  }
  