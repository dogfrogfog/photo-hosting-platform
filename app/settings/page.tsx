import { changeUserRole } from "@/actions/changeUserRole";
import { UserRoleForm } from "@/components/UserRoleForm";

export default function SettingsPage() {
  return <UserRoleForm onSubmit={changeUserRole} />;
}
