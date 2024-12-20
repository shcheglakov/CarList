import { QueryClient, QueryClientProvider } from "react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()

export function Provider({children}: PropsWithChildren) {
    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}