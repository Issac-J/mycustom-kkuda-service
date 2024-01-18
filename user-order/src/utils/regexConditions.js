export const KOREAN_REGEX = /^[ㄱ-ㅎ|가-힣]+$/;
export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PHONE_REGEX = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
