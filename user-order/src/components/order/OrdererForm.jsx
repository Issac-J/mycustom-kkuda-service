import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { ordererState as ordererInfo } from "../../recoil/orderInfo";

import { BlackButton } from "../../styles/commonStyle";
import { ErrorMessage } from "../../styles/unit";
import { InputWrapper, FormWrapper } from "../../styles/wrapper";
import {
  KOREAN_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
} from "../../utils/regexConditions";

const OrdererForm = ({ onCloseForm, onChangeFormHeight }) => {
  const formRef = useRef(null);
  const [ordererState, setOrdererState] = useRecoilState(ordererInfo);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useLayoutEffect(() => {
    if (formRef?.current?.clientHeight) {
      onChangeFormHeight(formRef.current.clientHeight);
    }
  });

  useEffect(() => {
    if (!ordererState) return;

    setValue("ordererName", ordererState.ordererName, { shouldValidate: true });
    setValue("ordererPhoneNum", ordererState.ordererPhoneNum, {
      shouldValidate: true,
    });
    setValue("ordererEmail", ordererState.ordererEmail, {
      shouldValidate: true,
    });
  }, [ordererState, setValue]);

  const registerForm = (data) => {
    setOrdererState(data);
    onCloseForm();
  };

  const handleOnlyNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const isEmpty = (value) => (!value ? true : false);

  return (
    <FormWrapper ref={formRef}>
      <div>
        <InputWrapper
          error={errors.ordererName}
          isEmpty={isEmpty(watch("ordererName"))}>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            maxLength="10"
            {...register("ordererName", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: KOREAN_REGEX,
                message: "한글만 입력 가능합니다.",
              },
            })}
          />
        </InputWrapper>
        {errors.ordererName && (
          <ErrorMessage>{errors.ordererName?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.ordererPhoneNum}
          isEmpty={isEmpty(watch("ordererPhoneNum"))}>
          <label>연락처</label>
          <input
            type="tel"
            maxLength="11"
            onKeyPress={handleOnlyNumber}
            placeholder="- 을 제외한 숫자만 입력해주세요"
            {...register("ordererPhoneNum", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: PHONE_REGEX,
                message: "양식에 맞게 입력해주세요.",
              },
            })}
          />
        </InputWrapper>
        {errors.ordererPhoneNum && (
          <ErrorMessage>{errors.ordererPhoneNum?.message}</ErrorMessage>
        )}
      </div>

      <div>
        <InputWrapper
          error={errors.ordererEmail}
          isEmpty={isEmpty(watch("ordererEmail"))}>
          <label>이메일</label>
          <input
            type="email"
            placeholder="cs@shareround.co.kr"
            {...register("ordererEmail", {
              required: "필수로 입력해주세요.",
              pattern: {
                value: EMAIL_REGEX,
                message: "올바른 이메일 형식이 아닙니다. 다시 입력해주세요.",
              },
            })}
          />
        </InputWrapper>
        {errors.ordererEmail && (
          <ErrorMessage>{errors.ordererEmail?.message}</ErrorMessage>
        )}
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

export default OrdererForm;
