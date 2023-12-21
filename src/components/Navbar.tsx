"use client";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { platforms } from "@/lib/platforms";
import * as React from "react";
import Link from "next/link"
import ListItem from "@/components/ListItem";



const Navbar = () => {
    return (
        <div className="sticky z-50 top-0 inset-x-0 h-16 ">
            <header className="relative">
                <div className="">
                    { /* Logo */}
                </div>
                <div>
                    { /* Nav menu */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Platforms</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {platforms.map((platform) => (
                                            <ListItem
                                            key={platform.name}
                                            title={platform.name}
                                            href={platform.href}
                                            >
                                                {platform.tagLine}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
        </div>
    );
};

export default Navbar;