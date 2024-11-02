
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Circles } from 'react-loader-spinner';


const Profil = React.lazy(async () => ({
    default: (await import("../components/Formulaire/Formulaire")).FormulaireDInscription
}))

export const AppRoutesPaths = {

    register : "/register",


}

const CenteredSpinner = () => (
        <div className="flex items-center justify-center h-screen">
            <Circles
                height="40"  // Taille réduite
                width="40"   // Taille réduite
                color="#3498db"  // Couleur bleue
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <span className="ml-4 text-gray-600">Chargement...</span>
        </div>

    )
;

export function AppRoute() {
    return (
        <React.Suspense fallback={<CenteredSpinner/>}>
            <Routes>



                <Route path={AppRoutesPaths.register} element={<Profil/>}/>

            </Routes>
        </React.Suspense>
    )

}
