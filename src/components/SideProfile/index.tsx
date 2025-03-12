import { Suspense } from "react";
import {  SideProfileBox, SideProfileInfo } from "./style";
import { DodamErrorBoundary, DodamFilledButton, Plus } from "@b1nd/dds-web";
import { authURL } from "constants/Dauth/dauth.constant";
import ProfileItem from "./ProfileItem";

const SideProfile = () => {
   
    return(
        <SideProfileBox>
            <SideProfileInfo>
                <span>내 정보</span>
                <DodamErrorBoundary text="에러 발생">
                    <Suspense fallback={<span>로딩중...</span>}>
                        <ProfileItem/>
                    </Suspense>
               </DodamErrorBoundary>
            
            </SideProfileInfo>
            <DodamFilledButton 
            size="Large"
            textTheme="staticWhite"
            onClick={() => (window.location.href = authURL)}
            >
                수정
            </DodamFilledButton>
        </SideProfileBox>
    )
}

export default SideProfile;