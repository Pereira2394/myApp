var placesJSON = require('../places.json');

//home
exports.home = function(req, res){

	var places = placesJSON.places;


	res.render('home',{
		title: 'Costa Rica Places',
		places: places	
	});
};

//place Single
exports.placeSingle = function(req, res){
	var placeSingle = req.params.placeSingle;

	var places = placesJSON.places;

	if(placeSingle >= 1 && placeSingle <= 6){
		var place = places[placeSingle -1];

		var title = place.title;
		var mainAttractive = place.mainAttractive;

		res.render('placeSingle',{
			places: places,
			title: title,
			place: place,
			mainAttractive: mainAttractive
		});//end res

	}else{
		res.render('notFound',{
			places: places,
			title: "Unavailable page!.",

		});
	};//end else


};

//Not Found
exports.notFound = function(req, res){
	var places = placesJSON.places;

	res.render('notFound',{
				places: places,
				title: "Unavailable page!.",

	});
};