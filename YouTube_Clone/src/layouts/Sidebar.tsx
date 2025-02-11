import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { Children, ElementType } from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export function Sidebar(){
    return (
        <>
        <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-l lg:hidden">
        <SmallSidebarItem Icon= {Home} title="Home" url="/"/>
        <SmallSidebarItem Icon= {Repeat} title="Shorts" url="/"/>
        <SmallSidebarItem Icon= {Clapperboard} title="Subscription" url="/subscriptions"/>
        <SmallSidebarItem Icon= {Library} title="Shorts" url="/library"/>

        </aside>

        <aside className= "w-56 lg:Sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">

            <LargeSidebarSection>
                <LargeSidebarItem isAcitve Icon={Home} title="Home" url="/"/>
            </LargeSidebarSection>

        </aside>
        </>
    )
}

type SmallSidebarItemProps ={
    Icon : ElementType
    title : string
    url: string
}


function SmallSidebarItem({Icon,title,url} : SmallSidebarItemProps){

    return (
        <a href={url} className={twMerge(buttonStyles({variant : "ghost"}),"py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
         <Icon className = "w-6 h-6"/>
          <div className="text-sm">
            {title}
          </div>
        </a>
    )

}


function LargeSidebarSection({children}){
  return children
}

type LargeSidebarItemProps ={
    Icon : ElementType
    title : string
    url: string
    isAcitve?: boolean
}

function LargeSidebarItem({Icon,title,url,isAcitve=false} : LargeSidebarItemProps){
    return (
    <a href={url} className={twMerge(buttonStyles({variant :'ghost'}),`w-full flex items-center rounded-lg gap-4 p-3 ${isAcitve ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
         <Icon className="w-6 h-6"/>
         <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
         </div>
    </a>
    )

}