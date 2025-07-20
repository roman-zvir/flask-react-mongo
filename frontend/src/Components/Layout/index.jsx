import { Header } from "@/Components/Header";

export const Layout = ({children}) => {
    return(
        <>
        <Header />
        <main className="container p-4">
            {children}
        </main>
        </>
    )
}