function searchq() {
        var searchText = $("input[name='txtsearch']").val();

        $.post("search.php", {searchVal: searchText}, function(output){
          $("#output").html(output);
        });
      }

function clear(){
var clear = '';
$("#output").html(clear);
}


