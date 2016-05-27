(function($){
 'use strict';
 /* ----------------------------
 * UI : Modal
 * ----------------------------
 */
 var hash,
     dialog;
 $('.openLayer').on('click', function(e) {
     hash = this.hash,
         dialog = new nc.ui.Modal({
             isAutoButton: true,
             isBackdropClickClose: true,
             isEsc: true,
             backdropCss: {'opacity' : '0.8'},
             content: $(hash)
         });
     dialog.show();
     e.preventDefault();
 });

 $('.layerClose').on('click', function(e) {
     dialog.hide();
     e.preventDefault();
 });

})(jQuery);

(function($){
    /**
     * ---------------------------------------------
     * tab menu
     * ---------------------------------------------
     */

    function Tab(el) {
        this.el = $(el);
    }

    Tab.prototype = {
        show : function() {
            var $this = this.el,
                liIndex = $this.index(),
                $div = $this.closest('div'),
                $target = $($this.data('target'));
            this.activate(liIndex, $div);
        },

        activate : function(liIndex, target) {
            var $active = target,
                idx = liIndex + 1;

            (function next() {
                $active.removeClass();
                $active.addClass('tab0' + idx);
            })();
        }
    };

    var $tab = $('.tab');
    $tab
        .on('click', 'li', function(e) {
            var $this = $(this),
                data = $this.data('tab');
            if (!data) $this.data('tab', data = new Tab(this));
            data.show();
            return false;
        });

})(window.jQuery);

(function (global, $) {
    'use strict';
    /**
     * ---------------------------------------------
     * quick menu
     * ---------------------------------------------
     */
    var $menu = $('.quick-menu ul li'),
        $contents = $('.section'),
        btnTop = $('.top');
    $(function () {
        var scltop = $(window).scrollTop();
        if (!(1167 <= scltop)) {
            $menu.removeClass('on');
        }
        $menu.on('click','a', function(e){
            e.preventDefault();
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            var $doc = $('html, body');
            $doc.stop()
                .animate({
                    scrollTop :offsetTop
                }, 800)
        });
    });

    $(window).scroll(function(){

        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target = $contents.eq(idx),
                i       = $target.index(),
                targetTop = $target.offset().top;
            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(i).addClass('on');
            }
            if (!(1167 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });

    btnTop.on('click', function(e){
        e.preventDefault();
        $('html, body').stop()
            .animate({
                scrollTop : 0
            },800)
    });

    btnTop.hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });

}(window, window.jQuery));

(function($){
    $('#layer-01 .scroll table').each(function(){
        if($(this).find('tr').length <= 7){
            $(this).find('td.score').css('padding-left','5px');
        }
    });
})(window.jQuery);