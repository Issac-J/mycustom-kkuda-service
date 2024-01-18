import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const useAddress = () => {
  const [isAddressData, setIsAddressData] = useState({
    fullAddress: "",
    zonecode: "",
  });
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
  );

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setIsAddressData({
      fullAddress,
      zonecode: data.zonecode,
    });
    // console.log(fullAddress);
    // console.log(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return { handleClick, isAddressData };
};

export default useAddress;
