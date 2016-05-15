
function tab(selector){
   addEvent('click', selector, tabRun);
}

function addEvent(evt, selector, fn){
    $(document).on(evt, selector, fn);
}

function show(showTarget){
    $(showTarget).show();
}

function hide(showTarget){
    $(showTarget).hide();
}

function getHash(target){
    console.log(target.hash);
    return target.hash;
}

function tabRun(e){

    console.log(e.target);

    if($(e.target).data('isShow')){
        hide(getHash(e.target));
        $(e.target).data('isShow', false);

    }else{
        show(getHash(e.target));
        $(e.target).data('isShow', true);

    }

}

tab('.tab-btn');







