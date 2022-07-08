fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let output = "";
    for (let i = 0; i < data.length; i++) {
      output += `
      <tr>
      <td>${[i + 1]}</td>
      <td>${data[i].userId}</td>
      <td>${data[i].id}</td>
      <td>${data[i].title}</td>
      <td>${data[i].completed}</td>
      </tr>
      `;
    }

    document.querySelector("#data-output").innerHTML = output;
  })
  .catch(function (error) {
    console.error(`something went wrong retreiving json file`);
    console.error(error);
  });
