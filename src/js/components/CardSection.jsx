import { Card } from "./Card"
export const CardSection = () => {
    const paises = ["España", "Alemania", "Italia", "Argentina"]
    return (
        <div className="row p-4">
            <Card url="https://es.wikipedia.org/wiki/Alhambra"
            imagen="https://imgs.search.brave.com/1NfGuM5PQ0uZXUNQZp7JprJ21cV6CejdSmmdYBHFpF8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxtaXJhLmVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEy/L0xhLUFsaGFtYnJh/LUdyYW5hZGEtMzUu/anBn" 
            titulo="La Alhambra" 
            descripcion="Fortaleza y palacio nazarí en una colina, considerada una de las atracciones más famosas de España.  Combina arquitectura islámica con jardines exuberantes."/>
            
            <Card url="https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_esqu%C3%AD_de_Sierra_Nevada"
            imagen="https://imgs.search.brave.com/zQWMWIWFLoDjAP3xAXjLNfg-5WpEY-qGsDOVZJa5GCA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MTU3OTIxMC9waG90/by92aWV3cy1vZi1z/aWVycmEtbmV2YWRh/LWZyb20tdGhlLXNp/ZXJyYS1kZS1jYXpv/cmxhLXktc2VndXJh/LW5hdHVyYWwtcGFy/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bnltSjBoT3ZW/TFBVSTNoWWY1OUZ0/Wnp3dGZPNEVzX2Fl/eXRua2Z0Skk5Zz0" 
            titulo="Sierra Nevada" 
            descripcion=" Ofrece paisajes de montaña con cimas nevadas y pistas de esquí, perfecta para excursiones de día."/>
            
            <Card url="https://es.wikipedia.org/wiki/Sacromonte"
            imagen="https://imgs.search.brave.com/_Ne1fGoFbzQeD_PNghK_CgpuXMcI1NZ2_3DpSqNGV6Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbGFu/ZGFsdXN0b3Vycy5l/cy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMy9xdWUtdmVy/LWVuLWVsLXNhY3Jv/bW9udGUuanBn" 
            titulo="El Sacromonte" 
            descripcion=" Conocido por sus casas-cueva y su tradición flamenca.  Ideal para visitar por la noche, con espectáculos flamencos en cuevas como Jardines de Zoraya o Zincalé. "/>
            
            <Card url="https://es.wikipedia.org/wiki/El_Ba%C3%B1uelo"
            imagen="https://imgs.search.brave.com/QtvxWq9EOBt5N4cy8qrYxdntcF9umSFkELf4OBII6V4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dHVyaXNtb2ludGVy/aW9yZGVtYWxhZ2Eu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzExL2VudHJh/ZGFzLUhhbW1hbS1B/bC1BbmRhbHVzLWJh/bm9zLWFyYWJlcy00/LTc2OHg0ODAuanBn" 
            titulo="Hammam Al Ándalus" 
            descripcion="Baño árabe moderno que recrea la experiencia de un hammam árabe, con arquitectura elegante, azulejos y baños termales para relajarse. "/>
        </div>
    );
};