import { B1ndToast } from "@b1nd/b1nd-toastify";

const useApiError = (status: number) => {
  switch (status) {
    case 403:
      B1ndToast.showError("로그인 후 등록해주세요");
      break;
    case 409:
      B1ndToast.showError("이미 존재하는 유저입니다");
      break;
    case 410:
      B1ndToast.showError("관리자의 승인을 기다려주세요");
      break;
    case 500:
      B1ndToast.showError("서버 에러");
      break;

    default:
      B1ndToast.showError("유저 등록 실패");
      break;
  }
};

export default useApiError;
