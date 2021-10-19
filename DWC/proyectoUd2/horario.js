function horario() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    //Adding the entire table to the body tag.
    document.getElementById('contenedorTexto').innerHTML="";
    document.getElementById('contenedorTexto').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Horas";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Lunes";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Martes";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Miércoles";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Jueves";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Viernes";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    thead.appendChild(row_1);
    table.setAttribute("border", "1");
    table.setAttribute("align", "center");

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "9:00 - 11:00";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = "";
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = "";
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = "";
    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = "";
    let row_2_data_6 = document.createElement('td');
    row_2_data_6.innerHTML = "";

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    row_2.appendChild(row_2_data_6);
    tbody.appendChild(row_2);

    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "11:00 - 13:00";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = "";
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = "";
    let row_3_data_4 = document.createElement('td');
    row_3_data_4.innerHTML = "";
    let row_3_data_5 = document.createElement('td');
    row_3_data_5.innerHTML = "";
    let row_3_data_6 = document.createElement('td');
    row_3_data_6.innerHTML = "";

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    row_3.appendChild(row_3_data_4);
    row_3.appendChild(row_3_data_5);
    row_3.appendChild(row_3_data_6);
    tbody.appendChild(row_3);

    // Creating and adding data to third row of the table
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "13:00 - 15:00";
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = "";
    let row_4_data_3 = document.createElement('td');
    row_4_data_3.innerHTML = "";
    let row_4_data_4 = document.createElement('td');
    row_4_data_4.innerHTML = "";
    let row_4_data_5 = document.createElement('td');
    row_4_data_5.innerHTML = "";
    let row_4_data_6 = document.createElement('td');
    row_4_data_6.innerHTML = "";

    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    row_4.appendChild(row_4_data_3);
    row_4.appendChild(row_4_data_4);
    row_4.appendChild(row_4_data_5);
    row_4.appendChild(row_4_data_6);
    tbody.appendChild(row_4);

}