
<!-- layer -->
<div id="couponLayer" class="dialog-cont" title="쿠폰 선택" style="width:435px;">
	<div class="brd_st_04 coupon_choose" id="availVoucherList">
	
		<ul>
			<li>
				<div class="chkRd_box">
					<input type="checkbox" id="coupon_discount" />
					<label for="coupon_discount">할인쿠폰</label>
				</div>
			</li>
			<li>
				<select name="voucherCodes" id="calVoucherList" style="width:100%">
					<option value="">선택해주세요.</option>
				</select>
			</li>
			<li>
				<div class="chkRd_box">
					<input type="checkbox" id="freebie_coupon" />
					<label for="freebie_coupon">사은품 쿠폰</label>
				</div>
			</li>
			<li>
				<select name="voucherCodes" id="" style="width:100%">
					<option value="">쿠폰을 선택해 주세요.</option>
				</select>
			</li>
		</ul>
	</div>

	<p class="list_01_li mt10">사용하려는 쿠폰이 보이지 않으시면 (마이페이지 > 쿠폰내역)을 확인해 주세요.</p>
	<div class="btn_area">
		<button class="btn_st_02" type="button" id="redeemVoucher" onclick="javascript:redeemVoucher();closeDialog();">확인</button>
		<button class="btn_st_02 bg_gray" type="button" onclick="closeDialog();">취소</button>
	</div>
</div>
<!-- //layer -->

