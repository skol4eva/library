// daum map js 
ACC.storefinderDaum = {
	map:"",
	bindAll: function ()
	{
		this.initMap();
		this.getStoreMarkersImages();
		this.bindFindStoresNearMe();
	},
	
	initMap:function(){
		if($("#map_canvas_1").length > 0){
			this.drawMap();
		}																					  
	},
	
	drawMap: function(){
		var $e=$('#map_canvas_1')
		
		var centerPoint = new daum.maps.LatLng($e.data("latitude"), $e.data("longitude"));
		
		var mapOptions = {
			zoom: 13,
			zoomControl: true,
			panControl: true,
			streetViewControl: false,
			mapTypeId: daum.maps.MapTypeId.ROADMAP,
			center: centerPoint
		}
		
		ACC.storefinderDaum.map = new daum.maps.Map(document.getElementById("map_canvas_1"), mapOptions);
		if($e.data("southLatitude"))
		{
			this.setMapBouns();
			this.getStorePosition();
		}
		else{
			store =$e.data('stores');
			this.addStore(store.id,store.latitude,store.longitude, store.name)
		}
	},
	
	setMapBouns: function(){
		
		var $e=$('#map_canvas_1');
		var swBounds=new daum.maps.LatLng($e.data("southLatitude"), $e.data("westLongitude"));
		var neBounds=new daum.maps.LatLng($e.data("northLatitude"), $e.data("eastLongitude"));
		var bounds = new daum.maps.LatLngBounds(swBounds, neBounds);
		ACC.storefinderDaum.map.setBounds(bounds);

	},
	
	
	
	getStorePosition: function(){
		
		var $e=$('#map_canvas_1');
		
		stores = $e.data('stores');	
		
		$.each( stores, function( k, v ) {
			ACC.storefinderDaum.addStore( v.id,v.latitude,v.longitude,v.name );
		});

	},
	
	addStore: function(i,latitude,longitude, name)
	{
		var marker = new daum.maps.Marker({
			position: new daum.maps.LatLng(latitude, longitude),
			map: ACC.storefinderDaum.map,
			title: name,
			icon: 'http://i1.daumcdn.net/dmaps/apis/nlocalblit'.charAt(i) + '.png'
			//image : new daum.maps.MarkerImage('https://maps.google.com/mapfiles/marker' + 'ABCDE'.charAt(i) + '.png', new daum.maps.Size(20,34))
		});
		var infowindow = new daum.maps.InfoWindow({
			content: "<div style='width:100px;'>"+name+"</div>",
			disableAutoPan: true,
			removable : true,

		});
		daum.maps.event.addListener(marker, 'click', function ()
		{
			infowindow.open(ACC.storefinderDaum.map, marker);
		});

	},

	getStoreMarkersImages: function(){
	
		if($('.storeResultList').length!=0)
		{
			$(".storeMarker").each(function(i){
				//http://i1.daumcdn.net/dmaps/apis/nlocalblit04.png
				$(this).attr("src",'https://maps.google.com/mapfiles/marker' + 'ABCDE'.charAt(i) + '.png');
			})
		}

		
	},
	
	
	bindFindStoresNearMe: function(){
		$(document).on("click", "#findStoresNearMe", function(e){
			e.preventDefault();
			var gps = navigator.geolocation;
			
			if (gps)
			{
				gps.getCurrentPosition(ACC.storefinderDaum.positionSuccessStoresNearMe, function (error)
				{
					console.log("An error occurred... The error code and message are: " + error.code + "/" + error.message);
				});
			}
		});
	},

	positionSuccessStoresNearMe: function (position)
	{
		$("#latitude").val(position.coords.latitude);
		$("#longitude").val(position.coords.longitude);
		$("#nearMestorefinderDaumForm").submit();
		return false;
	}
};

$(document).ready(function ()
{
	ACC.storefinderDaum.bindAll();
});