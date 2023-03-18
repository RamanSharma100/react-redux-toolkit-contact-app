export const formatPhone = (phone) => {
  const phoneNum = phone.toString();
  const phoneNumArr = phoneNum.split("");
  phoneNumArr.splice(3, 0, "-");
  phoneNumArr.splice(7, 0, "-");
  const phoneNumFormatted = phoneNumArr.join("");
  return phoneNumFormatted;
};
