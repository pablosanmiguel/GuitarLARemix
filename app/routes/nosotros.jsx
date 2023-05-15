import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
   return [
      { title: 'GuitarLA - Sobre Nosotros' },
      { description: 'Venta de guitarras, blog de música' }
   ]
}

export function links() {
   return [
      {
         rel: 'stylesheet',
         href: styles
      },
      {
         rel: 'preload',
         href: imagen,
         as: 'imagen'
      }
   ]
}

function Nosotros() {

   return (
      <main className="contenedor nosotros">
         <h2 className="heading">Nosotros</h2>
         <div className="contenido">
            <img src={imagen} alt="Imagen sobre nosotros" />
            <div>
               <p>Vivamus vitae ex non dolor bibendum lacinia non vel risus. Phasellus ut tincidunt felis, non ultrices tellus. Quisque ullamcorper nunc at eros scelerisque viverra. Etiam dignissim egestas placerat. Duis tempor erat ac mauris ultrices mollis. Integer eget mi vehicula, sagittis nibh sit amet, ultrices leo. Mauris nibh quam, vehicula non imperdiet eu, rutrum at arcu.</p>
               <p>Vivamus vitae ex non dolor bibendum lacinia non vel risus. Phasellus ut tincidunt felis, non ultrices tellus. Quisque ullamcorper nunc at eros scelerisque viverra. Etiam dignissim egestas placerat. Duis tempor erat ac mauris ultrices mollis. Integer eget mi vehicula, sagittis nibh sit amet, ultrices leo. Mauris nibh quam, vehicula non imperdiet eu, rutrum at arcu. </p>
            </div>
         </div>
      </main>
   )
}

export default Nosotros