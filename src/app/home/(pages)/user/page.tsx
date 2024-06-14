import { GetUserAccount } from "@/lib/UserAccount/getUserAccount";

export default async function UserProfile() {
  const data = await GetUserAccount();
  return (
    <div></div>
  )
  
}