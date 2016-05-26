(function($){
    'use strict';
    //modal layer
    var hash,
        dialog;
    $('.openLayer').on('click', function(e) {
        hash = this.hash,
            dialog = new ui.Modal({
                isAutoButton: true,
                isBackdropClickClose: true,
                isEsc: true,
                backdropCss: {'opacity' : '0.8'},
                content: $(hash)
            });
        dialog.show();
        e.preventDefault();
    });
    $('.close').on('click', function(e) {
        dialog.hide();
        e.preventDefault();
    });
})(jQuery);

(function($){
    'use strict';
    // var $user_agent = $_SERVER['HTTP_USER_AGENT'];
    // if(strrpos($user_agent, "Android") || strpos($user_agent, "iPhone")){
    //     var $view = "mobile";
    //     console.log($view);
    // }else{
    //     var $view = "pc";
    //     console.log($ivew);
    //     var $str_is_brower_type = getBrower();
    //     console.log($str_is_brower_type);
    // }

    // console.log(navigator.language);
    // var lang = String(navigator.language);
    // console.log(String(navigator.language));
    // $("html").addClass(lang);

    console.log("애플리케이션 이름 : " + navigator.appName);
    console.log("브라우저 버전 : " + navigator.appVersion);
    console.log("브라우저 코드 이름 : " + navigator.appCodeName);
    console.log("User Agent : " + navigator.userAgent);
    console.log("사용하는 언어 : " + navigator.language);
    console.log("시스템 종류 : "+navigator.platform);

    var UserAgent = navigator.userAgent;

    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
        // location.href = "/mobile/index.html";
        console.log(UserAgent);
        console.log("Mobile");
        $("body").addClass("mobile");

    }else{
        console.log(UserAgent);
        console.log("Web");
        $("body").addClass("pc");
    }

    var $body = $('body');
    if (navigator.userAgent.toLowerCase().indexOf('MSIE 8.0') != -1){
        $body.addClass('ie8');
    };

})(jQuery);