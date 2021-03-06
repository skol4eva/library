$(function(){
	$.fn.extend({
		// fn_gnb
		fn_gnb: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $nav = $(this),
					$navList = $nav.children(),
					$allNav = $nav.parents('.ui-header').find('.allNav');

				if($navList.hasClass('active')){
					var _active = $nav.find('.active');
					_active.children('a').append('<span class="arr"></span>');
					_active.find('.arr').css({'bottom':'0'});
				}

				$navList.each(function(){
					var $this = $(this),
						$links = $('>a', $this);

					$links.bind('mouseenter focus',function(){
						if($allNav.css('display')=='block'){
							return
						}else{
							var _list = $(this).parent();
							_list.addClass('hover').siblings().removeClass('hover');

							if(_list.hasClass('hover')){
								if(_list.hasClass('active')){
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
									_arr.finish();
									_d2.stop().slideDown('fast');
								});
								_list.siblings().children('ul').hide().after(function(){
									_list.siblings().find('.arr').stop().animate({'bottom':'-10px'}, function(){
										_list.siblings().find('.arr').remove();
									});
								});
							}
						}
					});

					$nav.bind('mouseleave blur',function(){
						if($allNav.css('display')=='block'){
							$nav.find('.arr').css({'bottom':'-10px'});
							return
						}else{
							$links.parent().removeClass('hover');
							$navList.children('ul').hide();
							var _arr = $this.find('.arr');
							_arr.stop().animate({'bottom':'-10px'}, function(){
								if($nav.children('.active').length>0){
									var _active = $nav.find('.active').children('a');
									if(_active.children('.arr').length>0){
									}else{
										_arr.remove();
										_active.append('<span class="arr"></span>');
									}
									_active.find('.arr').stop().animate({'bottom':'0'});
									return false;
								}else{
									_arr.remove();
								}
							});
						}
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
					$mypage = $('.mypage', $this),
					$topSlot = $('.top-banner-slot'),
					_body = $('#ui-container'),
					_win = $(window),
					_h = 100;

				$form.css({'height':0});
				$('body').click(function(e) { 
					if(!$(e.target).closest($form).length && !$(e.target).is($form)){
						if($form.is(":visible")){
							$form.stop().animate({'height':'0'}, function(){
								$form.finish().css({'display':'none'});
							});
							$searchBtn.focus();
							if(_nav) $allNav.css({'position':'absolute'});
							_form = false;
						}
					}
				});
				$mypage.children('a').click(function(){
					$(this).parent().toggleClass('on');
				});

				var _form = false,
					_nav = false;

				$searchBtn.click(function(e){
					_form = true;
					$form.css({'display':'block'}).stop().animate({'height':_h});
					$form.find('.siteSearchInput ').focus();
					e.stopPropagation();
				});

				$navBtn.click(function(){
					$allNav.show();
					if($allNav.is(":visible")) _nav = true;
					else _nav = false;

					if(_nav){
						$searchBtn.click(function(){
							if(_form){
								$allNav.css({'top':_h});
								if($topSlot.length>0){
									if(_win.scrollTop()>=$topSlot.height()) $allNav.css({'position':'fixed'});
								}else{
									$allNav.css({'position':'fixed'});
								}
							}else{
								if($topSlot.length>0){
									if(_win.scrollTop()>=$topSlot.height()) $allNav.css({'position':'fixed'});
								}else{
									$allNav.css({'position':'absolute'});
								}
							}
						});
					}
					$this.find('.arr').css({'display':'none','bottom':'-10px'});
				});

				function allNavPos(){
					if(_win.width()>=1600){
						$this.css({'left':'50%','margin-left':'-800px'});
						$allNav.css({'margin-left':'-800px'});
						$form.css({'margin-left':'-800px'});
					}else if(_win.width()>=1260){
						$this.css({'margin-left':-(_win.width()/2),'left':'50%'});
						$allNav.css({'margin-left':-(_win.width()/2),'left':'50%'});
						$form.css({'margin-left':-(_win.width()/2),'left':'50%'});
					}else{
						$this.css({'margin-left':'0','left':'0'});
						$allNav.css({'margin-left':'0','left':'0'});
						$form.css({'margin-left':'0','left':'0'});
					}
				}
				allNavPos();
				_win.resize(function(){allNavPos()});

				$allNav.find('.allNavClose').click(function(){
					$allNav.hide();
					$this.find('.active .arr').css({'display':'block','bottom':'0'});
				});

				function headerSize(){
					if(_win.width()>=1260) $this.addClass('max');
					else $this.removeClass('max');
				}
				headerSize();

				_win.resize(function(){
					headerSize();
				});

				var _topBnr;
				if($topSlot.length>0) _topBnr = true;
				else _topBnr = false;

				$topSlot.find('button').click(function(){_topBnr = false});

				var lastScrollLeft = 0;
				_win.bind('scroll', function(e){
					var documentScrollLeft = $(document).scrollLeft();

					if(_topBnr){ // main 상단 배너 있을 경우
						if(_win.scrollTop()>=_h/2-10+$topSlot.height()){
							$this.addClass('scrolled').delay(200).animate({'top':-_h/2+10});
							if(_win.width()>=1600) $this.css({'margin-left':'-800px'});
							else if(_win.width()>=1260) $this.css({'margin-left':-(_win.width()/2),'left':'50%'});
							else $this.css({'left':-documentScrollLeft});

							_body.css({'padding-top':_h});
							if(_nav){
								$allNav.css({'position':'fixed'});
								if(_form){
									$allNav.css({'top':_h});
									$form.css({'position':'fixed'});
								}else{
									$allNav.css({'top':_h-40});
								}
							}else{
								$form.css({'position':'fixed'});
								$allNav.css({'top':_h,'position':'absolute'});
							}
						}else{
							$this.finish().removeClass('scrolled').attr('style','');
							_body.attr('style','');
							if(_win.scrollTop()>=$topSlot.height()){
								$form.css({'position':'fixed'});
								if(_win.width()<=1260) $form.css({'left':-documentScrollLeft});
								if(_nav) $allNav.css({'position':'fixed','top':_h});
							}else{
								$form.css({'position':'absolute'});
								if(_win.width()<=1260) $form.css({'left':'0'});
								if(_nav)$allNav.css({'position':'absolute','top':_h});
							}
						}
					}else{ // main 상단 배너 없을 경우
						if(_win.scrollTop()>=_h/2-10){
							$this.addClass('scrolled').delay(200).animate({'top':-_h/2+10})
							if(_win.width()>=1600) $this.css({'margin-left':'-800px'});
							else if(_win.width()>=1260) $this.css({'margin-left':-(_win.width()/2),'left':'50%'});
							else $this.css({'left':-documentScrollLeft});
							_body.css({'padding-top':_h});
						}else{
							$this.finish().removeClass('scrolled').attr('style','');
							_body.attr('style','');
							if(_nav){
								if(_form) $allNav.css({'position':'fixed'});
								else $allNav.css({'position':'absolute'});
							}
						}
						if(_win.scrollTop()>0){
							$form.css({'position':'fixed'});
							if(_win.width()<=1260) $form.css({'left':-documentScrollLeft});
						}else{
							$form.css({'position':'absolute'});
							if(_win.width()<=1260) $form.css({'left':'0'});
						}
					}

					if(lastScrollLeft != documentScrollLeft){
						$allNav.css({'left':-documentScrollLeft});
						if($this.hasClass('scrolled')){
							$form.css({'left':-documentScrollLeft});
						}
						lastScrollLeft = documentScrollLeft;
					}
				});
			});
		}, // fn_exception

		// fn_rotating
		fn_rotating: function(options){
			var defaults = {
				distance:1100,
				auto:true,
				arrow : true,
				paging : true,
			};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$wrap = $('>div', $this),
					$items = $('>ul', $wrap),
					$item = $('>li', $items);
					if($this.hasClass('type-prod')){
						var $items = $('.prod-grid-comp', $wrap),
							$item = $('.product-list', $items);
					}

				var _auto = opts.auto,
					_arrow = opts.arrow,
					_paging = opts.paging,
					_current = 0,
					_distance = opts.distance,
					_targetx,
					_total,
					interval,
					now = true;

				if(_arrow){
					if($item.length>1){
						$this.prepend('<a class="rotating-prev rotating-btn" href="javascript:;">이전</a>');
						$wrap.after('<a class="rotating-next rotating-btn" href="javascript:;">다음</a>');
					}

					$this.find('.rotating-prev').click(function(){
						prev();
						now = false;
						_auto=false;
						sliderStop();
					});
					$this.find('.rotating-next').click(function(){
						next();
						now = false;
						_auto=false;
						sliderStop();
					});
				}

				if(_paging){
					var html = '<div class="rotating-controls">';
						html += '<span class="rotating-paging"></span>';
						html += '<a href="javascript:;" class="btn-pause">정지/재생</a>';
						html += '</div>';
						$this.append(html);

					var $controls = $('.rotating-controls', $this),
						$paging = $('.rotating-paging', $controls),
						$pause = $('.btn-pause', $controls),
						_total = $this.find('.rotating-list').children('li').length;

					if($item.length<=1){
						$pause.remove();
						now = false;
						_auto = false;
						sliderStop();
					}

					for (var i = 0; i < _total; i++) {
						$paging.append("<a href='javascript:;' class='control" + i +"'" + ">" + (i + 1) + "</a>");
						$paging.children().eq(_current).addClass('on');
					}

					$pause.click(function(){
						if(_auto){
							if(now == true){
								now = false;
								sliderStop();
							}else{
								now = true;
								sliderPlay();
							}
						}else{
							now = true;
							_auto = true;
							sliderPlay();
						}
					});
				}

				function sliderPlay(){
					if(_paging) $pause.removeClass('stop');
					interval = setInterval(function(){sliderContents()}, 3000);
				}
				function sliderStop(){
					if(_paging) $pause.addClass('stop');
					interval = clearInterval(interval);
				}
				function move(){
					if(_paging){
						$paging.children('a').removeClass('on');
						$paging.find(".control" + _current).addClass('on');
					}
					_targetx = _current * _distance * (-1) + "px";
					$items.stop().animate({left: _targetx}, 1000);
				};

				function prev(){
					if (_current == 0) _current = _total-1;
					else _current--;
					move();
				};

				function next(){
					_current++;
					if(_current == $item.length) _current=0;
					move();
				};

				function sliderContents(){
					if(_auto){
						_current++;
						if(_current == $item.length) _current=0;
						move();
					}

					if(_paging){
						$paging.children('a').click(function(e){
							var index = parseInt($(this).attr("class").substr(7));
							$(this).addClass("on").siblings().removeClass("on");
							sliderStop();
							_current = index;
							_targetx = _current * _distance * (-1) + "px";
							$items.stop().animate({left: _targetx}, 1000);
							now = false;
							_auto=false;
							e.preventDefault();
						});

						if(_auto){
						}else{
							$pause.addClass('stop');
						}
					}
				}
				$item.each(function(idx){
					$(this).children().focus(function(){
						sliderStop();
						now = false;
						_auto = false;
						_current = idx;
						if(_paging){
							$paging.find("a").removeClass("on");
							$paging.find(".control" + _current).addClass("on");
						}
						_targetx = _current * _distance * (-1) + "px";
						$items.css("left", _targetx);
					});
				});

				$items.each(function(){
					_total = $item.length;
					$(this).width(_total*_distance);
				});

				if(_auto){
					sliderPlay();
				}
				else sliderContents();
			});
		}, // fn_rotating

		// fn_prodRoll
		fn_prodRoll: function(options){
			var defaults = {
				auto:true,
				arrow : {
					hoverShow : true,
				},
				item :7
			};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$items = $('.prod-grid-comp',$this),
					$item = $('.product-list',$this),
					_auto = opts.auto,
					_arrow = opts.arrow,
					_item = opts.item,
					_count,
					interval;

				if($this.hasClass('t-auto')) $items.width(($item.width()+40)*$item.length).css({'left':'50%','margin-left':-$items.width()/2-20});

				function prodMove(){
					clearInterval(interval);
					interval = setInterval(function(){
						_count ++;
						_first = $items.children('.product-list');
						$items.children().first().stop().animate({'margin-left':'-245px'}, function(){
							$items.append(_first[0]);
							$items.children().last().css({'margin-left':'40px'});
						});
					},3000);
				}

				function prodPrev(){
					_last = $items.children('.product-list').last();
					$items.prepend(_last);
				}

				function prodNext(e){
					_first = $items.children('.product-list').first();
					$items.append(_first);
				}

				var _prev = $('<a href="javascript:;" class="prod-arr prod-prev">이전</a>'),
					  _next = $('<a href="javascript:;" class="prod-arr prod-next">다음</a>');

				if($this.hasClass('t-auto')){
					if($item.length>=_item-1){
						$this.append(_prev,_next);
						var _arrBtn = $this.find('.prod-arr');
						if(_arrow.hoverShow) _arrBtn.hide();
						else _arrBtn.show();
					}
				}else{
					if($item.length>_item){
						$this.append(_prev,_next);
						var _arrBtn = $this.find('.prod-arr');
						if(_arrow.hoverShow) _arrBtn.hide();
						else _arrBtn.show();
					}
				}
				_prev.click(prodPrev);
				_next.click(prodNext);

				$this.bind('mouseenter', function(){
					if(_arrow.hoverShow){ _arrBtn.fadeIn()}
					clearInterval(interval);
				});
				$this.bind('mouseleave', function(){
					if(_arrow.hoverShow) _arrBtn.fadeOut();
					if(_auto){if($item.length>=_item) prodMove()};
				});

				if(_auto){
					if($item.length>=_item) prodMove();
				}
				return true;
			});
			
		}, // fn_prodRoll

		// fn_optionSelect
		fn_optionSelect: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					$optBtn = $('>a', $this),
					$optList = $this.find('ul'),
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

				// option select :: text change
				var _optList = $this.find('ul').children('li').children('a');
				$optList.children().each(function(){
					if($this.hasClass('rating')){
						$(this).click(function(){
							$(this).parents('.opt-select').children('a').empty().html($(this).html())
							$this.find('div').hide();
							$optBtn.removeClass('open');
						});
					}else{
						$(this).children().click(function(){
							$(this).parents('.opt-select').children('a').text($(this).text());
							$this.find('div').hide();
							$optBtn.removeClass('open');
						});
					}
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

		// fn_prodDetail
		fn_prodDetail: function(options){
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function(){
				var $this = $(this),
					_color = $('.prod-color a', $this),
					_size = $('.prod-size a', $this),
					_btn = $('.prod-btn', $this),
					_tab = $('.tabs-comp > ul', $this),
					_win = $(window),
					_start = _btn.offset().top,
					_end = $('.ui-footer').offset().top-_win.height();
					_win.resize(function(){
						_start = _btn.offset().top,
						_end = $('.ui-footer').offset().top-_win.height();
					});

				if(_color.hasClass('active')) _color.parent().find('.active').append('<span class="selected"></span>');

				function soldOut(){
					var _t = $(this);
					if(_t.find('.sold-out').length>0){
						_t.removeClass('active');
						if(_t.parent().hasClass('prod-color')){
							alert('선택한 상품의 색상이 품절되었습니다.');
						}else{
							alert('선택한 상품의 사이즈가 품절되었습니다.');
						}
					}else{
						_t.addClass('active').siblings().removeClass('active');
						if(_t.parent().hasClass('prod-color')){
							_color.find('.selected').remove();
							_t.append('<span class="selected"></span>');
						}
					}
				}
				_color.on('click', soldOut);
				_size.on('click', soldOut);

				_tab.each(function(){
					$(this).children().each(function(){
						$(this).children('a').click(function(){
							var _idx = $(this).parent('li').index();
							$('body, html').scrollTop(_tab.eq(_idx).offset().top-60);
						});
					});
				});

				function btnOffset(){
					if(_win.scrollTop()>=_start){
						if(_win.scrollTop()>=_end+10){
							_btn.finish().removeClass('fixed').css({'bottom':'-50px'});
							_btn.prev().css({'margin-bottom':'40px'});
						}else{
							_btn.addClass('fixed').delay(100).animate({'bottom':0});
							_btn.prev().css({'margin-bottom':_btn.height()+100});
						}
					}else{
						_btn.finish().removeClass('fixed').css({'bottom':'-50px'})
						_btn.prev().css({'margin-bottom':'40px'});
					}
				};

				btnOffset();
				_win.bind('scroll', function(e){
					btnOffset()
				});
			});
		}, // fn_prodDetail

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

				// 이벤트 페이지 :: 이벤트 종료시
				var $end = $this.children('.current'),
					$evtList = $this.parent().next('.type-event');
				if($evtList.length>0){
					var $ending = $this.parent().find('.btn_st_03');
					$ending.hide();

					if($end.children().hasClass('ending')){
						$evtList.find('.end-dim').remove();
						$evtList.find('a').append('<span class="end-dim">THE END</span>');
						if($ending) $ending.show();
					}
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
					$boxList = $(">li", $this),
					$prom = $('.prom-cont');
					if($prom.length>0){
						$section = $prom.find('.product-section');
					}

				$boxList.each(function(){
					$(this).children().click(function(){
						var $boxIdx = $(this).parent().index();
						$(this).parent().addClass('active').siblings().removeClass('active');

						if($prom.length>0){
							var $position = $section.eq($boxIdx).position().top-$('.ui-header').height()/2;
							$("html, body").stop().animate({scrollTop: $position}, 1000);
						}
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

							if($(".js_datepicker").length>0) $(".js_datepicker").fn_datepicker();
							if($('.js-spinner').length>0) $('.js-spinner').fn_spinner();
							if($("select").length>0) $("select").fn_customSelect();

							if($(".tabs-comp").length>0) $(".tabs-comp > ul").fn_tabs();
							if($(".opt-select").length>0) $('.opt-select.rating').fn_optionSelect();
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

		// fn_tooltip
		fn_tooltip : function(options) {
			var defaults = {};
			var opts = $.extend(defaults, options);
			return this.each(function() {
				var $this = $(this),
					$toolBox = $this.next('.toolTipBox'),
					_margin = $this.style="";

				$this.bind('mouseenter focus', function(){
					$toolBox.fadeIn(300).css({
						'left':$this.position().left+$this.outerWidth(true)+14,
						'top':$this.position().top-22
					});
				});
				$this.bind('mouseleave blur', function(){
					$toolBox.fadeOut(300);
				});
			});
		},	// fn_tooltip

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

		//customSelect
		fn_customSelect : function(settings) {
			var config = {
				replacedClass: 'custom-select-replaced', // Class name added to replaced selects
				customSelectClass: 'custom-select', // Class name of the (outer) inserted span element
				activeClass: 'custom-select-isactive', // Class name assigned to the fake select when the real select is in hover/focus state
				wrapperElement: '<div class="custom-select-container" />' // Element that wraps the select to enable positioning
			};
			if (settings) {
				$.extend(config, settings);
			}

			this.each(function () {
				var select = $(this);
				if (select.parent().hasClass('custom-select-container')) {
					var par = select.parent();
					val = par.find('option:selected', this).text();
					par.find('.' + config.customSelectClass + ' span span').text(val);
					return;
				}
				select.addClass(config.replacedClass);
				select.wrap(config.wrapperElement);
				var update = function () {
					val = $('option:selected', this).text();
					span.find('span span').text(val);
				};
				// Update the fake select when the real select’s value changes
				select.change(update);
				select.keyup(update);
				var span = $('<span class="' + config.customSelectClass + '" aria-hidden="true"><span><span>' + $('option:selected', this).text() + '</span></span></span>');
				select.after(span);
				// Change class names to enable styling of hover/focus states
				select.on({
					mouseenter: function () {
						span.addClass(config.activeClass);
					},
					mouseleave: function () {
						span.removeClass(config.activeClass);
					},
					focus: function () {
						span.addClass(config.activeClass);
					},
					blur: function () {
						span.removeClass(config.activeClass);
					},
					change: function () {
						span.removeClass(config.activeClass);
					}
				});
			});
		},//customSelect
	});


	/* fn 선언 */
	// gnb
	$('.ui-header .nav').fn_gnb();

	// allNav && search form
	$('.ui-header').fn_exception();

	// main :: visual
	$('.rotating-slider.t-paging').fn_rotating({
		distance:1600,
		auto:true,
		arrow : false,
		paging:true
	});

	// main :: product rolling :: 자동
	$('.rotating-prod.t-auto').fn_prodRoll({
		auto:true,
		arrow :{
			hoverShow : true,
		},
		item :7
	});

	// main :: rolling banner
	$('.rotating-slider.t-arrow').fn_rotating({
		distance:1100,
		auto:false,
		arrow : true,
		paging:false
	});

	// sub :: product detail :: product rolling :: 수동
	$('.rotating-prod.t-manual').fn_prodRoll({
		auto:false,
		arrow :{
			hoverShow : false,
		},
		item :4
	});

	// footer :: familySite
	$('.familySite > a').fn_family();

	// product list :: option select box
	$('.prod-option-box .opt-select').fn_optionSelect();

	// product view
	$('.prod-detail-wrap').fn_prodDetail();

	// tab
	$('.tabs-comp > ul').fn_tabs();

	// promotion :: scroll event
	$('.box-list').fn_promotion();

	// dialog (layer popup)
	$(".js-dialog").click(function(e){
		$(this).fn_dialog();
		e.preventDefault();
	});

	// popup (카드사혜택)
	$(".js-popup").click(function(){
		$(this).next('.ui-popup').show();
		$('.ui-popup').find('.close').click(function(){
			$(this).parents('.ui-popup').hide();
		});
	});

	// spinner :: 수량 카운트
	$('.js-spinner').fn_spinner();

	// datepicker
	$(".js_datepicker").fn_datepicker();

	// tooltip
	$(".js-tooltip").fn_tooltip();

	// oder payment
	$('.payment_area').fn_order_fixed();

	// fn_ord_tabs
	$('.payment_info > ul').fn_order_tabs();

	//fn_customSelect
	$('select').fn_customSelect();
});

// dialog close
function closeDialog(){$('.ui-dialog-content').dialog('close')}

// function 호출 및 직접 선언
$(function(){
	//input file type
	fileBox();

	//faq
	toggleList();

	//join step3
	join_add_entry();
});

//order escrow check :: 주문/결제 :: 결제방식 Tab
function orderPymChk(){
	var $pymChk = $('.pym_tab .tab.chkRd_box').find('input:radio'),
		$escrowChk = $('.pym_tab .chk_escrow').find('input:checkbox'),
		$escrowCnts = $('.pym_cnts .cnts_section .escrow'),
		$depositChk = $('.pym_tab .chk_escrow').prev('.chkRd_box').find('input:radio'),
		$taxChk = $('.pym_cnts .cnts_section .chkRd_box.tax_area').find('input:checkbox'),
		$taxCntsInput = $('.tax_form').find('input');

	$pymChk.on('click', function(){
		$escrowChk.prop('checked', false);
		$escrowCnts.removeClass('on');
	});

	$escrowChk.on('click', function () {
		$escrowCnts.addClass('on');
		$depositChk.click();

		if($escrowChk.prop('checked') === false){
			$escrowCnts.removeClass('on');
		}
		$depositChk.prop('checked', true);
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

//faq
function toggleList(){
	var $toggle = $('.toggle_list');

	if($toggle.hasClass('mp_review_list')){
		var $tr = $toggle.find('tr');
		$tr.each(function(){
			$(this).click(function(){
				if($(this).children('td').hasClass('cart_no_item')){
					//no item
				}else{
					if($(this).hasClass('current')){
						$tr.removeClass('current').find('.answer').hide();
					}else{
						$tr.siblings().removeClass('current').find('.answer').hide();
						$(this).addClass('current').find('.answer').show();
					}
					$(this).find('.answer').click(function(e){
						return false;
					});
				}
			});
		});
	}else{
		var $link = $toggle.find('.question');
		$link.click(function(){
			var $tr = $(this).parents('tr');
			if($tr.hasClass('current')){
				$tr.removeClass('current').find('.answer').hide();
			}else{
				$tr.siblings().removeClass('current').find('.answer').hide();
				$tr.addClass('current').find('.answer').show();
			}
		});
	}

	/* 본인 클릭시 다시 닫힐 수 있도록 토글 기능 구현 요청으로 인하여 삭제
	var $link = $('.toggle_list .question'),
		$cnts = $('.toggle_list .answer');

	$(document).on('click', '.toggle_list .question', function() {
		var $tr = $(this).parents('tr');

		$('.toggle_list tr').removeClass('current');
		$cnts.css('display','none');

		$tr.addClass('current');
		$(this).next('.answer').css('display','block');
	});
	*/
}

//회원가입 추가정보입력
function join_add_entry(){
	var $btn = $('.title_area.join_step3 .chkRd_box input[type=checkbox]');

	$btn.each(function(){
		$(this).on('click', function(){
			$(this).parents('.title_area').next().toggleClass('on')
		})
	})
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

