Meteor.startup(function () {
	// navigator.geolocation.getCurrentPosition(function (a) {
	// 	// console.log(a,b,c)
	// 	Session.set("location", a);
	// });
});



Template.location.helpers({
	coordinates: function () {
		// var a = Session.get("location");
		return Geolocation.latLng();	
	}
});

Template.map.helpers({
	loc: function () {
		// var a = Session.get("location");
		return Geolocation.latLng();	
	}
});