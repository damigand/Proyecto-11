import { useState, useEffect } from "react";

export function canScroll() {
    return document.documentElement.scrollHeight > document.documentElement.clientHeight;
}

export const InfiniteScroll = () => {
    const [isLoading, setIsLoading] = useState(false);

    //Controla el escuchador de la ventana para evitar duplicados.
    useEffect(() => {
        window.addEventListener("scroll", checkBottomPage);

        return () => window.removeEventListener("scroll", checkBottomPage);
    }, []);

    //Comprueba si está al final de la página.
    function checkBottomPage() {
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const bodyScroll = document.body.scrollHeight;

        if (scrollY + innerHeight >= bodyScroll) setIsLoading(true);
    }

    //Retorna el hook para la página que lo utilice.
    return [isLoading, setIsLoading];
};
