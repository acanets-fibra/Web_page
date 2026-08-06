type SidebarIconName = "check" | "fiber" | "globe" | "spark" | "whatsapp";

function SidebarIcon({ name, size = 17 }: { name: SidebarIconName; size?: number }) {
  const common = { className: "icon", fill: "none", height: size, viewBox: "0 0 24 24", width: size, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true } as const;

  if (name === "check") return <svg {...common}><path d="m5 12 4.2 4.2L19 6.5" /></svg>;
  if (name === "fiber") return <svg {...common}><path d="M3 17h6l6-8h6M3 12h4l5-6h9M15 9l6 3M15 9l6 6" /><circle cx="21" cy="12" r="1.5" /><circle cx="21" cy="15" r="1.5" /><circle cx="21" cy="6" r="1.5" /></svg>;
  if (name === "globe") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z" /></svg>;
  if (name === "spark") return <svg {...common}><path d="m12 3 1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8L12 3Z" /></svg>;
  return <svg {...common}><path d="M20.2 11.4a8.2 8.2 0 0 1-12 7.2L4 20l1.5-4.1a8.2 8.2 0 1 1 14.7-4.5Z" /><path d="M9.2 8.7c.3-.4.8-.4 1.1-.1l1.1 1c.3.3.3.7.1 1l-.6.8c.7 1.1 1.7 2 2.8 2.7l.8-.6c.3-.2.7-.2 1 .1l1 1.1c.3.3.3.8-.1 1.1-.5.5-1.1.7-1.8.5-3.6-.9-6.4-3.7-7.3-7.3-.2-.7 0-1.3.5-1.8Z" /></svg>;
}

export default function MobileMenu() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navegación móvil">
      <a className="mobile-bottom-nav-active" href="#inicio"><span className="mobile-bottom-icon"><SidebarIcon name="spark" /></span><span>Inicio</span></a>
      <a href="#servicios"><span className="mobile-bottom-icon"><SidebarIcon name="fiber" /></span><span>Servicios</span></a>
      <a href="#planes"><span className="mobile-bottom-icon"><SidebarIcon name="check" /></span><span>Planes</span><small>Promo</small></a>
      <a href="#nosotros"><span className="mobile-bottom-icon"><SidebarIcon name="globe" /></span><span>Forma</span></a>
      <a href="#contacto"><span className="mobile-bottom-icon"><SidebarIcon name="whatsapp" /></span><span>Contacto</span></a>
    </nav>
  );
}
