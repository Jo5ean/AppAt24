import { type menuTypes } from "@/types/menuTypes";

import Maps from '@/pages/Maps';
import Payments from '@/pages/Payments';
import Orders from '@/pages/Orders';
import Profile from '@/pages/Profile';

export const ITEMS_MENU: menuTypes[] = [{
    label: "Inicio",
    to: "/",
    component: Maps
},
{
    label: "Mi perfil",
    to: "/profile",
    component: Profile
},
{
    label: "Mis pagos",
    to: "/payments",
    component: Payments
},
{
    label: "Mis ordenes",
    to: "/payments",
    component: Orders
}]