import { UserProfile } from "./style";

interface ProfileProps {
  src: string;
}

const Profile = ({ src }: ProfileProps) => {
  return <UserProfile src={src} />;
};
export default Profile;
