import { changeUserRole } from "@/actions/changeUserRole";
import { UserRoleForm } from "@/components/UserRoleForm";

export default function SettingsPage() {
  const action = async (...v: any) => {
    "use server";
    await changeUserRole(v);
  };

  return <UserRoleForm onSubmit={action} />;
}
