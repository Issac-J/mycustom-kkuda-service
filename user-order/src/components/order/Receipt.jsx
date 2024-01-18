import React from "react";
import { ReceiptWrapper } from "../../styles/wrapper";
import { Rental, RentalTotalCharge } from "../../styles/unit";
import { insertCommas } from "../../utils/numberUtil";

const Receipt = ({ price, coupons }) => {
  return (
    <ReceiptWrapper>
      <Rental>
        <label>렌탈료</label> <span>월 {insertCommas(price)}원</span>
      </Rental>
      <Rental>
        <label>쿠폰 사용</label> <span>{insertCommas(coupons)}원</span>
      </Rental>
      <RentalTotalCharge>
        <label>렌탈료 합계</label>
        <span>{insertCommas(price - coupons)}원</span>
      </RentalTotalCharge>
    </ReceiptWrapper>
  );
};

export default Receipt;
