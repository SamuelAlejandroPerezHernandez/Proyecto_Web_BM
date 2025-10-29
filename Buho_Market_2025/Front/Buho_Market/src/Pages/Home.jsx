import { UserAuth } from "../context/AuthContext";

export default function Home() {
  const { user, signout } = UserAuth() || {};

  const handleSignOut = async () => {
    try {
      if (typeof signout === "function") {
        await signout();
        console.log("Sesión cerrada correctamente");
      } else {
        console.warn("No encontré signout en el contexto.");
      }
    } catch (e) {
      console.error("Error al cerrar sesión:", e);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <h1 style={{ margin: 0 }}>
        Bienvenido{user?.email ? `, ${user.email}` : ""}
      </h1>

      <button
        onClick={handleSignOut}
        style={{
          padding: "12px 20px",
          borderRadius: 10,
          border: 0,
          fontSize: 16,
          cursor: "pointer",
          color: "#fff",
          background: "#1a73e8",
          transition: "filter .15s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.filter = "none")}
      >
        Cerrar sesión
      </button>
    </div>
  );
}