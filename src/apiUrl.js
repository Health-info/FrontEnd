const serverDNS = "api.healthinfo.pe.kr";
export const siteUrl = "http://healthinfo.pe.kr";

//SignUp.js에서 사용
export const emailSendApiUrl = `http://${serverDNS}/auth/sendmail`;
export const emailAuthApiUrl = `http://${serverDNS}/auth/authNumCheck`;
export const signUpApiUrl = `http://${serverDNS}/auth/join`;
export const loginApiUrl = `http://${serverDNS}/auth/login`; //Login.js에서도 사용

//Menu.js에서 사용
export const logoutApiUrl = `http://${serverDNS}/auth/logout`;

//Login.js에서 사용

//FitMain.js에서 사용
export const commentAddApiUrl = `http://${serverDNS}/comment`;
export const commentSeeApiUrl = `http://${serverDNS}/comment/{ExerciseId}`;
export const commentLikeApiUrl = `http://${serverDNS}/comment/like`;
export const commentUnlikeApiUrl = `http://${serverDNS}/comment/unlike`;
