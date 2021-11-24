function horario() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    //Adding the entire table to the body tag.
    document.getElementById('contenedorTexto').innerHTML = "";
    document.getElementById('contenedorTexto').innerHTML += "<h2>Mañana</h2>";
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
    table.setAttribute("id","tabla1");

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('th');
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
    let row_3_data_1 = document.createElement('th');
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
    let row_4_data_1 = document.createElement('th');
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


    // Table 2.


    let table2 = document.createElement('table');
    let thead2 = document.createElement('thead');
    let tbody2 = document.createElement('tbody');

    table2.appendChild(thead2);
    table2.appendChild(tbody2);

    //Adding the entire table to the body tag.
    document.getElementById('contenedorTexto').innerHTML += "<h2 class=posicionTitulo>Tarde</h2>";
    document.getElementById('contenedorTexto').appendChild(table2);

    // Creating and adding data to first row of the table
    let row_5 = document.createElement('tr');
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "Horas";
    let heading_8 = document.createElement('th');
    heading_8.innerHTML = "Lunes";
    let heading_9 = document.createElement('th');
    heading_9.innerHTML = "Martes";
    let heading_10 = document.createElement('th');
    heading_10.innerHTML = "Miércoles";
    let heading_11 = document.createElement('th');
    heading_11.innerHTML = "Jueves";
    let heading_12 = document.createElement('th');
    heading_12.innerHTML = "Viernes";
    let heading_13 = document.createElement('th');
    heading_13.innerHTML = "Sábado";
    let heading_14 = document.createElement('th');
    heading_14.innerHTML = "Domingo";

    row_5.appendChild(heading_7);
    row_5.appendChild(heading_8);
    row_5.appendChild(heading_9);
    row_5.appendChild(heading_10);
    row_5.appendChild(heading_11);
    row_5.appendChild(heading_12);
    row_5.appendChild(heading_13);
    row_5.appendChild(heading_14);
    thead2.appendChild(row_5);
    table2.setAttribute("id","tabla2");

    // Creating and adding data to second row of the table
    let row_6 = document.createElement('tr');
    let row_6_data_1 = document.createElement('th');
    row_6_data_1.innerHTML = "16:00 - 17:00";
    let row_6_data_2 = document.createElement('td');
    row_6_data_2.innerHTML = "";
    let row_6_data_3 = document.createElement('td');
    row_6_data_3.innerHTML = "";
    let row_6_data_4 = document.createElement('td');
    row_6_data_4.innerHTML = "";
    let row_6_data_5 = document.createElement('td');
    row_6_data_5.innerHTML = "";
    let row_6_data_6 = document.createElement('td');
    row_6_data_6.innerHTML = "";
    let row_6_data_7 = document.createElement('td');
    row_6_data_7.innerHTML = "";
    let row_6_data_8 = document.createElement('td');
    row_6_data_8.innerHTML = "";

    row_6.appendChild(row_6_data_1);
    row_6.appendChild(row_6_data_2);
    row_6.appendChild(row_6_data_3);
    row_6.appendChild(row_6_data_4);
    row_6.appendChild(row_6_data_5);
    row_6.appendChild(row_6_data_6);
    row_6.appendChild(row_6_data_7);
    row_6.appendChild(row_6_data_8);
    tbody2.appendChild(row_6);

    // Creating and adding data to third row of the table
    let row_7 = document.createElement('tr');
    let row_7_data_1 = document.createElement('th');
    row_7_data_1.innerHTML = "17:00 - 18:00";
    let row_7_data_2 = document.createElement('td');
    row_7_data_2.innerHTML = "";
    let row_7_data_3 = document.createElement('td');
    row_7_data_3.innerHTML = "";
    let row_7_data_4 = document.createElement('td');
    row_7_data_4.innerHTML = "";
    let row_7_data_5 = document.createElement('td');
    row_7_data_5.innerHTML = "";
    let row_7_data_6 = document.createElement('td');
    row_7_data_6.innerHTML = "";
    let row_7_data_7 = document.createElement('td');
    row_7_data_7.innerHTML = "";
    let row_7_data_8 = document.createElement('td');
    row_7_data_8.innerHTML = "";

    row_7.appendChild(row_7_data_1);
    row_7.appendChild(row_7_data_2);
    row_7.appendChild(row_7_data_3);
    row_7.appendChild(row_7_data_4);
    row_7.appendChild(row_7_data_5);
    row_7.appendChild(row_7_data_6);
    row_7.appendChild(row_7_data_7);
    row_7.appendChild(row_7_data_8);
    tbody2.appendChild(row_7);

    // Creating and adding data to fourth row of the table
    let row_8 = document.createElement('tr');
    let row_8_data_1 = document.createElement('th');
    row_8_data_1.innerHTML = "18:00 - 19:00";
    let row_8_data_2 = document.createElement('td');
    row_8_data_2.innerHTML = "";
    let row_8_data_3 = document.createElement('td');
    row_8_data_3.innerHTML = "";
    let row_8_data_4 = document.createElement('td');
    row_8_data_4.innerHTML = "";
    let row_8_data_5 = document.createElement('td');
    row_8_data_5.innerHTML = "";
    let row_8_data_6 = document.createElement('td');
    row_8_data_6.innerHTML = "";
    let row_8_data_7 = document.createElement('td');
    row_8_data_7.innerHTML = "";
    let row_8_data_8 = document.createElement('td');
    row_8_data_8.innerHTML = "";

    row_8.appendChild(row_8_data_1);
    row_8.appendChild(row_8_data_2);
    row_8.appendChild(row_8_data_3);
    row_8.appendChild(row_8_data_4);
    row_8.appendChild(row_8_data_5);
    row_8.appendChild(row_8_data_6);
    row_8.appendChild(row_8_data_7);
    row_8.appendChild(row_8_data_8);
    tbody2.appendChild(row_8);

    // Creating and adding data to fifth row of the table
    let row_9 = document.createElement('tr');
    let row_9_data_1 = document.createElement('th');
    row_9_data_1.innerHTML = "19:00 - 20:00";
    let row_9_data_2 = document.createElement('td');
    row_9_data_2.innerHTML = "";
    let row_9_data_3 = document.createElement('td');
    row_9_data_3.innerHTML = "";
    let row_9_data_4 = document.createElement('td');
    row_9_data_4.innerHTML = "";
    let row_9_data_5 = document.createElement('td');
    row_9_data_5.innerHTML = "";
    let row_9_data_6 = document.createElement('td');
    row_9_data_6.innerHTML = "";
    let row_9_data_7 = document.createElement('td');
    row_9_data_7.innerHTML = "";
    let row_9_data_8 = document.createElement('td');
    row_9_data_8.innerHTML = "";

    row_9.appendChild(row_9_data_1);
    row_9.appendChild(row_9_data_2);
    row_9.appendChild(row_9_data_3);
    row_9.appendChild(row_9_data_4);
    row_9.appendChild(row_9_data_5);
    row_9.appendChild(row_9_data_6);
    row_9.appendChild(row_9_data_7);
    row_9.appendChild(row_9_data_8);
    tbody2.appendChild(row_9);

    // Creating and adding data to fourth row of the table
    let row_10 = document.createElement('tr');
    let row_10_data_1 = document.createElement('th');
    row_10_data_1.innerHTML = "20:00 - 21:00";
    let row_10_data_2 = document.createElement('td');
    row_10_data_2.innerHTML = "";
    let row_10_data_3 = document.createElement('td');
    row_10_data_3.innerHTML = "";
    let row_10_data_4 = document.createElement('td');
    row_10_data_4.innerHTML = "";
    let row_10_data_5 = document.createElement('td');
    row_10_data_5.innerHTML = "";
    let row_10_data_6 = document.createElement('td');
    row_10_data_6.innerHTML = "";
    let row_10_data_7 = document.createElement('td');
    row_10_data_7.innerHTML = "";
    let row_10_data_8 = document.createElement('td');
    row_10_data_8.innerHTML = "";

    row_10.appendChild(row_10_data_1);
    row_10.appendChild(row_10_data_2);
    row_10.appendChild(row_10_data_3);
    row_10.appendChild(row_10_data_4);
    row_10.appendChild(row_10_data_5);
    row_10.appendChild(row_10_data_6);
    row_10.appendChild(row_10_data_7);
    row_10.appendChild(row_10_data_8);
    tbody2.appendChild(row_10);

}