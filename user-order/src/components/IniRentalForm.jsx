import { useNavigate } from "react-router";

const IniRentalForm = ({
  productState,
  ordererState,
  userState,
  button,
  onSaveCoupon,
}) => {
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();

    onSaveCoupon();

    const myform = document.mobileweb;
    myform.action = "https://mobile.inicis.com/smart/payment/";
    myform.target = "_blank";
    myform.submit();

    navigate("/user/order-complete");
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <form
      name="mobileweb"
      method="post"
      acceptCharset="euc-kr"
      onSubmit={submitData}>
      <input type="hidden" name="P_INI_PAYMENT" defaultValue="RTPAY" />
      <input type="hidden" name="P_MID" defaultValue="INIpayTest" />
      <input type="hidden" name="P_OID" defaultValue="INIpaytest_1234" />
      <input type="hidden" name="P_GOODS" defaultValue={productState.name} />
      <input type="hidden" name="P_AMT" defaultValue={productState.price} />
      <input
        type="hidden"
        name="P_UNAME"
        defaultValue={ordererState.ordererName}
      />
      <input
        type="hidden"
        name="P_MOBILE"
        defaultValue={ordererState.ordererPhoneNum}
      />
      <input
        type="hidden"
        name="P_EMAIL"
        defaultValue={ordererState.ordererEmail}
      />
      <input type="hidden" name="P_CHARSET" defaultValue="utf8" />
      <input
        type="hidden"
        name="P_NEXT_URL"
        defaultValue="http://localhost:3000"
      />
      <input type="hidden" name="P_NOTI" defaultValue="" />

      <input
        type="hidden"
        name="P_RESERVED"
        defaultValue={`d_rtpay=Y&rentalPeriod=${productState.rentalMonth}&rentalPrice=${productState.rentalPrice}&rentalCompNm=${productState.vendor.name}&rentalCompNo=${productState.vendor.businessNumber}&rentalCompPhone=${productState.vendor.phoneNumber}&rentalRecipientNm=${userState.userName}&rentalRecipientPhone=${userState.userPhoneNum}`}
      />

      <input
        type="hidden"
        name="P_RECV_POSTNUM"
        defaultValue={userState.userZipCode}
      />
      <input
        type="hidden"
        name="P_RECV_ADDR"
        defaultValue={userState.userAddress}
      />
      <input
        type="hidden"
        name="P_RECV_ADDR_DETAIL"
        defaultValue={userState.userDetailAddress}
      />
      {button}
    </form>
  );
};

export default IniRentalForm;
