"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Navbar = () => {
    return (
        <div className="sticky z-50 top-0 inset-x-0 h-16 ">
        <header className="relative">
            <div className="">
                { /* Logo */ }
            </div>
            <div>
                { /* Nav menu */ }
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Platforms</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
        </div>
    )
};

export default Navbar;