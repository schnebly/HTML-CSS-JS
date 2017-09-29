//SearchBar Handler
$(function(){

	var searchField = $('#query');
	var icon = $('#search-btn');

	//Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'	
		},400);
		$(icon).animate({
			right: '10px'
		},400);
	});

	//Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			$(searchField).animate({
			width:'45%'
			}, 400, function(){});
			$(icon).animate({
			right:'360px'
			}, 400, function(){});
		}
		
	});

	$('#search-form').submit(function(e){
		e.preventDefault(e);
	});
})

function search()
{
	//clear Results
	$('#results').html("");
	$('#buttons').html("");

	//get form input
	q = $('#query').val();

	//Run GET request on API
	$.get(
		'https://www.googleapis.com/youtube/v3/search', {
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyA-iBDNZF1CnQc-z8KA5-aqCGyIaykJuB8'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			//Log Data
			console.log(data);

			$.each(data.items, function(i, item){
				//Get Ouptput
				var output = getOutput(item);

				//Display Results
				$('#results').append(output);
			});
		}

	);
}

function getOutput(item){

	
	var videoId = item.id.vidioId;
	var title = item.snippet.title;
	var description = item.snippet.descritption;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	//Build Output String
}