import { changeUserRole } from "@/actions/changeUserRole";
import { UserRoleForm } from "@/components/UserRoleForm";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="mb-12 text-3xl font-semibold">Settings</h1>
      <UserRoleForm onSubmit={changeUserRole} />
    </div>
  );
}
