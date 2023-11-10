import Image from "next/image"
import { Button } from "./ui/button"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "./ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  export function Menu() {
    return (
      <Menubar className=" flex flex-row justify-between rounded-none border-b h-[75px] border-none px-2 lg:px-4">
        <Image src='/ot.png' alt='logo-nav' width={90} height={90} />

        <div className="flex flex-row gap-4 items-center">
            <Button>
                Create a Thread
            </Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </Menubar>
    )
  }