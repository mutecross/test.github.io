function TableBlock(columns, rows) {

  let OUTPUT;
  OUTPUT = '<table class="table">';
  OUTPUT += '<thead>';
  OUTPUT += '<tr class="table__row">';
  for (let i = 0; i < columns; i++) {
    OUTPUT += '<th class="table-head__cell sticky-block">';
    OUTPUT += RandRussian();
    OUTPUT += '</th>';
  }
  OUTPUT += '</tr>';
  OUTPUT += '</thead>';
  OUTPUT += '<tbody>';
  for (let i = 0; i < rows; i++) {
    OUTPUT += '<tr class="table__row">';
    for (let j = 0; j < columns; j++) {
      OUTPUT += '<td class="table-body__cell">';
      OUTPUT += RandRussian();
      OUTPUT += '</td>';
    }
    OUTPUT += '</tr>';
  }
  OUTPUT += '</tbody>';
  $('.table-wrapper').html(OUTPUT);
}