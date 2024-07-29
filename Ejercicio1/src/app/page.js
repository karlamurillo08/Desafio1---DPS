import  styles from "./page.module.css";
import Form from "./components/Form";
import Footer from "./components/Item";

export default function Home() {

    return (
        <main className={styles.main}>
            <body className={styles.body}>
                <div>
                <h1 className={styles.Title}>Lista de Compras de Peliculas</h1>
                <div>
                    <Form />

                    <Footer/>
                </div>
            </div>

            </body>
            
        
        </main>
        
    );
    

}



