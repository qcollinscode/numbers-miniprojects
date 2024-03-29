<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/main.css">
    <title></title>
</head>
<body>
    <div class="container reverse-text text-center">
        <div class="content">
            <div class="row">
                <h1>PI to the Nth Digit</h1>
            </div>
            <div class="container">
                <form class="form-inline">
                    <div class="form-group">
                        <select class="select form-control" name="">
                            <option value="">PI</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" name="textbox" class="textbox" placeholder="enter number here">
                    </div>
                    <button class="btn btn-primary"><i class="fa fa-thumbs-up"></i> Submit</button>
                </form>
            </div>
        </div>
    </div>
    <script src="assets/js/main-min.js"></script>
    <script>
        (function() {
            var form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
            });
        }());
    </script>
</body>
</html>
