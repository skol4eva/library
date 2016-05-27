<%@ page contentType="text/html; charset=UTF-8" session="true" %>
<%@ taglib prefix="cloud" uri="com.ncsoft.storm.cloud.taglib.CloudTagLibrary" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="requestURI" value="${cloud:escapeHtml(pageContext.request.requestURI)}"/>
<c:set var="title" value="주신의 팔찌"/>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>${title} : ${cl_attribute.title}</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta http-equiv="imagetoolbar" content="no" />
    <meta name="resource-type" content="document" />
    <meta name="robots" content="all" />
    <meta name="author" content="Copyright &copy; NCSOFT Corporation. All Rights Reserved." />
	<meta property="og:url" content="${pageContext.request.requestURL}" />
	<meta property="og:image" content="${cl_attribute.ncstatic_pr}/event/p2016/160518_jushin/sns.jpg"/>
	<meta name="description" content="PVP에 특화된 새로운 힘, 주신의 팔찌로 더 강력한 데바로 거듭나리라. "/>
    <meta property="og:site_name" content="${cl_attribute.title}" />
    <meta property="og:title" content="${title} : ${cl_attribute.title}" />

    <link rel="stylesheet" type="text/css" href="promotion${cl_attribute.promotion_css}.css" media="screen"/>
    <link rel="shortcut icon" href="${cl_attribute.ncstatic_common}/aion.ico" type="image/x-icon"/>
    <link rel="icon" href="${cl_attribute.ncstatic_common}/aion.ico" type="image/x-icon"/>

    <script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/lib/html5shiv.js"></script>
    <script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/global.js"></script>
    <script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/lib/prototype_160.js"></script>
    <script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/lib/scriptaculous_all_181.js"></script>
    <script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/lib/jquery_171_min.js"></script>
    <script type="text/javascript">var $jQuery = jQuery.noConflict();</script>
    <script type="text/javascript" src="${cl_attribute.ncstatic}/common/js/aion.js"></script>
    <script type="text/javascript" src="http://static.plaync.co.kr/pr/aion/gnbAion.js"></script>
    <script type="text/javascript" src="http://static.plaync.co.kr/promotionE/js/promotionShare.min.js"></script>
    <script type="text/javascript">
        var session = '${cl_service.session.isLoggedIn}';
        //<![CDATA[
        var shareUrl= encodeURIComponent(location.href);
        var shareTitle=encodeURI('${title} : ${cl_attribute.title}');
        var snsTwitter='${title}';
        var logIdFacebook ='\'/아이온/프로모션/${title}/facebook\'';
        var logIdTwitter ='\'/아이온/프로모션/${title}/twitter\'';
        var coupon = '${cl_attribute.ncweb_nshop_nshop}';
        //]]>
    </script>
</head>
<body>
<c:if test="${cl_request.getto eq 1}"><script type="text/javascript">var gettoFlag=true;</script></c:if>
<script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/loadpnalogger.js"></script>
<cloud:include url="/common/inc/gnb" />

<div id="container">
    <div id="header">
		<a href="/" class="goHome">AION</a>
		<h1>${title}</h1>
		<p>PVP의 강자는 공격력 뿐만 아니라 방어도 높아야 하는 법! 주신들이 부여한 새로운 힘, 주신의 팔찌로 더 강력한 데바로 거듭나라!</p>
		<ul>
			<li>기간 : 2016년 5월 18일(수) 정기점검 후 ~ 6월 15일(수) 정기점검 전</li>
            <li>대상 : 라이브 및 마스터 서버 (테스트 서버 제외)</li>
		</ul>
		<a href="/event/list" title="이벤트 더보기" class="goEvent">이벤트 더보기</a>
	</div>

	<div id="contents">
		<div class="section-01 section" id="evt01">
            <h2>숨겨진 힘을 더하다! 주신의 팔찌</h2>
            <a href="http://aion.power.plaync.com/wiki/%EC%A3%BC%EC%8B%A0%EC%9D%98+%ED%8C%94%EC%B0%8C" class="btn-powerbook">파워북</a>
            <h3>각성 단계별 혜택</h3>
            <dl>
                <dt>PVP 방어력</dt>
                <dd>각성 수치에 따라 PVP 방어 상승</dd>
                <dt>마석 슬롯 확장</dt>
                <dd>5, 7, 10단계 각성 도달 시마다 마석 슬롯 확장 (총 3개)</dd>
                <dt>PVP 공격력</dt>
                <dd>6단계 각성부터 PVP 공격 상승</dd>
            </dl>
            <ul>
                <li>10레벨 이상 착용, 교환 및 거래 가능, 새로운 부위에 착용 가능한 PVP 특화 아이템, NPC 구매 </li>
                <li>신성한 각성수로 각성 할 수 있으며 최대 각성은 +10 단계까지 가능</li>
                <li>각성 단계에 따라 마석 슬롯이 개방되며, 주신의 팔찌에 숨겨진 능력치 추가</li>
            </ul>
            <p>+0 각성, +5 각성, +10 각성의 변화된 주신의 팔찌 이미지</p>
            <ul>
                <li>각성 실패 시 라이브 서버는 0단계 각성 상태, 마스터 서버는 파괴되어 아이템 소멸.</li>
                <li>각성 성공 시 PVP 방어력 증가, 6단계 각성부터 PVP 공격력이 추가로 증가.</li>
                <li>5단계, 7단계, 10단계 각성 성공 시마다 마석 슬롯이 1개씩 확장. (총 3개까지 확장)</li>
                <li>마석 슬롯이 확장되어 마석을 부여한 상태에서 각성 실패 시 0단계 각성 상태(라이브) 혹은 파괴(마스터)되고 확장된 슬롯 및 마석 삭제.</li>
                <li>5단계 및 10단계 각성 성공 시 외형 이펙트가 변경.</li>
            </ul>
        </div>

		<div class="section-02 section" id="evt02">
            <h2>대박 보너스! 액세서리 각성 찬스 </h2>
            <p>액세서리를 각성하고 싶다면 지금이 절호의 기회! 버프를 받았는지 꼭 확인하세요.</p>
            <h3>[이벤트] 액세서리 각성 혜택</h3>
            <p>액세서리(머리, 목걸이, 귀고리, 반지, 허리띠) 각성 실패 시 초기화 대신 각성 단계가 -1강이 되는 버프.</p>
            <p>이벤트 기간 동안 매일 저녁 7시 ~ 밤 11시에 적용되며 정시마다 버프 지급 (60분간 지속, 사망 시에도 유지)</p>
            <p>주의! 통합 인스턴스 던전에서는 버프 비적용 / 주신의 깃털, 주신의 팔찌, 별무기 각성 시 버프 비적용</p>
        </div>

        <div class="section-03 section" id="evt03">
            <h2>새로운 힘을 더하다! 주신의 팔찌 </h2>
            <p>새로운 힘을 위해 필요한 것만 모았습니다. 특별한 보너스는 덤!</p>

            <h3>라이브</h3>
            <dl>
                <dt>신성한 각성수 (15개입)</dt>
                <dd>신성한 각성수 15개 + 주신의 팔찌 상자 1개</dd>
                <dd>C 50,000 / P 500</dd>
                <dd><a href="#" class="btn-buy-01">구매하기</a></dd>
            </dl>
            <dl>
                <dt>신성한 각성수 (30개입)</dt>
                <dd>신성한 각성수 30개 + 주신의 팔찌 상자 2개</dd>
                <dd>C 100,000 / P 1,000</dd>
                <dd><a href="#" class="btn-buy-02">구매하기</a></dd>
            </dl>
            <dl>
                <dt>신성한 각성수 (45개입)</dt>
                <dd>신성한 각성수 45개 + 주신의 팔찌 상자 3개 + 보너스 [자쿠룽] 템페르 정복자의 신성한 모자 상자 1개</dd>
                <dd>C 150,000 / P 1,500</dd>
                <dd><a href="#" class="btn-buy-03">구매하기</a></dd>
            </dl>

            <h3>라이브</h3>
            <dl>
                <dt>신성한 각성수 (15개입)</dt>
                <dd>신성한 각성수 15개 + 특화된 주신의 팔찌 상자 1개</dd>
                <dd>C 50,000 / P 500</dd>
                <dd><a href="#" class="btn-buy-04">구매하기</a></dd>
            </dl>
            <dl>
                <dt>신성한 각성수 (30개입)</dt>
                <dd>신성한 각성수 30개 + 특화된 주신의 팔찌 상자 2개</dd>
                <dd>C 100,000 / P 1,000</dd>
                <dd><a href="#" class="btn-buy-05">구매하기</a></dd>
            </dl>
            <dl>
                <dt>신성한 각성수 (45개입)</dt>
                <dd>신성한 각성수 45개 + 특화된 주신의 팔찌 상자 3개 + 보너스 [자쿠룽] 천부장의 모자 상자 1개</dd>
                <dd>C 150,000 / P 1,500</dd>
                <dd><a href="#" class="btn-buy-06">구매하기</a></dd>
            </dl>
        </div>

        <div class="section-04 section" id="evt04">
            <h2>추가 보너스! 드디어 찾아온 각성전</h2>
            <p>각성을 시도한 데바라면 추가 보상을 받으세요. 신규 외형, 날개깃까지 다 드려요! </p>
            <p>점수 적립 기간 : 2016년 5월 18일 (수) 정기점검 후 ~ 6월 15일 (수) 정기점검 전 </p>
            <p>보상 수령 기간 : 2016년 5월 18일 (수) 정기점검 후 ~ 6월 22일 (수) 정기점검 전 </p>
            <c:choose>
                <c:when test="${cl_service.session.isLoggedIn}">
                <a class="btn-coupon" href="http://nshop.plaync.com/myshop/coupon/popup/couponProfileRegisterForm?gameCode=27" onclick="window.open(this.href, '_blank', 'width=515, height=700'); return false;">쿠폰함 보기</a>
                </c:when>
                <c:otherwise>
                <a href="javascript:GNBLogin();" class="btn-coupon">쿠폰함 보기</a>
                </c:otherwise>
            </c:choose>

            <h3>각성 점수 획득 방법</h3>
            <ul>
                <li>각성 1회 성공/실패 시 1점 획득</li>
                <li>최대 획득 제한 없음</li>
                <li>모든 각성(액세서리, 주신의 깃털, 주신의 팔찌, 별무기) 포함</li>
            </ul>

            <div class="login-wrap">
            <c:choose>
                <c:when test="${cl_service.session.isLoggedIn}">
                <div class="login-02"><!-- 정상 로그인 상태 -->
                    <dl>
                        <dt>각성점수 :</dt>
                        <dd class="live">라이브 <span>999점</span></dd>
                        <dd class="master">마스터 <span>0점</span></dd>
                    </dl>
                    <a href="#layer-01" class="btn-score openLayer">각성 점수 상세 내역 보기</a>
                </div>
                <%-- 제재계정
                <div class="login-03">
                    <p>제재 계정은 참여하실 수 없습니다.</p>
                </div>
                --%>
                </c:when>
                <c:otherwise>
                <div class="login-01">
                    <p>내 각성 점수를 확인하려면? 로그인이 필요합니다.</p>
                    <a href="javascript:GNBLogin();" class="btn-login">로그인</a>
                </div>
                </c:otherwise>
            </c:choose>
            </div>

            <p>* 각성 점수는 계정 내 모든 캐릭터의 기록이 합산되어 적립됩니다. (라이브/마스터 구분) </p>
            <p>* 오전 6시~오후 6시 기록은 오후 8시/ 오후6시~오전6시 기록은 오전 8시 반영됩니다. </p>

            <h3>각성 점수 보상 교환 </h3>

            <h4>라이브</h4>
            <ul>
                <li>[자쿠룽] 권장레벨 감소 마법석 4점 <a href="#change" class="btn-change-01">교환</a></li>
                <li>[자쿠룽] 고급 신화 날개깃 상자 8점 <a href="#change" class="btn-change-02">교환</a></li>
                <li>70레벨 복합마석 꾸러미 15점 <a href="#change" class="btn-change-03">교환</a></li>
                <li>큐브 확장 열쇠 18점 <a href="#change" class="btn-change-04">교환</a></li>
                <li>평범한 출근복 25점
                    <a href="#change" class="btn-change-05">교환</a>
                    <a href="#layer-02" class="btn-link-01 openLayer">자세히보기</a>
                </li>
                <li>전장의 가호 (30일) 30점 <a href="#change" class="btn-change-06">교환</a></li>
                <li>용사의 방어 I (30일) 30점 <a href="#change" class="btn-change-07">교환</a></li>
                <li>용사의 방어 II (30일) 30점 <a href="#change" class="btn-change-08">교환</a></li>
                <li>불타는 병아리 날개 45점
                    <a href="#change" class="btn-change-09">교환</a>
                    <a href="#layer-03" class="btn-link-02 openLayer">자세히보기</a>
                </li>
            </ul>
            <a href="#layer-04" class="btn-link-03 openLayer">라이브 서버 보상 자세히 보기</a>

            <h4>마스터</h4>
            <ul>
                <li>금 공훈 훈장이 담긴 상자 2점 <a href="#change" class="btn-change-10">교환</a></li>
                <li>백부장 장신구 상자 15점 <a href="#change" class="btn-change-11">교환</a></li>
                <li>큐브 확장 열쇠 18점 <a href="#change" class="btn-change-12">교환</a></li>
                <li>평범한 출근복 25점
                    <a href="#change" class="btn-change-13">교환</a>
                    <a href="#layer-02" class="btn-link-04 openLayer">자세히보기</a>
                </li>
                <li>천부장 장신구 상자 30점 <a href="#change" class="btn-change-14">교환</a></li>
                <li>특화된 전장의 가호 (30일) 30점 <a href="#change" class="btn-change-15">교환</a></li>
                <li>특화된 용사의 방어 I (30일) 30점 <a href="#change" class="btn-change-16">교환</a></li>
                <li>특화된 용사의 방어 II (30일) 30점 <a href="#change" class="btn-change-17">교환</a></li>
                <li>불타는 병아리 날개 45점
                    <a href="#change" class="btn-change-18">교환</a>
                    <a href="#layer-03" class="btn-link-05 openLayer">자세히보기</a>
                </li>
            </ul>
            <a href="#layer-05" class="btn-link-06 openLayer">마스터 서버 보상 자세히 보기</a>


        </div>

        <div class="section-caution">
            <div class="caution-wrap">
                <h2>필독! 주의사항</h2>
                <ul class="list">
                    <li>1. 라이브 상품은 라이브 서버 캐릭터로만, 마스터 상품은 마스터 서버 캐릭터로만 구매 및 배송이 가능합니다.</li>
                    <li>2. 테스트 서버 고객, 제재 계정은 참여가 불가능합니다.</li>
                    <li>3. 구매하시는 아이템의 속성을 반드시 확인 부탁드립니다.</li>
                    <li>4. 각성 성공/실패 점수는 사용한 각성수 종류와 관계 없이 적립됩니다.</li>
                    <li>5. 각성 점수로 교환한 보상 아이템은 쿠폰 형태로 쿠폰함으로 발송됩니다.</li>
                    <li>6. 라이브 서버 각성 점수로는 라이브 서버 보상만, 마스터 서버 각성 점수로는 마스터 서버 보상만 교환할 수 있습니다.</li>
                    <li>7. 큐브 확장 열쇠는 라이브/마스터 서버에서 각각 1회씩 교환 가능합니다.</li>
                    <li>8. 쿠폰을 사용한 캐릭터 선택 시, 한 번 더 확인 부탁드립니다. 잘못 사용된 쿠폰 및 아이템 선택에 대해서는 복구 및 이동에 도움을 드릴 수 없습니다.</li>
                    <li>9. 쿠폰의 유효기간은 최초 발급일 기준 30일까지입니다.</li>
                    <li>10. 본 이벤트는 <a href="/event/rule" class="btn-rule">아이온 이벤트 규약</a>을 따릅니다.</li>
                </ul>
            </div>
		</div>
	</div>

	<div id="footer">
		<address>Copyright © NCSOFT Corporation. All Rights Reserved.</address>
	</div>

    <div class="quick-menu">
        <ul>
            <li><a href="#evt01" class="evt01"><span>주신의 팔찌</span></a></li>
            <li><a href="#evt02" class="evt02"><span>액세서리 각성 찬스</span></a></li>
            <li><a href="#evt03" class="evt03"><span>새로운 힘 획득 방법</span></a></li>
            <li><a href="#evt04" class="evt04"><span>돌아온 각성전</span></a></li>
        </ul>
        <a href="#header" class="top"><span>TOP</span></a>
    </div>

    <!-- (S) : layer-01 Pop-up -->
    <div id="layer-01">
        <div class="dialog-content">
            <h2 class="ally">각성 점수 획득 및 사용 내역 </h2>
            <div class="score-wrap">
                <p class="total">총 획득 점수 : <span class="live">라이브 9점</span> / <span class="master">마스터 9999점</span></p>
                <p class="get">총 획득 점수 : <span class="live">라이브 9999점</span> / <span class="master">마스터 99점</span></p>
                <p class="use">총 획득 점수 : <span class="live">라이브 99점</span> / <span class="master">마스터 999점</span></p>
            </div>

            <div class="tab-wrap">
                <div class="tab01">
                    <ul class="tab">
                        <li><a href="#tab-01">라이브</a></li>
                        <li><a href="#tab-02">마스터</a></li>
                    </ul>
                    <div id="tab-01" class="tab-content live"><!-- 라이브 -->
                        <div class="get"><!-- get : 획득내역 -->
                            <table>
                                <caption>라이브 각성 점수 획득 일자,시각,점수 목록</caption>
                                <colgroup>
                                    <col class="col1" />
                                    <col class="col2" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">획득 일자 및 시각</th>
                                    <th scope="col">획득 점수</th>
                                </tr>
                                </thead>
                            </table>
                            <div class="scroll">
                                <table>
                                    <caption>라이브 각성 점수 획득 일자,시각,점수 목록</caption>
                                    <colgroup>
                                        <col class="col1" />
                                        <col class="col2" />
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">45</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">21</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">15</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">21</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">15</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="use"><!-- use : 사용내역 -->
                            <table>
                                <caption>라이브 감성 점수 사용 내역 안내 목록</caption>
                                <colgroup>
                                    <col class="col1" />
                                    <col class="col2" />
                                    <col class="col3" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">사용 일자 및 시각</th>
                                    <th scope="col">사용 내역</th>
                                    <th scope="col">사용 점수</th>
                                </tr>
                                </thead>
                            </table>
                            <div class="scroll">
                                <table>
                                    <caption>라이브 감성 점수 사용 내역 안내 목록</caption>
                                    <colgroup>
                                        <col class="col1" />
                                        <col class="col2" />
                                        <col class="col3" />
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>[자쿠룽] 고급 신화 날개깃 상자</td>
                                        <td class="score">45</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>불타는 병아리 날개</td>
                                        <td class="score">3</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>평범한 출근복</td>
                                        <td class="score">3</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="tab-02" class="tab-content master"><!-- 마스터 -->
                        <div class="get"><!-- get : 획득내역 -->
                            <table>
                                <caption>마스터 각성 점수 획득 일자,시각,점수 목록</caption>
                                <colgroup>
                                    <col class="col1" />
                                    <col class="col2" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">획득 일자 및 시각</th>
                                    <th scope="col">획득 점수</th>
                                </tr>
                                </thead>
                            </table>
                            <div class="scroll">
                                <table>
                                    <caption>마스터 각성 점수 획득 일자,시각,점수 목록</caption>
                                    <colgroup>
                                        <col class="col1" />
                                        <col class="col2" />
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">45</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td class="score">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="use"><!-- use : 사용내역 -->
                            <table>
                                <caption>마스터 감성 점수 사용 내역 안내 목록</caption>
                                <colgroup>
                                    <col class="col1" />
                                    <col class="col2" />
                                    <col class="col3" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">사용 일자 및 시각</th>
                                    <th scope="col">사용 내역</th>
                                    <th scope="col">사용 점수</th>
                                </tr>
                                </thead>
                            </table>
                            <div class="scroll">
                                <table>
                                    <caption>마스터 감성 점수 사용 내역 안내 목록</caption>
                                    <colgroup>
                                        <col class="col1" />
                                        <col class="col2" />
                                        <col class="col3" />
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>금 공훈 훈장이 담긴 상자</td>
                                        <td class="score">45</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>불타는 병아리 날개</td>
                                        <td class="score">3</td>
                                    </tr>
                                    <tr>
                                        <td>2016-05-19 06:00</td>
                                        <td>특화된 용사의 방어 II (30일)</td>
                                        <td class="score">3</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    <tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td class="score">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- (E) : layer-01 Pop-up -->

    <!-- (S) : layer-02 Pop-up -->
    <div id="layer-02">
        <div class="dialog-content">
            <h2 class="ally">평범한 출근복 이미지 스크린샷</h2>
        </div>
    </div>
    <!-- (E) : layer-02 Pop-up -->

    <!-- (S) : layer-03 Pop-up -->
    <div id="layer-03">
        <div class="dialog-content">
            <h2 class="ally">불타는 병아리 날개 스크린샷</h2>
        </div>
    </div>
    <!-- (E) : layer-03 Pop-up -->

    <!-- (S) : layer-04 Pop-up -->
    <div id="layer-04">
        <div class="dialog-content">
            <h2 class="ally">라이브 서버 보상 자세히 보기</h2>
            <table>
                <caption>라이브 서버 보상 리스트</caption>
                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">아이템명</th>
                    <th scope="col">아이템 상세</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>[자쿠룽] 권장레벨 감소 마법석</td>
                    <td>
                        - 사용 시 일부 장비의 권장레벨이 감소,
                        - 거래 가능
                    </td>
                </tr>
                <tr>
                    <td>[자쿠룽] 고급 신화 날개깃 상자</td>
                    <td>
                        - 다양한 신화 등급 날개가 들어있는 상자,
                        - 특무 집행 대장의 신성한 날개깃, 제4 용제의 날개깃, 명멸하는 용제의 날개깃, 군단장 바사르티의 날개, 히페리온의 날개, 향상된 정교한 다이나튬의 날개깃, 정교한 다이나튬의 날개깃 중 1종 랜덤 습득 가능<br>
                        - 거래 가능
                    </td>
                </tr>
                <tr>
                    <td>70레벨 복합마석 꾸러미</td>
                    <td>
                        - 70레벨 복합마석 중 1종 선택 습득,
                        - 거래 가능
                    </td>
                </tr>
                <tr>
                    <td>큐브 확장 열쇠</td>
                    <td>
                        - 큐브 확장에 사용 되는 열쇠,
                        - 큐브 확장의 추가 단계에서 사용할 수 있음,
                        - 거래 불가
                    </td>
                </tr>
                <tr>
                    <td>평범한 출근복</td>
                    <td>
                        - 외형 변경 1회 가능,
                        - 거래 가능
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>전장의 가호 (30일)</td>
                    <td>- PvP 방어력 1% 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>용사의 방어 I (30일)</td>
                    <td>- 방패 방어 +39점 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>용사의 방어 II (30일)</td>
                    <td>- 물리 치명타 저항 +21점 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>불타는 병아리 날개</td>
                    <td>
                        - 외형 변경 1회 가능,
                        - 거래 가능
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- (E) : layer-04 Pop-up -->

    <!-- (S) : layer-05 Pop-up -->
    <div id="layer-05">
        <div class="dialog-content">
            <h2 class="ally">마스터 서버 보상 자세히 보기</h2>
            <table>
                <caption>마스터 서버 보상 리스트</caption>
                <colgroup>
                    <col class="col1" />
                    <col class="col2" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">아이템명</th>
                    <th scope="col">아이템 상세</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>금 공훈 훈장이 담긴 상자</td>
                    <td>
                        - 금 공훈 훈장 3개를 얻을 수 있는 꾸러미,
                        - 거래 가능
                    </td>
                </tr>
                <tr>
                    <td>백부장 장신구 상자</td>
                    <td>
                        - 백부장 장신구 중 1개를 선택하여 습득 가능 (투구 제외),
                        - 거래 불가
                    </td>
                </tr>
                <tr>
                    <td>천부장 장신구 상자</td>
                    <td>
                        - 천부장 장신구 중 1개를 선택하여 습득 가능 (투구 제외),
                        - 거래 불가
                    </td>
                </tr>
                <tr>
                    <td>큐브 확장 열쇠</td>
                    <td>
                        - 큐브 확장에 사용 되는 열쇠,
                        - 큐브 확장의 추가 단계에서 사용할 수 있음,
                        - 거래 불가
                    </td>
                </tr>
                <tr>
                    <td>평범한 출근복</td>
                    <td>
                        - 외형 변경 1회 가능,
                        - 거래 가능
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>특화된 전장의 가호 (30일)</td>
                    <td>- PvP 방어력 0.7% 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>특화된 용사의 방어 I (30일)</td>
                    <td>- 방패 방어 +27점 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>특화된 용사의 방어 II (30일)</td>
                    <td>- 물리 치명타 저항 +15점 증가 버프 (30일)</td>
                </tr>
                <tr>
                    <td>불타는 병아리 날개</td>
                    <td>
                        - 외형 변경 1회 가능,
                        - 거래 가능
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- (E) : layer-05 Pop-up -->

</div>
<script type="text/javascript" inline="javascript">
    /*<![CDATA[*/
    promotionShare('/아이온/이벤트프로모션/${title}');
    /*]]>*/
</script>
<script type="text/javascript" src="${cl_attribute.ncstatic_common}/js/uikit/modal/modalpopup.min.js"></script>
<script type="text/javascript" src="ui.js"></script>
</body>
</html>
