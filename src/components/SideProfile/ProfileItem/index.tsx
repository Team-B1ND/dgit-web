import { useGetMemberQuery } from "queries/member/member.query";
import { InfoBox } from "../style";
import { GithubLogo } from "asset/Components/githubLogo";
import { authURL } from "constants/Dauth/dauth.constant";

const ProfileItem = () => {
     const { data } = useGetMemberQuery();
    return(
        <>
         <InfoBox>
                    {
                    data?.data.email ? 
                    <>
                        <GithubLogo />
                        {data.data.githubId ? <span>{data.data.githubId}</span> : <span>어드민</span> }
                    </>
                    : 
                    <span style={{textDecorationLine:"underline",cursor:"pointer"}}
                    onClick={() => (window.location.href = authURL)}    
                    >
                        dauth 계정 로그인 
                    </span>
                    }
                
            </InfoBox>
        </>
    )
}

export default ProfileItem;