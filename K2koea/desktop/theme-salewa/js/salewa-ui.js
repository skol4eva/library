$(function(){
	$.fn.extend({
		// fn_gnb
		fn_gnb: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $nav = $(this),
					$navList = $nav.children();

				if($navList.hasClass('active')){
					var _active = $nav.find('.active');
					_active.children('a').append('<span class="arr"></span>');
					_active.find('.arr').css({'bottom':'0'});
				}

				$navList.each(function(){
					var $this = $(this),
						$links = $('>a', $this);

					$links.bind('mouseenter focus',function(){
						var _list = $(this).parent();
						_list.addClass('hover').siblings().removeClass('hover');

						if(_list.hasClass('hover')){
							if(_list.find('.arr').length>0){
							}else{
								$(this).append('<span class="arr"></span>');
							}
						}else{
							$this.find('.arr').remove();
						}

						var $listActive = $nav.children('li.hover'),
							_arr = $(this).find('.arr'),
							_d2 = $this.children('ul');

						if($listActive.length>0){
							_arr.stop().animate({'bottom':'0'}, function(){
								_d2.stop().slideDown('fast');
							});
							_list.siblings().children('ul').fadeOut().after(function(){
								_list.siblings().find('.arr').stop().animate({'bottom':'-10px'}, function(){
									_list.siblings().find('.arr').remove();
								});
							});
						}
					});

					$nav.bind('mouseleave blur',function(){
						$links.parent().removeClass('hover');
						$navList.children('ul').fadeOut();
						var _arr = $this.find('.arr');
						_arr.stop().animate({'bottom':'-10px'}, function(){
							if($nav.children('.active').length>0){
								var _active = $nav.find('.active').children('a');
								_active.append('<span class="arr"></span>');
								_active.find('.arr').stop().animate({'bottom':'0'});
								return false;
							}else{
								_arr.remove();
							}
						});
					});
				});
			});
		}, // fn_gnb

		// fn_exception
		fn_exception: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$navBtn = $('.allNavBtn', $this),
					$allNav = $('.allNav', $this),
					$searchBtn = $('.srchBtn', $this)
					$form = $('.searchForm', $this),
					_win = $(window),
					_h = 100;;

				$form.css({'top':-$form.height()});
				$('body').click(function(e) { 
					if(!$(e.target).closest($form).length && !$(e.target).is($form)){
						if($form.is(":visible")){
							$form.stop().animate({'top':-$form.height()});
							$allNav.css({'position':'absolute'}).stop().animate({'top':_h});
						}
					}
				});

				$navBtn.click(function(){
					$allNav.css({'top':_h}).toggle();
					if($allNav.is(":visible")){
						$searchBtn.click(function(){
							$allNav.stop().animate({'top':'100px'},400);
						});
					}
				});

				$searchBtn.click(function(e){
					$form.addClass('open').css({'display':'block'}).stop().animate({'top':'0'});
					$allNav.css({'position':'fixed'}).stop().animate({'top':$form.height()});
					e.stopPropagation();
				});

				function headerSize(){
					if(_win.width()>=1260){
						$this.addClass('max');
					}else{
						$this.removeClass('max');
					}
				}
				headerSize();

				_win.resize(function(){
					headerSize();
				});

				// scroll 에 따른 controls
				_win.bind('scroll', function(e){
					if(_win.scrollTop()>=_h/2-10){
						$this.addClass('scrolled').delay(100).animate({'top':-_h/2+10});
						$('body').css({'padding-top':_h});
					}else{
						$this.finish().removeClass('scrolled').attr('style','');
						$('body').attr('style','');
					}
					if(_win.scrollTop()>0){
						$form.css({'position':'fixed'});
					}else{
						$form.css({'position':'absolute'});
					}
				});
			});
		}, // fn_exception

		// fn_optionSelect
		fn_optionSelect: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$optBtn = $('>a', $this),
					$parent = $optBtn.parent();

				$('body').click(function(e) { 
					if(!$(e.target).closest($parent).length && !$(e.target).is($parent)){
						if($parent.is(":visible")){
							$optBtn.removeClass('open');
							$parent.children('div').hide();
						}
					}
				});

				$optBtn.click(function(){
					$optBox = $parent.children('div');
					$optBtn.removeClass('open');
					if($optBox.is(':visible')){
						$(this).removeClass('open');
					}else{
						$(this).addClass('open');
					}
					$optBox.toggle();
				});

				// opt-color
				$colorList = $this.find('.opt-color');
				$colorList.children().each(function(){
					$(this).children().click(function(){
						$(this).parent().addClass('active').siblings().removeClass('active');
					});
				});

				// opt-size
				$sizeList = $this.find('.opt-size');
				$sizeList.children().each(function(){
					$(this).children().click(function(){
						$(this).parent().addClass('active').siblings().removeClass('active');
					});
				});
			});
		}, // fn_optionSelect

		// fn_family
		fn_family: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$linkList = $this.next();

				$this.click(function(){
					$this.toggleClass('open');
					$linkList.slideToggle();
				});
			});
		}, // fn_family

		//fn_tabs
		fn_tabs: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$tabList = $this.children(),
					$panel = $this.parent().find('.tabs-panel').children('.panel-section'),
					$current = $this.children('.current').index();

				if($this.find('.tabs-panel')){
					$panel.eq($current).show();
				}

				var $ending = $this.parent().find('.btn_st_03');
					$ending.hide();

				// 이벤트 페이지 :: 이벤트 종료시
				var $end = $this.children('.current'),
					$evtList = $this.parent().next('.type-event');
				if($end.children().hasClass('ending')){
					$evtList.find('.end-dim').remove();
					$evtList.find('a').append('<span class="end-dim">THE END</span>');
					if($ending) $ending.show();
				}

				$tabList.each(function(){
					if($(this).hasClass('current')){
						$(this).prev().addClass('none');
					}
					$(this).children().click(function(){
						if($this.parent().hasClass('no-script')){
							// no script
						}else{
							$(this).parent().addClass('current').siblings().removeClass('current');
							if($(this).parent().hasClass('current')){
								$tabList.removeClass('none');
								$(this).parent().prev().addClass('none');
							}

							// 탭 컨텐츠 있을경우
							if($this.find('.tabs-panel')){
								var $tabIdx = $(this).parent().index();
								$panel.hide().eq($tabIdx).show();
							}
						}
					});
				});
			});
		}, // fn_tabs

		// fn_promotion
		fn_promotion: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(e){
				var $this = $(this),
					$box = $this.find('.box-list'),
					$boxList = $(">li", $box),
					$section = $this.find('.product-section');

				$boxList.each(function(){
					$(this).children().click(function(){
						var $boxIdx = $(this).parent().index(),
							$position = $section.eq($boxIdx).position().top-$('.ui-header').height()/2;
						$(this).parent().addClass('active').siblings().removeClass('active');
						$("html, body").stop().animate({scrollTop: $position}, 1000);
					});
				});
			});
		}, // fn_promotion

		// fn_dialog
		fn_dialog : function(options) {
			var defaults = {
				modal : true,
				fluid : true
			}
			var opts = $.extend(defaults, options);
			return this.each(function() {
				var $btn = $(this),
					target = $btn.data("href");

				if(target === undefined || $.trim(target) == "") return;

				if($btn.hasClass("dialog-disabled")) return;
				$btn.addClass("dialog-disabled");

				if(target.substr(0,1) != "#"){
					ajaxLoad("GET", target);
				}else{
					var $target = $(target);
					if($target.prop("tagName").toLowerCase() == "form"){
						if($target.attr("method") !== undefined) ajaxType = $target.attr("method");
						if($target.attr("action") !== undefined) ajaxURL = $target.attr("action");
						ajaxData = $target.serialize();

						ajaxLoad(ajaxType, ajaxURL, ajaxData);
					}else{
						var $content = $(".dialog-cont", $target);
						openDialog($target, $content, true);
					}
				}

				function ajaxLoad(_type, _url, _data) {
					$.ajax({
						dataType : "html",
						type : _type,
						url : _url,
						data : _data,
						success : function(htmldata) {
							$wrap = $('<div class="dialog-wrap"></div>').appendTo("body");
							$wrap.append(htmldata);
							$content = $(".dialog-cont", $wrap);
							openDialog($wrap, $content);
						},
						error : function(){
							alert("error!!");
						},
						cache : false
					});
				}

				function openDialog(_wrap, _content, inline){
					var pos = $btn.data("position");
					if(pos !== undefined){
						opts.modal = false;
						opts.fluid = false;
						opts.position = {
							my : pos+'top',
							at : pos+'bottom',
							of : $btn
						}
					}

					_content.dialog({
						width : _content.width(),
						modal : opts.modal,
						fluid : opts.fluid,
						position : opts.position,
						draggable : false,
						close : function(){
							$('body').attr('style','');

							$(this).dialog("destroy").remove();
							$btn.removeClass("dialog-disabled");
							if(inline){
								_wrap.append(_content);
							}else{
								_wrap.remove();
							}
						},
						open : function(){
							$(this).parent().focus();

							$('body').css({'min-width':'1100px','position':'relative'});

							var $dialogWrap = $content.parent();
							$(window).bind('scroll', function(){
								if($(window).scrollTop()>=40){
									$dialogWrap.css({'top':'50%','margin-top':$(window).scrollTop()-($dialogWrap.height()/2)-50});
								}else{
									$dialogWrap.css({'top':'50%','margin-top':$(window).scrollTop()-($dialogWrap.height()/2)});
								}
							});
							$(window).resize(function(){
								$dialogWrap.css({'left':'50%','margin-left':-$dialogWrap.width()/2});
								$dialogWrap.css({'top':'50%','margin-top':-$dialogWrap.height()/2});
							});

							if($(".js_datepicker").length>0){
								$(".js_datepicker").fn_datepicker();
							}
						}
					});
				}
			});
		},

		// fn_spinner
		fn_spinner : function(options) {
			var defaults = {
				min: 1,
				max: 9999
			}
			var opts = $.extend(defaults, options);
			return this.each(function() {
				var $this = $(this),
					oldValue = $this.val();
				
				if(oldValue == "") oldValue = opts.min;
				$this.on("keyup", function() {
					var value = $this.val().replace(/[^0-9]/gi,"");
					$this.val(Number(value));
				}).spinner({
					min: opts.min,
					max: opts.max,
					start: function(event, ui) {
						oldValue = Number($this.val());
						if(oldValue < opts.min) {
							oldValue = opts.min;
							$this.val(oldValue);
						}
					},
					stop: function(event, ui){
						var newValue = Number($(this).val());
						if(newValue < opts.min || newValue > opts.max) newValue = oldValue;
						$this.val(newValue);
					}
				});
			});
		}, // fn_spinner

		// fn_datepicker
		fn_datepicker : function(options) {
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function() {
				var $this = $(this),
					btnImg = $this.attr("data-button"),
					range = $this.attr("data-range"),
					from = $this.attr("data-from"),
					to = $this.attr("data-to"),
					minDate, maxDate, $elm, optDate,
					enableDates = opts.enableDates,
					onSelect = opts.onSelect;

				var dateOptions = {
					showOtherMonths: true,
					selectOtherMonths: true,
					dateFormat: 'yy-mm-dd'
				}

				if(range !== undefined && $.trim(range) != "") {
					var arrRange = range.split(",")
					dateOptions.minDate = $.trim(arrRange[0]);
					dateOptions.maxDate = $.trim(arrRange[1]);
				}
				
				if(btnImg === undefined || !btnImg) {
					dateOptions.showOn = "both";
					dateOptions.buttonImage = "../images/common/datepicker.png";
					//dateOptions.buttonImageOnly = true;
				}

				if(to !== undefined && $.trim(to) != "") {
					$elm = $(to);
					optDate = "minDate";
				}
				if(from !== undefined && $.trim(from) != "") {
					$elm = $(from);
					optDate = "maxDate";
				}
				if($elm !== undefined) {
					dateOptions.onClose = function(selectedDate) {
						$elm.datepicker("option", optDate, selectedDate);
					}
				}

				if(enableDates !== undefined) {
					dateOptions.beforeShowDay = function(d) {
						var dmy = d.getMonth() + 1; 
						if(d.getMonth() < 9) dmy = "0" + dmy; 
						dmy += "-"; 

						if(d.getDate() < 10) dmy += "0"; 
						dmy = d.getFullYear() + "-" + dmy + d.getDate(); 

						if($.inArray(dmy, enableDates) != -1) {
							return [true, "ui-datepicker-current-day"];
						} else {
							return [false, ""];
						}
					}
				}

				if(onSelect !== undefined) {
					dateOptions.onSelect = onSelect;
				}

				$.datepicker.regional['ko'] = {
					closeText: '닫기',
					prevText: '이전달',
					nextText: '다음달',
					currentText: '오늘',
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					dayNames: ['일','월','화','수','목','금','토'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					weekHeader: 'Wk',
					dateFormat: 'yy-mm-dd',
					firstDay: 0,
					isRTL: false,
					showMonthAfterYear: true,
					yearSuffix: '년'};
					
				$.datepicker.setDefaults($.datepicker.regional['ko']);
				$this.datepicker(dateOptions);
			});
		}, // fn_datepicker

		//fn_order_fixed
		fn_order_fixed : function(options){
			var $doc = $(window),
				$orderPym = $(this),
				$footTop = $('.ui-footer').offset().top,
				$headerHei = $('.ui-header').height(),
				$leftCnt = $('.order_info_area').outerWidth(true);

			$orderPym.attr('data-top', $headerHei).addClass('fixed');
			$doc.on('scroll', function() {
				var $scrlTop = $doc.scrollTop(),
					_this = $orderPym,
					_top = $headerHei + 165,
					_h = _this.height(),
					_css_t = (_top - $scrlTop),
					_css_t = _css_t <= 0 ? 10 : _css_t,
					_lap = ($footTop - $scrlTop) + 1102,
					_this_end = (_h - _lap);

				if(_this_end >= 0){
					_this.css({
						top: (_css_t - _this_end)
					});
				}else{
					_this.css({
						top: _css_t
					});
				}
			});

			function orderPymResize() {
				if($doc.width() < 1100){
					$orderPym.css({
						'left': $leftCnt,
						'margin-left' : '0'
					})
				}else{
					$orderPym.css({
						'left': '50%',
						'margin-left' : '210px'
					})
				}
			}

			$(window).on('resize', function(){
				orderPymResize();
			});
			$(window).on('load', function(){
				orderPymResize();
			});
		},//fn_order_fixed

		//fn_order_tabs
		fn_order_tabs: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$tabList = $this.children().children('.chkRd_box'),
					$panel = $this.parent().parent().find('.tabs-panel').children('.panel-section'),
					$current = $this.children('.current').index();

				if($this.find('.tabs-panel')){
					$panel.eq($current).show();
				}

				$tabList.each(function(){
					if($(this).parent().hasClass('current')){
						$(this).parent().siblings().addClass('none');
					}

					$(this).click(function(){
						$(this).parent().addClass('current').siblings().removeClass('current');
						if($(this).parent().hasClass('current')){
							$tabList.parent().removeClass('none');
							$(this).parent().siblings().addClass('none');
						}

						// 탭 컨텐츠 있을경우
						if($this.next('.tabs-panel')){
							var $tabIdx = $(this).parent().index();
							$panel.hide().eq($tabIdx).show();
						}
					});
				});

				orderPymChk();
			});
		}, // fn_order_tabs
	});


	/* fn 선언 */
	// gnb
	$('.ui-header .nav').fn_gnb();

	// allNav && search form
	$('.ui-header').fn_exception();

	// footer :: familySite
	$('.familySite > a').fn_family();

	// product list :: option select box
	$('.prod-option-box .opt-select').fn_optionSelect();

	// tab
	$('.tabs-comp > ul').fn_tabs();

	// promotion :: scroll event
	$('.prom-cont').fn_promotion();

	// dialog (layer popup)
	$(".js-dialog").click(function(e){
		$(this).fn_dialog();
		e.preventDefault();
	});

	// spinner :: 수량 카운트
	$('.js-spinner').fn_spinner();

	// datepicker
	$(".js_datepicker").fn_datepicker();

	// oder payment
	$('.payment_area').fn_order_fixed();

	// fn_ord_tabs
	$('.payment_info > ul').fn_order_tabs();
});

// function 호출 및 직접 선언
$(function(){
	// check & radio custom
	if($('input:radio').length>0 || $('input:checkbox').length>0){
		$('input:radio').screwDefaultButtons({
			image: 'url("../images/ico_rdo.png")',
			width: 22,
			height: 25
		});
		$('input:checkbox').screwDefaultButtons({
			image: 'url("../images/ico_chk.png")',
			width: 22,
			height: 25
		});
	}

	//동의체크
	allChk();

	//input file type
	fileBox();
});

//order escrow check :: 주문/결제 :: 결제방식 Tab
function orderPymChk(){
	var $pymChk = $('.pym_tab .tab.chkRd_box').find('input:radio');
		$escrowChk = $('.pym_tab .chk_escrow').find('input:checkbox');
		$escrowCnts = $('.pym_cnts .cnts_section .escrow');
		$depositChk = $('.pym_tab .chk_escrow').prev('.chkRd_box').find('input:radio'),
		$taxChk = $('.pym_cnts .cnts_section .chkRd_box.tax_area').find('input:checkbox'),
		$taxCntsInput = $('.tax_form').find('input');

	$pymChk.on('click', function(){
		$escrowChk.screwDefaultButtons('uncheck');
		$escrowCnts.removeClass('on');
	});

	$escrowChk.on('click', function () {
		$escrowCnts.addClass('on');
		$depositChk.click();
		if($escrowChk.prop('checked') === false){
			$escrowCnts.removeClass('on');
		}
		$depositChk.screwDefaultButtons('check');
	});

	$taxCntsInput.prop('disabled',true);

	$taxChk.on('click', function(){
		if($(this).prop('checked') === false){
			$taxCntsInput.prop('disabled',true);
		}else{
			$taxCntsInput.prop('disabled', false);
		}
	});
}

//전체동의
function allChk(){
	var $allChk = $('.all_chk').find('input:checkbox'),
		$agrChk = $('.agr_chk').find('input:checkbox');

	$allChk.on('click', function(){
		$agrChk.screwDefaultButtons('check');
		if($allChk.prop('checked') === false){
			$agrChk.screwDefaultButtons('uncheck');
		}
	});

	$agrChk.on('click', function(){
		var $contentCk = true;
		$agrChk.each(function(){
			if($contentCk){
				$contentCk = $(this).prop('checked');
				if(!$contentCk){
					$allChk.screwDefaultButtons('uncheck');
				}
			}
		});
		if($contentCk){
			$allChk.screwDefaultButtons('check');
		}
	});
}

//input file type
function fileBox(){
	var $fileBox = null;

	$(function(){
		init();
	})

	function init() {
		$fileBox = $('.input-file');
		fileLoad();
	}

	function fileLoad() {
		$.each($fileBox, function(idx){
			var $this = $fileBox.eq(idx),
				$btnUpload = $this.find('[type="file"]'),
				$label = $this.find('.file-label');

			$btnUpload.on('change', function() {
				var $target = $(this),
					fileName = $target.val(),
					$fileText = $target.siblings('.file-name');
				$fileText.val(fileName);
			})

			$btnUpload.on('focusin focusout', function(e) {
				e.type == 'focusin' ?
					$label.addClass('file-focus') : $label.removeClass('file-focus');
			})

		})
	}
}

// 기획전 상세 :: 스크롤에 따른 box 컨트롤 :: 160623 디자인 이슈로 인한 삭제
/*function _promotionFIX(){
	var $promBox = $('.prom-cont .box-list');

	if($promBox.length>0){
		var $boxList = $(">li", $promBox),
			$boxHei = $promBox.height(),
			$position = $promBox.position().top-20,
			$section = $promBox.parent().find('.product-section');

		// box
		$(window).bind('scroll', function(){
			if($(window).scrollTop()>=$position){
				$promBox.addClass('fix-box');
				$promBox.prev('.prom-edit').css({'margin-bottom':$boxHei+20});
			}else{
				$promBox.removeClass('fix-box');
				$promBox.prev('.prom-edit').css({'margin-bottom':'0'});
			}
		});
	}
}*/