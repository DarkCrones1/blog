import UserProfile from "@/components/user/UserProfile";
import { GetUserInfoDetail } from "@/lib/UserAccount/getUserInfoDetail";

export default async function UserProfilePage({ params }: { params: number }) {
  const data = await GetUserInfoDetail(params);

  return (
    <div>
      <UserProfile userProfile={data} />
    </div>
  );
}
