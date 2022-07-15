import { Column } from "../../../shared/ui/table-with-clickable-cell";
import { UserBase } from "../types";

export const userColumns: UserBase = {
    email: "Email",
    name: "Имя",
    phone: "Номер телефона",
}

export const columns: Column<UserBase>[] = ["name", "phone", "email"].map((key) => ({
    id: key as keyof UserBase,
    label: userColumns[key as keyof UserBase],
    minWidth: 170,
    align: "center",
}))
