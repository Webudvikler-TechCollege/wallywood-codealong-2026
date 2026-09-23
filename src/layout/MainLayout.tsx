import { Outlet } from "react-router-dom"
import { Footer } from "../components/partials/Footer/Footer"
import { Header } from "../components/partials/Header/Header"
import { ContainerStyle } from "../styled/Container.style"

export const MainLayout = () => {
    return (
        <ContainerStyle $maxwidth={1024}>
            <Header />
            <Outlet />
            <Footer />
        </ContainerStyle>
    )
}
