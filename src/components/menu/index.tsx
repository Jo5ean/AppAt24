import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

import { ITEMS_MENU } from "@/const/menu";
import { type menuTypes } from "@/types/menuTypes";


const Menu: React.FC = () => {
    return (
        <NavigationMenu className="w-full max-w-full min-w-full font-bold text-center">
            <NavigationMenuList>
                {ITEMS_MENU.map((item: menuTypes) => (
                    <NavigationMenuItem>
                        <Link to={item.to}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {item.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            
            </NavigationMenuList>
        </NavigationMenu>
    );
}
export default Menu;