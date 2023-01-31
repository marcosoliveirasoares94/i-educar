

  function setOrdem(id)
  {
    document.getElementById('nr_nivel['+(id)+']').value = (id+1);
  }

  tab_add_1.afterAddRow = function() {
  setOrdem(this.id-1);
}

  tab_add_1.afterRemoveRow = function() {
  reordena();
}

  function reordena()
  {
    for(var ct=0;ct < tab_add_1.getId();ct++)
  {
    setOrdem(ct);
  }
  } 

  document.getElementById('tab01').onchange = function (event) {
    var target = event.target ;
    var column = target.parentElement;
    var row = column.parentElement;   

    if (column.cellIndex === 1) {
      var index = getRowIndex(row);
      var percentageCell = document.getElementById('porcentagem[' + index + ']');
      var baseSalary = document.getElementById('salario_base_nivel').value;

      const formatNumber = new Intl.NumberFormat();
      percentageCell.value = formatNumber.format( ((parseFloat(target.value.replace('.','').replace(',','.')) / parseFloat(baseSalary)) - 1.0) * 100.0 );            
    }

    else if (column.cellIndex === 2) {
      var index = getRowIndex(row);
      var percentageCell = document.getElementById('salario_base[' + index + ']');
      var baseSalary = document.getElementById('salario_base_nivel').value;

      const options = { minimumFractionDigits: 2, maximumFractionDigits: 2};
      const formatNumber = new Intl.NumberFormat('pt-BR',options);
      percentageCell.value = formatNumber.format(parseFloat(baseSalary) * ( 1.0 + ( parseFloat(target.value.replace(',','.')) / 100.0 )));      
    }

    function getRowIndex(row) {
      var id = row.id;
      var subst = id.split('[');
      subst = subst[1].split(']');      
      return subst[0];
    }

  }  

