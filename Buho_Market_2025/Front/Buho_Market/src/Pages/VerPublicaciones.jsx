import { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase';
import { Fragment } from "react"
import Card from '../Componets/Pagina_publicaciones/Publicacion_card';
import Header from "../Componets/Pagina_principal/Header";
import Footer from "../Componets/Pagina_principal/Footer";

export default function VerPublicaciones() {

    const [publicacionesId, setPublicacionesId] = useState([]);
    
    useEffect(() => {
        const publicId = async() => {
            const obID = await supabase
                .from('publicaciones')
                .select('id');
            
            setPublicacionesId(obID.data || []);
        }

        publicId();

    }, [])
    
    
    return (
        <div>
            <Header />
            <div className="cardsContainer">
                {publicacionesId.map((pub) => (
                <Card key={pub.id} publicacionId={pub.id}/>
                ))}
            </div>
            <Footer /> 
        </div>
    );
}
