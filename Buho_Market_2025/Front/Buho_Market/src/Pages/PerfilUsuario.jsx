import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/PerfilUsuario.css';

export default function PerfilUsuario() {
  const navigate = useNavigate(); // ✅ Hook para navegar

  // 🔹 Función al presionar el botón
  const handleAgregarProductoClick = () => {
    navigate('/publicaciones'); // Navega a Publicaciones.jsx
  };

  return (
    <div className="perfil-container">
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&display=swap"
        rel="stylesheet"
      />

      <header>
        <div className="header-contenido">
          <img
            src="/Img/new_logo.jpeg"
            alt="Logo Marketplace UCA"
            className="logo"
            width="40"
            height="40"
          />
          <h1>Perfil de usuario</h1>
        </div>
      </header>

      <main>
        {/* Resumen del usuario */}
        <section aria-labelledby="resumen-usuario">
          <h2 id="resumen-usuario">🪪 Resumen del usuario</h2>
          <article>
            <img
              src="/Img/Buho_pensando.png"
              alt="Avatar del usuario"
              width="110"
              height="110"
            />
            <div>
              <h3 className="nombre-usuario">[Nombre completo]</h3>
              <p><strong>Carrera o facultad:</strong> [Carrera]</p>
              <p><strong>Descripción breve:</strong> [Descripción personal]</p>
              <button>Editar perfil</button>
              <span
                aria-label="Cuenta verificada por la UCA"
                title="Cuenta verificada UCA"
              >
                ✅ Cuenta verificada UCA
              </span>
            </div>
          </article>
        </section>

        {/* Mis publicaciones */}
        <section aria-labelledby="mis-publicaciones">
          <h2 id="mis-publicaciones">🛍️ Mis publicaciones</h2>
          <div className="filtros-estado">
            <label>
              <input type="radio" name="filtro-estado" value="todos" defaultChecked /> Todos
            </label>
            <label>
              <input type="radio" name="filtro-estado" value="disponible" /> Disponibles
            </label>
            <label>
              <input type="radio" name="filtro-estado" value="vendido" /> Vendidos
            </label>
            <label>
              <input type="radio" name="filtro-estado" value="pausado" /> Pausados
            </label>
          </div>

          <div id="lista-publicaciones">
            <p id="mensaje-sin-publicaciones">No tienes publicaciones aún.</p>
          </div>

          {/* 🔹 Botón que navega a Publicaciones.jsx */}
          <button
            id="btn-agregar-producto"
            onClick={handleAgregarProductoClick}
          >
            Agregar nuevo producto
          </button>
        </section>

        {/* Reputación */}
        <section aria-labelledby="reputacion">
          <h2 id="reputacion">⭐ Reputación</h2>
          <div>
            <p>
              <strong>Calificación promedio:</strong>{' '}
              <span id="calificacion-promedio">[0.0]</span>
            </p>
            <p>
              <strong>Ventas exitosas:</strong>{' '}
              <span id="ventas-exitosas">[0]</span>
            </p>
            <h3>Comentarios recientes</h3>
            <div id="comentarios-recientes">
              <p id="sin-comentarios">Aún no tienes calificaciones.</p>
            </div>
          </div>
        </section>

        {/* Configuración de cuenta */}
        <section aria-labelledby="configuracion-cuenta">
          <h2 id="configuracion-cuenta">⚙️ Configuración de cuenta</h2>
          <div className="config-opciones">
            <button>Cambiar contraseña</button>
            <button>Eliminar cuenta</button>
            <button>Cerrar sesión</button>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Buho Market. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
