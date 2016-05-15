var juyoung = {};


juyoung = (function ($){

	function windowPopup(){

		function open(evt){
			evt.preventDefault();
			var url = $(this).attr('href'),
				spec = $(this).attr('data-window-open'),
				name = $(this).attr('data-window-name') ? $(this).attr('data-window-name') : false;

			if(name){
				open.data[name] = window.open(url, '_blank', spec);
			}else{
				window.open(url, '_blank', spec);
			}
		}

		open.data = {};

		function close(value){
			open.data[value].close();
			delete open.data[value];
		}

		$(document).on('click.windowOpen', '[data-window-open]', open);

		return {
			open : open,
			close : close
		};
	}
	
	function accessibilityFocus() {
		$(document).on('keydown.juyoung.accessibilityFocus', '[data-focus-prev], [data-focus-next]', function(e){
			var next = $(e.target).attr('data-focus-next'),//$(this).attr('data-focus-next')
				prev = $(e.target).attr('data-focus-prev'),
				target = next || prev || false;

			if(!target || e.keyCode != 9){
				return;
			}

			if((!e.shiftKey && !!next) || (e.shiftKey && !!prev)){
				e.preventDefault();
				$('data-focus-id="'+ target +'"]').focus();
			}


		});
	}

	return {
		windowPopup : windowPopup(),
		accessibilityFocus : accessibilityFocus()
	};

	

}(window.jQuery));


//팝업 닫을시 콘솔 창에 juyoung.windowPopup.close('naver');

