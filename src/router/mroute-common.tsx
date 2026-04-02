import {McRouterOutlet} from "mfront-core";


export function PageSlot() {
    return <McRouterOutlet/>;
}

export function DefaultErrorPage(){
    return (
        <>
            Unexpected Error
        </>
    )
}