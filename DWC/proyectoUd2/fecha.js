function fecha() {
    const FECHA = new Date();
    const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let table3 = document.createElement('table');
    let thead3 = document.createElement('thead');
    let tbody3 = document.createElement('tbody');

    table3.appendChild(thead3);
    table3.appendChild(tbody3);

    //Adding the entire table to the body tag.
    document.getElementById('header').appendChild(table3);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('td');
    heading_1.innerHTML = FECHA.getFullYear();
    row_1.appendChild(heading_1);
    thead3.appendChild(row_1);
    table3.setAttribute("id","tabla3");

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = FECHA.getDate();
    row_2.appendChild(row_2_data_2);
    tbody3.appendChild(row_2);

    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = MESES[FECHA.getMonth()];
    row_3.appendChild(row_3_data_2);
    tbody3.appendChild(row_3);

    heading_1.setAttribute("id","año");
    row_2_data_2.setAttribute("id","dia");
    row_3_data_2.setAttribute("id","mes");

}