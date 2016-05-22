/**
 * Created by BANG
 */
var juyoung = {};

juyoung.helper = (function ($){
	return {

	};
}(window.jQuery));

juyoung.common = (function ($){
	/**
	 * window open & close
	 * window.open(URL,name,specs,replace)
	 * http://www.w3schools.com/jsref/met_win_open.asp
	 * https://developer.mozilla.org/en-US/docs/Web/API/Window/open
	 */
	function windowPopupF(){
		function openP(e){
			e.preventDefault();
			var url = $(this).attr('href'),
				specs = $(this).attr('data-window-open'),
				name = $(this).attr('data-window-name') ? $(this).attr('data-window-name') : false;

			if(name){
				open.data[name] = window.open(url, '_blank', specs);
			} else {
				window.open(url, '_blank', specs);
			}
		}

		open.data = {};

		function closeP(value){
			open.data[value].close();
			delete open.data[value];
		}

		return {
			open: openP,
			close: closeP
		}
	}

	/*
	*	Layer popup
	*/
	function layerPopup(){
		var layerSection = $('#layer-section');
		if(layerSection.length < 1){
			return;
		}
		var layerDataStore = {};
		function addData(html) {
			layerDataStore['#' + html.attr('id')] = html;
		}

		layerSection.find('.layer').each(function(){
			addData($(this));
			$(this).remove();
		});
		
		function showLayer(e, layerID){
			var showID;

			if(e){
				e.preventDefault();
				showID = juyoung.helper.getBtnTarget(e.target);
			}else{
				showID = layerID;
			}
		}
		
		function hideLayer() {
			
		}

		return{
			open : open,
			close : close
		};

		$(document).on('click.juyoung.layerPopup','[data-layer-open]', showLayer);
		$(document).on('click.juyoung.layerPopup','.btn-layer-close', hideLayer);
	}




	return {
		windowPopup: windowPopupF(),
		layerPopup : layerPopup()
	}

}(window.jQuery));

// console.log(juyoung);