export const filterData = (data, filters) => {
  let filteredData = [];
  let tempData = [...data];
  if (Object.keys(filters).length === 0) return [...data];
  tempData.map((job) => {
    //isArray
    let success = false;
    Object.keys(filters).forEach((filter) => {
      if (!success) {
        if (Array.isArray(filters[filter])) {
          filters[filter].map((f) => {
            console.log(
              "success",
              success,
              job[filter] === f.value,
              data.length
            );
            if (!success) {
              if (job[filter] === f.value) {
                filteredData.push(job);
                success = true;
              }
            }
          });
        } else {
          if (filter === "minJdSalary") {
            console.log("minJdSalary", job[filter], filters[filter]);
            if (filters[filter] >= job[filter]) {
              filteredData.push(job);
              success = true;
              console.log("success", job);
            }
          } else {
            if (job[filter] === filters[filter]) {
              filteredData.push(job);
              success = true;
              console.log("success", job);
            }
          }
        }
      }
    });
  });

  console.log("filteredData", filteredData.length);

  return [...filteredData];
};
