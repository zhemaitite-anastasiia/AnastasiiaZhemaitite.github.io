$(document).ready(function() {
    $("#myform").submit(function() {
    	console.log("form submitted")
        var search = $("#books").val();
        console.log(search)
        //$('.closeBtn').on('click', function(){
       // 	console.log("close button clicked")
       // })
        if (search == "") {
        	console.log("search is empty")
        	var modal = document.getElementById('simpleModal');
        	var modalBtn = document.getElementById('btn-red');
        	var closeBtn = document.getElementById('closeBtn');

             
            modal.style.display = 'block';

        	modalBtn.addEventListener('click', openModal);
        	closeBtn.addEventListener('click', closeModal);
        	window.addEventListener('click', outsideClick);

        	function openModal(){
        		modal.style.display = 'block';
        	}

        	function closeModal(){
        		modal.style.display = 'none';
        	}

        	function outsideClick(e){
        	
        			modal.style.display = "none";

        	}

            //alert("Please enter something in the field");

        } else {
            var url = "";
            var img = "";
            var title = "";
            var author = "";

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response) {
                for (i = 6; i < response.items.length; i++) {
                    var $container = $("<div class='container'>");

                    title = $('<h5>' + response.items[i].volumeInfo.title + '</h5>');
                    author = $('<h5>' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '> <button id ="imagebutton" class = "btn red alligning">Read More</button></a>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url);
                    title.appendTo($container);
                    author.appendTo($container);
                    img.appendTo($container);

                    console.log($container.html());

                    $("#results").append($container);

                }
            })
        }
        return false;
    })
})