import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
  const { getUser, getOrganization } = getKindeServerSession();

  const user = await getUser();
  const organization = await getOrganization();

  return (
    <div>
      <h1>Protected</h1>
      <p>{user?.email}</p>
      <p>{organization?.orgCode ?? "No organization"}</p>
    </div>
  );
}
