
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Travel website</title>

    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">
    <!-- <link rel="stylesheet" type="text/css" href="assets/css/search.css"> -->
    <link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.css">

    <!-- Custom Google Web Font -->
    
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>

    <!-- Add custom CSS here -->
    <link href="search.css" rel="stylesheet">

    <script type="text/javascript" src="assets/js/jquery.js"></script>
    <script type="text/javascript">
      function searchq() {
        var searchText = $("input[name='txtsearch']").val();

        $.post("search.php", {searchVal: searchText}, function(output){
          $("#output").html(output);
        });
      }
    </script>

</head>

<body>
	<div class="intro-header">      
    <div class="container">

     <div class="row">
         <div class="col-lg-12">
             <div class="intro-message">
                 <h1>Find your perfect trip</h1>
                 <h3>Loreum ipsum text is here if you read you are awesome,<br> read the text to show your awesomeness</h3>
             </div>
         </div>
     </div>

     <div class="row">
      <div class="col-lg-12">
         <div class="intro-search-bar">
           <form action="text.php" method="post">
             <div class="input-group search-bar">
              <input name="txtsearch" type="text" class="form-control" placeholder="&#xf041; &nbsp;&nbsp;Destination, Tours, Hotels, Adddress &nbsp;&nbsp;&nbsp;&nbsp;Journey Date | Person " onkeydown="searchq();" >
              <span class="search-now"><button type="submit" href="" class="btn btn-search">Search Now</button></span>
             </div>
           </form>

         <div id="output"></div>
         </div>
      </div>
     </div>
  </div>
  <!-- /.container-->

  </div>
    <!-- /.intro-header -->


    
</body>
</html>