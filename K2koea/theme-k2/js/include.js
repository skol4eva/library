/*
	@ K2 UI 배포
	@ IDR :: smcho
	@ 2016-06-21 09:06:00
	@ 이 JS 파일은 UI 구현에 필요한 코드들로 구성되어 있으므로 임의로 수정하시면 안됩니다. 담당자에게 요청해 주세요.
*/
!function(l){var a=l.document,i=(l.navigator,l.location),e=($(l),$(a),l.gf={},function(l){return l?$(l).insertAfter("script:last"):l});!function(){function a(l,a){var i=new t.constructor(l,a);Array.prototype.push.apply(this,[i]),this[i.name]=i.value}function e(){var l=i.search.substring(1).split(/&/),e=new s.constructor;if(""!=l.toString())for(var t=0;t<l.length;t++){var r=l[t].match(/([^=^&]+)=(.*)/);null!=r&&a.apply(e,[r[1],r[2]])}return e}var t={constructor:function(l,a){this.name=l;try{this.value=decodeURIComponent(a)}catch(i){this.value=a}},toString:function(){return this.name+"="+this.value}};t.constructor.prototype=t;var s={constructor:function(){this.length=0},toString:function(){return this.length>0?Array.prototype.join.apply(this,["&"]):"null"}};s.constructor.prototype=s,l.urlData=e()}(),$.browser.msie&&$(a.documentElement).addClass("iefix-msie iefix-msie"+$.browser.version.substring(0,1));l.gf.inc=function(){var l=(function(l){l=l.split(",").splice(0,3);for(var a=0;a<l.length;a++)l[a]=parseInt("0"+l[a],10);return l}((urlData&&urlData.pid?urlData.pid:"0")+",0,0"),urlData&&"Y"==urlData.mem?!0:!1,{skip:'<a href="#ui-container" class="skipNavi">본문바로가기</a>',head:'<div class="ui-header"><div class="ui-inner"><button type="button" class="allNavBtn">전체메뉴 열기/닫기</button><h1><a href="#self">K2</a></h1><ul class="utilNav"><li><a href="#self">로그인</a></li><li><a href="#self">회원가입</a></li><li><a href="#self">마이페이지</a></li><li class="cart"><a href="#self">장바구니</a><span>05</span></li></ul><ul class="nav"><li class="active"><a href="#self">MEN</a><ul><li><a href="#self">자켓</a></li><li><a href="#self">티셔츠</a></li><li><a href="#self">베스트</a></li><li><a href="#self">팬츠</a></li><li><a href="#self">언더웨어</a></li></ul></li><li><a href="#self">WOMEN</a><ul><li><a href="#self">자켓</a></li><li><a href="#self">티셔츠</a></li><li><a href="#self">베스트</a></li><li><a href="#self">팬츠</a></li><li><a href="#self">언더웨어</a></li></ul></li><li><a href="#self">KIDS</a><ul><li><a href="#self">자켓</a></li><li><a href="#self">티셔츠</a></li><li><a href="#self">팬츠</a></li><li><a href="#self">신발</a></li><li><a href="#self">용품</a></li></ul></li><li><a href="#self">SHOES</a><ul><li><a href="#self">남성용</a></li><li><a href="#self">여성용</a></li></ul></li><li><a href="#self">BAG</a><ul><li><a href="#self">등산가방</a></li><li><a href="#self">컴포트배낭</a></li><li><a href="#self">보조가방</a></li></ul></li><li><a href="#self">ACCESSORY</a><ul><li><a href="#self">모자</a></li><li><a href="#self">장갑</a></li><li><a href="#self">스틱</a></li><li><a href="#self">양말</a></li><li><a href="#self">기타</a></li></ul></li><li><a href="#self">CAMPING</a><ul><li><a href="#self">텐트</a></li><li><a href="#self">가구류</a></li><li><a href="#self">침구류</a></li><li><a href="#self">취사류 및 기타</a></li><li><a href="#self">백패킹</a></li></ul></li></ul><ul class="subNav"><li><a href="#self">BEST</a></li><li><a href="#self">EVENT</a></li><li><a href="#self">BRAND</a></li></ul><button type="button" class="srchBtn">검색 영역 열기</button></div><div class="allNav">전체메뉴</div><div class="searchForm"><div class="siteSearch"><form name="search_form_${component.uid}" method="get" action="${searchUrl}"><div class="control-group"><label class="control-label skip" for="input_${component.uid}">${searchText}</label><div class="controls"><input id="input_${component.uid}" class="siteSearchInput left" type="text" name="text"value="" maxlength="100" placeholder="${searchPlaceholder}" /><button class="siteSearchSubmit" type="submit"/></button></div></div></form></div></div></div>',foot:'<div class="ui-footer"><div class="ui-inner"><div class="f_nav"><ul><li><a href="#self">브랜드소개</a></li><li><a href="#self">A/S 조회</a></li><li><a href="#self">이용약관</a></li><li><a href="#self">개인정보취급방침</a></li><li><a href="#self">정보보호 캠페인</a></li><li><a href="#self">사이트맵</a></li></ul><div class="familySite"><a href="#self">FAMILY SITE</a><ul><li><a href="http://www.safetyk2.co.kr" target="_blank" title="새창으로">Think safety</a></li><li><a href="http://www.k2cnf.co.kr" target="_blank" title="새창으로">K2C&amp;F</a></li><li><a href="http://www.eider.co.kr" target="_blank" title="새창으로">EIDER</a></li><li><a href="http://www.wideangle.co.kr/" target="_blank" title="새창으로">W.ANGLE</a></li><li><a href="http://www.salewa-korea.co.kr" target="_blank" title="새창으로">SALEWA</a></li></ul></div></div><div class="f_content"><div class="f_info"><span class="f_logo">Think Safety K2</span><div><address>서울시 성동구 아차산로11가길 3(성수동2가) 케이투코리아(주)</address><span>대표이사 장영훈</span></div><div><span>사업자등록번호 137-81-14921</span><a href="#self" target="_blank" title="새창으로">사업자 정보확인</a></div><div><span>통신판매업신고번호 성동 제 371호</span><span>부가통신상업신고번호 4236</span><span>고객상담실 1644-7781</span><span>FAX 02-32948183</span></div></div><dl class="f_customer"><dt>CUSTOMER CENTER</dt><dd>1644-7781</dd><dd>상담시간 : 오전9시 ~ 오후6시 (토, 일, 공휴일 휴무)</dd><dd>점심시간 : 정오 12시 ~ 오후 1시 (상담가능)</dd></dl><ul class="f_sns"><li><a href="#self" target="_blank" title="새창으로">페이스북</a></li><li><a href="#self" target="_blank" title="새창으로">블로그</a></li><li><a href="#self" target="_blank" title="새창으로">유투브</a></li></ul><a href="#self" target="_blank" title="새창으로" class="escro"><img src="../images/common/escro.gif" alt="에스크로" /></a></div></div></div>'});return{skip:function(){e(l.skip)},head:function(){e(l.head)},foot:function(){e(l.foot)}}}()}(window);