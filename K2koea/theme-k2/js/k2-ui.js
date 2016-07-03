$(function(){
	$.fn.extend({
		// fn_gnb
		fn_gnb: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $nav = $(this),
					$navList = $nav.children(),
					$listActive = $('.ui-header .nav > li.active');

				if($listActive.length>0){
					var $activeIdx = ($listActive.position().left)+(($listActive.width())/2-7);

					$('.ui-header .ui-inner').append('<span class="arr"></span>');
					var $arr = $('.ui-header .ui-inner .arr');

					$navList.each(function(){
					var $this = $(this),
						$links = $('>a', $this);
	
						$arr.css({'left': $activeIdx});
						$links.bind('mouseenter focus',function(){
							var $thisWid = $this.width()/2;

							if($this.index()==0){
								var $thisLeft = $this.position().left+ $thisWid-10;
							}else{
								var $thisLeft = $this.position().left+ $thisWid + 32;
							}

							$arr.stop().animate({'left': $thisLeft}, 'linear');
						});

						$nav.bind('mouseleave blur',function(){
							$arr.stop().animate({'left': $activeIdx}, 'linear');
						});

						$(window).resize(function(){
							var $thisWid = $listActive.width()/2-7;
							var $thisLeft = $listActive.position().left+ $thisWid;
							$arr.css({'left': $thisLeft}, 'linear');
							$nav.bind('mouseleave blur',function(){
								$arr.stop().animate({'left': $thisLeft}, 'linear');
							});
						});
					});
				}

				var $header = $('.ui-header'),
					$container = $('.ui-container'),
					$headerHei = $('.ui-header').height();
				$(window).bind('scroll', function(){
					if($(window).scrollTop()>=$headerHei/2){
						$header.css({'position':'fixed','top':-$headerHei/2});
						$container.css({'padding-top':$headerHei});
					}else{
						$header.css({'position':'static','top':'0'});
						$container.css({'padding-top':'0'});
					}
				});
			});
		}, // fn_gnb

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
						}
					});
				}
			});
		},

		// fn_spinner
		fn_spinner : function(options) {
			var defaults = {
				min: 1,
				max: 9999999
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

		fn_order_fixed : function(options){
			var $header = $('.payment_area'),
				$container = $('.ui-container'),
				$headerHei = $('.payment_area').height();
			$(window).bind('scroll', function(){
				if($(window).scrollTop()>=$headerHei/2){
					$header.css({'position':'fixed','top':-$headerHei/2});
					$container.css({'padding-top':$headerHei});
				}else{
					$header.css({'position':'static','top':'0'});
					$container.css({'padding-top':'0'});
				}
			});
		}
	});

	/* fn 선언 */
	// gnb
	$('.ui-header .nav').fn_gnb();

	// footer :: familySite
	$('.familySite > a').fn_family();

	// tab
	$('.tabs-comp > ul').fn_tabs();

	// promotion :: scroll event
	$('.prom-cont').fn_promotion();

	// dialog (layer popup)
	$(".js-dialog").click(function(e){
		$(this).fn_dialog();
		e.preventDefault();
	});

	// spinner 
	$('.js-spinner').fn_spinner();

	// oder payment
	$('.payment_area').fn_order_fixed();
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

	// css 호출
	cssControls();

	var $allChk = $('.all_chk').find('input:checkbox'),
		$agrChk = $('.agr_chk').find('input:checkbox');

	$allChk.change(function(){
		var checkAll = $allChk.prop('checked');

		if($allChk.prop('checked')){
			$agrChk.prop('checked', true);
			// $agrChk.screwDefaultButtons('check');
			console.log('all_true1');
		}else{
			$agrChk.prop('checked', false);
			// $agrChk.screwDefaultButtons('uncheck');
			console.log('all_false1');
		}
	});

	$agrChk.change(function(){
		var $contentCk = true;
		$agrChk.each(function(){
			if($contentCk){
				$contentCk = $(this).prop('checked');
				if(!$contentCk){
					$allChk.prop('checked', false);
					// $allChk.screwDefaultButtons('uncheck');
					console.log('all_false2');
				}
			}

		});
		if($contentCk){
			$allChk.prop('checked', true);
			// $allChk.screwDefaultButtons('check');
			console.log('all_true2');
		}
	});
});

// 하위 브라우저 크로스 브라우징을 위한 css 컨트롤
function cssControls(){
	$('.product-list li:nth-child(4n+1)').addClass('clear-left');
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