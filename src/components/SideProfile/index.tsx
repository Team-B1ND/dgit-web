import { useGetMyUserQuery } from "queries/member/member.query";
import { InfoBox, SideProfileBox, SideProfileInfo } from "./style";
import { DodamFilledButton, Plus } from "@b1nd/dds-web";
import { GithubLogo } from "asset/Components/githubLogo";
import { authURL } from "constants/Dauth/dauth.constant";

const SideProfile = () => {
    const {data} = useGetMyUserQuery();


    return(
        <SideProfileBox>
            <SideProfileInfo>
                <span>내 정보</span>
                <InfoBox>
                    
                        { data?.githubId !=null ?
                        data?.githubId ? 
                        <span>
                            <GithubLogo />
                            {data.githubId }
                        </span>
                        : 
                        <span style={{textDecorationLine:"underline",cursor:"pointer"}}
                        onClick={() => (window.location.href = authURL)}    
                        >
                            {/* <Plus size={20} color="labelNormal"/> */}
                            dauth 계정 로그인 
                        </span>
                        : <span>어드민</span>
                        }
                    
                </InfoBox>
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