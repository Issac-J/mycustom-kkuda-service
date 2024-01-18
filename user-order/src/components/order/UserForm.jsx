import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  userState as userInfo,
  ordererState as ordererInfo,
} from "../../recoil/orderInfo";
import useAddress from "../../hooks/useAddress";

import uncheckIcon from "../../images/check.svg";
import checkIcon from "../../images/check-blue.svg";
import { BlackButton } from "../../styles/commonStyle";
import { ErrorMessage, FormCopyButton, FormCheckIcon } from "../../styles/unit";
import {
  InputWrapper,
  AddressInputWrapper,
  FormWrapper,
} from "../../styles/wrapper";
import {
  KOREAN_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
} from "../../utils/regexConditions";

const UserForm = ({ onCloseForm, onChangeFormHeight }) => {
  const [isCopied, setIsCopied] = useState(false);
  const formRef = useRef(null);
  const { handleClick, isAddressData } = useAddress();
  const ordererState = useRecoilValue(ordererInfo);
  const [userState, setUserState] = useRecoilState(userInfo);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useLayoutEffect(() => {
    if (formRef?.current?.clientHeight) {
      onChangeFormHeight(formRef.current.clientHeight);
    }
  });

  useEffect(() => {
    if (!userState) return;

    setValue("userName", userState.userName);
    setValue("userPhoneNum", userState.userPhoneNum);
    setValue("userEmail", userState.userEmail);
    setValue("userZipCode", userState.userZipCode);
    setValue("userAddress", userState.userAddress);
    setValue("userDetailAddress", userState.userDetailAddress);
    setValue("userMemo", userState.userMemo);

    isAddressData.zonecode = userState.userZipCode;
    isAddressData.fullAddress = userState.userAddress;
  }, [userState, setValue]);

  useEffect(() => {
    if (!isAddressData.zonecode && !isAddressData.fullAddress) return;

    setValue("userZipCode", isAddressData.zonecode, { shouldValidate: true });
    setValue("userAddress", isAddressData.fullAddress, {
      shouldValidate: true,
    });
  }, [isAddressData, setValue]);

  const registerForm = (data) => {
    setUserState(data);
    onCloseForm();
  };

  const copyFormData = () => {
    if (isCopied) {
      setIsCopied(false);
      setValue("userName", "");
      setValue("userPhoneNum", "");
      setValue("userEmail", "");
    } else {
      setIsCopied(true);
      setValue("userName", ordererState.ordererName, { shouldValidate: true });
      setValue("userPhoneNum", ordererState.ordererPhoneNum, {
        shouldValidate: true,
      });
      setValue("userEmail", ordererState.ordererEmail, {
        shouldValidate: true,
      });
    }
  };

  const handleTextareaHeight = (e) => {
    const textarea = e.target;
    textarea.style.height = "1px";
    textarea.style.height = `${textarea.scrollHeight}px`;

    onChangeFormHeight(formRef.current.clientHeight);
  };

  const handleOnlyNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const isEmpty = (value) => (!value ? true : false);

  return (
    <FormWrapper ref={formRef}>
      <FormCopyButton onClick={copyFormData} isCopied={isCopied}>
        <FormCheckIcon src={isCopied ? checkIcon : uncheckIcon} />
        <span>위와 동일하게 채우기</span>
      </FormCopyButton>

      <div>
        <InputWrapper
          error={errors.userName}
          isEmpty={isEmpty(watch("userName"))}>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            maxLength="10"
            {...register("userName", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: KOREAN_REGEX,
                message: "한글만 입력 가능합니다.",
              },
            })}
          />
        </InputWrapper>
        {errors.userName && (
          <ErrorMessage>{errors.userName?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.userPhoneNum}
          isEmpty={isEmpty(watch("userPhoneNum"))}>
          <label>연락처</label>
          <input
            type="tel"
            maxLength="11"
            onKeyPress={handleOnlyNumber}
            placeholder="- 을 제외한 숫자만 입력해주세요"
            {...register("userPhoneNum", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: PHONE_REGEX,
                message: "양식에 맞게 입력해주세요.",
              },
            })}
          />
        </InputWrapper>
        {errors.userPhoneNum && (
          <ErrorMessage>{errors.userPhoneNum?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.userEmail}
          isEmpty={isEmpty(watch("userEmail"))}>
          <label>이메일</label>
          <input
            type="email"
            placeholder="cs@shareround.co.kr"
            {...register("userEmail", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: EMAIL_REGEX,
                message: "올바른 이메일 형식이 아닙니다. 다시 입력해주세요.",
              },
            })}
          />
        </InputWrapper>
        {errors.userEmail && (
          <ErrorMessage>{errors.userEmail?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInputWrapper
          error={errors.userZipCode}
          isEmpty={isEmpty(watch("userZipCode"))}>
          <div>
            <label>우편번호</label>
            <input
              type="hidden"
              {...register("userZipCode", {
                required: "필수로 입력해주세요.",
              })}
            />
            <p>{isAddressData.zonecode}</p>
          </div>
          <BlackButton width="90px" onClick={handleClick}>
            주소찾기
          </BlackButton>
        </AddressInputWrapper>
        {errors.userZipCode && (
          <ErrorMessage>{errors.userZipCode?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.userAddress}
          isEmpty={isEmpty(watch("userAddress"))}>
          <label>주소</label>
          <input
            type="hidden"
            {...register("userAddress", {
              required: "필수로 입력해주세요.",
            })}
          />
          <p>{isAddressData.fullAddress}</p>
        </InputWrapper>
        {errors.userAddress && (
          <ErrorMessage>{errors.userAddress?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.userDetailAddress}
          isEmpty={isEmpty(watch("userDetailAddress"))}>
          <label>상세주소</label>
          <textarea
            type="text"
            placeholder="상세주소를 입력해주세요"
            onKeyUp={handleTextareaHeight}
            onKeyDown={handleTextareaHeight}
            {...register("userDetailAddress", {
              required: "필수로 입력해주세요.",
            })}
          />
        </InputWrapper>
        {errors.userDetailAddress && (
          <ErrorMessage>{errors.userDetailAddress?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper isEmpty={isEmpty(watch("userMemo"))}>
          <label>배송요청사항</label>
          <textarea
            type="text"
            placeholder="직접 입력해주세요"
            maxLength="50"
            onKeyUp={handleTextareaHeight}
            onKeyDown={handleTextareaHeight}
            {...register("userMemo")}
          />
        </InputWrapper>
      </div>

      <BlackButton
        width="100%"
        height="52px"
        onClick={handleSubmit(registerForm)}>
        등록
      </BlackButton>
    </FormWrapper>
  );
};

export default UserForm;
