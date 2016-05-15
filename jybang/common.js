/**
 * Created by BANG
 */
var juyoung = {};

juyoung.helper = (function ($){
	function getBtnTarget(t){
		return $(t).attr('data-target') ? $(t).attr('data-target') : t.hash;
	}

	function Stack(){
		this.dataStore = [];
	}

	Stack.prototype = {
		add: function (data){
			this.dataStore.push(data);
		},
		get: function (){
			return this.dataStore.pop();
		}
	};

	function List(){
		this.dataStore = [];
	}

	List.prototype = {
		add: function (data){
			this.dataStore.push(data);
		},
		remove: function (value){
			var index = this.find(value);
			if(index > -1){
				this.dataStore.splice(index, 1);
				return true;
			}
			return false;
		},
		find: function (value){
			for (var i = 0, max = this.dataStore.length; i < max; i++) {
				if(this.dataStore[i] == value){
					return i;
				}
			}
			return -1;
		}
	};

	return {
		Stack: Stack,
		List: List,
		getBtnTarget: getBtnTarget
	}
}(window.jQuery));

juyoung = (function ($, helper){
	/**
	 * window open & close
	 * window.open(URL,name,specs,replace)
	 * http://www.w3schools.com/jsref/met_win_open.asp
	 * https://developer.mozilla.org/en-US/docs/Web/API/Window/open
	 */
	function windowPopup(){
		function open(e){
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

		function close(value){
			open.data[value].close();
			delete open.data[value];
		}

		$(document).on('click.juyoung.windowOpen', '[data-window-open]', open);

		return {
			open: open,
			close: close
		}
	}

	/**
	 * layer popup
	 */
	function layerPopup(){
		var layerSection = $('#layer-section');
		if(layerSection.length < 1){
			return;
		}
		var layerDataStore = {};

		function addData(html){
			layerDataStore['#' + html.attr('id')] = html;
		}
		
		layerSection.find('.layer').each(function(){
			addData($(this));
			$(this).remove();
		});

		function showLayer(e, layerId){//닫아주기위해 layerID 사용
			var showId;//undefind
			// var showId = {};//선언 = 초기화

			//
			// protytype.test = d; //추가
            //
			// prototyep = {  //초기화
			// 	test: d
			// }

			if(e){
				e.preventDefault();
				showId = juyoung.helper.getBtnTarget(e.target);
			}else{
				showId = layerId;
			}

			layerSection.append(layerDataStore[showId]);
			$(layerDataStore[showId]).addClass('on').focus();
		}
		function hideLayer(e, hideId){

		}
		function initOpen(){//자동열리는거

		}

		$(document).on('click.juyoung.layerPopup','[data-layer-open]', showLayer);
		$(document).on('click.juyoung.layerPopup','.btn-layer-close', hideLayer);

		return {
			open: open,
			test:asdfkjsdf,jdflajd                  
			close: close
		};
	}

	/**
	 * 접근성 관련 포커스 강제 이동
	 */
	function accessibilityFocus(){
		$(document).on('keydown.juyoung.accessibilityFocus', '[data-focus-prev], [data-focus-next]', function (e){
			var next = $(e.target).attr('data-focus-next'),
				prev = $(e.target).attr('data-focus-prev'),
				target = next || prev || false;

			if(!target || e.keyCode != 9){// 9=tab
				return;
			}

			console.log(e.shiftKey);

			if((!e.shiftKey && !!next) || (e.shiftKey && !!prev)){
				e.preventDefault();
				$('[data-focus-id="' + target + '"]').focus();
			}
		});
	}

	return {
		helper: helper,
		windowPopup: windowPopup(),
		layerPopup: layerPopup(),
		accessibilityFocus: accessibilityFocus()
	};
}(window.jQuery, juyoung.helper));