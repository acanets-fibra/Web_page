import Image from "next/image";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

type IconName =
  | "arrow-down"
  | "arrow-up-right"
  | "check"
  | "fiber"
  | "globe"
  | "menu"
  | "spark"
  | "systems"
  | "whatsapp";

function Icon({ name, className = "", size = 18 }: { name: IconName; className?: string; size?: number }) {
  const common = {
    className: `icon ${className}`,
    fill: "none",
    height: size,
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  if (name === "arrow-up-right") {
    return <svg {...common}><path d="M5 19 19 5M8 5h11v11" /></svg>;
  }
  if (name === "arrow-down") {
    return <svg {...common}><path d="M12 4v16M6 14l6 6 6-6" /></svg>;
  }
  if (name === "fiber") {
    return <svg {...common}><path d="M3 17h6l6-8h6M3 12h4l5-6h9M15 9l6 3M15 9l6 6" /><circle cx="21" cy="12" r="1.5" /><circle cx="21" cy="15" r="1.5" /><circle cx="21" cy="6" r="1.5" /></svg>;
  }
  if (name === "globe") {
    return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z" /></svg>;
  }
  if (name === "systems") {
    return <svg {...common}><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><path d="M10 7h4a2 2 0 0 1 2 2v5M14 17h-4a2 2 0 0 1-2-2v-5" /></svg>;
  }
  if (name === "menu") {
    return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  }
  if (name === "whatsapp") {
    return <svg {...common}><path d="M20.2 11.4a8.2 8.2 0 0 1-12 7.2L4 20l1.5-4.1a8.2 8.2 0 1 1 14.7-4.5Z" /><path d="M9.2 8.7c.3-.4.8-.4 1.1-.1l1.1 1c.3.3.3.7.1 1l-.6.8c.7 1.1 1.7 2 2.8 2.7l.8-.6c.3-.2.7-.2 1 .1l1 1.1c.3.3.3.8-.1 1.1-.5.5-1.1.7-1.8.5-3.6-.9-6.4-3.7-7.3-7.3-.2-.7 0-1.3.5-1.8Z" /></svg>;
  }
  if (name === "check") {
    return <svg {...common}><path d="m5 12 4.2 4.2L19 6.5" /></svg>;
  }
  return <svg {...common}><path d="m12 3 1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8L12 3Z" /></svg>;
}

const services = [
  {
    number: "01",
    title: "Fibra óptica",
    icon: "fiber" as const,
    description:
      "Instalaciones limpias, escalables y pensadas para que tu conexión rinda hoy y mañana.",
    detail: "Diseño · Instalación · Certificación",
  },
  {
    number: "02",
    title: "Internet estable",
    icon: "globe" as const,
    description:
      "Conectividad de alto desempeño para hogares, comercios y equipos que no pueden detenerse.",
    detail: "Continuidad · Rendimiento · Soporte",
  },
  {
    number: "03",
    title: "Ingeniería & sistemas",
    icon: "systems" as const,
    description:
      "Consultoría y servicios profesionales para ordenar, proteger y hacer crecer tu infraestructura.",
    detail: "Redes · Seguridad · Consultoría",
  },
];

const principles = [
  "Entendemos tu necesidad antes de proponer",
  "Diseñamos para que tu red crezca contigo",
  "Te acompañamos después de instalar",
];

const plans = [
  {
    name: "Plan básico",
    speed: "20",
    price: "$20",
    features: ["Navegación rápida", "Soporte técnico"],
  },
  {
    name: "Plan estándar",
    speed: "30",
    price: "$24.99",
    regularPrice: "$25",
    promo: "Promoción",
    features: ["Streaming HD", "Juegos en línea"],
    featured: true,
  },
  {
    name: "Plan premium",
    speed: "40",
    price: "$28",
    features: ["Múltiples dispositivos", "Ultra rápido"],
  },
];

const whatsappLink = (message: string) =>
  `https://wa.me/50376300536?text=${encodeURIComponent(`Hola ACANETS, ${message}.`)}`;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="ACANETS, inicio">
          <span className="wordmark-a">A</span>
          <span>CAN</span>
          <span className="wordmark-e">E</span>
          <span>TS</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios"><Icon name="fiber" size={15} /><span>Servicios</span></a>
          <a href="#planes"><Icon name="check" size={15} /><span>Planes</span></a>
          <a href="#nosotros"><Icon name="globe" size={15} /><span>Nuestra forma</span></a>
          <a href="#contacto"><Icon name="whatsapp" size={15} /><span>Contacto</span></a>
        </nav>

        <div className="header-tools">
          <ThemeToggle />
          <a className="header-cta" href="#contacto">
            Hablemos <span className="header-cta-icon"><Icon name="arrow-up-right" size={15} /></span>
          </a>
        </div>

      </header>

      <MobileMenu />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Tecnología hecha cerca</div>
          <h1>
            Conectamos el futuro <em>de El Salvador.</em>
          </h1>
          <p className="hero-lede">
            Fibra óptica, internet e ingeniería de sistemas para las ideas que
            necesitan avanzar sin interrupciones.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              Cotizar instalación <span className="button-icon"><Icon name="arrow-up-right" size={16} /></span>
            </a>
            <a className="text-link" href="#servicios">
              Ver servicios <span className="text-link-icon"><Icon name="arrow-down" size={15} /></span>
            </a>
          </div>
          <div className="hero-trust">
            <span>FIBRA ÓPTICA</span>
            <i />
            <span>INGENIERÍA</span>
            <i />
            <span>SOPORTE LOCAL</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Logo de ACANETS y red de fibra óptica">
          <div className="visual-grid" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="signal signal-three" />
          <div className="hero-logo-frame">
            <Image
              className="brand-logo logo-dark"
              src="/acanets-logo-dark.png"
              alt="ACANETS, Internet de fibra óptica"
              width={541}
              height={509}
              priority
              unoptimized
            />
            <Image
              className="brand-logo logo-light"
              src="/acanets-logo-light.png"
              alt=""
              width={526}
              height={526}
              unoptimized
              aria-hidden="true"
            />
          </div>
          <div className="visual-note visual-note-top"><span /> Baja latencia</div>
          <div className="visual-note visual-note-bottom">Hecho para conectar <Icon name="arrow-up-right" size={15} /></div>
          <div className="visual-index">SV / 01</div>
        </div>
      </section>

      <div className="ticker" aria-label="Áreas de especialidad">
        <div className="ticker-track">
          <span>REDES QUE RESPONDEN</span><b><Icon name="spark" size={12} /></b><span>FIBRA ÓPTICA</span><b><Icon name="spark" size={12} /></b><span>INGENIERÍA APLICADA</span><b><Icon name="spark" size={12} /></b><span>REDES QUE RESPONDEN</span><b><Icon name="spark" size={12} /></b><span>FIBRA ÓPTICA</span><b><Icon name="spark" size={12} /></b><span>INGENIERÍA APLICADA</span>
        </div>
      </div>

      <section className="section services-section" id="servicios">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Lo que hacemos</div>
            <h2>Una base sólida para <em>llegar más lejos.</em></h2>
          </div>
          <p>Diseñamos soluciones de conectividad y sistemas con criterio técnico, atención humana y visión de largo plazo.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-topline"><span>{service.number}</span><span className="card-arrow"><Icon name="arrow-up-right" size={17} /></span></div>
              <div className="service-icon" aria-hidden="true"><Icon name={service.icon} size={54} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-detail">{service.detail}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="planes">
        <div className="section-heading pricing-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Internet residencial</div>
            <h2>Elige la velocidad que <em>necesitas.</em></h2>
          </div>
          <p>Planes de fibra óptica para conectarte, trabajar, estudiar y disfrutar tus contenidos con una conexión estable.</p>
        </div>

        <div className="plan-grid">
          {plans.map((plan, index) => (
            <article className={`plan-card${plan.featured ? " plan-card-featured" : ""}`} key={plan.name}>
              {plan.promo && <span className="plan-badge">{plan.promo}</span>}
              <div className="plan-card-top"><span className="plan-number">0{index + 1}</span><span className="plan-category">Internet residencial</span></div>
              <h3>{plan.name}</h3>
              <div className="plan-speed"><strong>{plan.speed}</strong><span>Mbps<br />velocidad de descarga</span></div>
              <div className="plan-price"><span>{plan.price}</span><small>/ mes</small>{plan.regularPrice && <del>Precio regular {plan.regularPrice}</del>}</div>
              <ul className="plan-features">
                {plan.features.map((feature) => <li key={feature}><span className="feature-icon"><Icon name="check" size={14} /></span><span>{feature}</span></li>)}
              </ul>
              <a className={`plan-button${plan.featured ? " plan-button-featured" : ""}`} href={whatsappLink(`me interesa el ${plan.name}`)} target="_blank" rel="noreferrer">
                Elegir plan <span className="plan-button-icon"><Icon name="whatsapp" size={15} /></span>
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note"><Icon name="spark" size={14} /> El precio de la instalación está sujeto a revisión.</p>
      </section>

      <section className="metrics" aria-label="Nuestro enfoque">
        <div className="metric"><strong>100%</strong><span>Enfoque en tu proyecto</span></div>
        <div className="metric"><strong>24/7</strong><span>La conexión sigue trabajando</span></div>
        <div className="metric"><strong>03</strong><span>Áreas que trabajan juntas</span></div>
        <div className="metric metric-last"><strong>SV</strong><span>Orgullosamente salvadoreños</span></div>
      </section>

      <section className="section approach-section" id="nosotros">
        <div className="approach-art" aria-label="Método ACANETS: conecta, resuelve y acompaña">
          <div className="approach-art-topline"><span>ACANETS / MÉTODO</span><span>03 PILARES</span></div>
          <div className="network-field" aria-hidden="true">
            <div className="network-orbit network-orbit-outer" />
            <div className="network-orbit network-orbit-inner" />
            <div className="network-line network-line-one" />
            <div className="network-line network-line-two" />
            <div className="network-line network-line-three" />
            <div className="network-core"><span>AC</span><small>de cerca</small></div>
            <div className="network-node network-node-one"><span className="network-node-icon"><Icon name="fiber" size={19} /></span><span>Conecta</span></div>
            <div className="network-node network-node-two"><span className="network-node-icon"><Icon name="systems" size={19} /></span><span>Resuelve</span></div>
            <div className="network-node network-node-three"><span className="network-node-icon"><Icon name="globe" size={19} /></span><span>Acompaña</span></div>
          </div>
          <div className="approach-art-caption"><span>AC / 2025</span><span>EL SALVADOR</span></div>
        </div>
        <div className="approach-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Nuestra forma</div>
          <h2>La tecnología debe sentirse <em>simple.</em></h2>
          <p className="approach-lede">Somos tres amigos construyendo una empresa con una idea clara: acercar la tecnología, resolver con criterio y estar presentes cuando más se necesita.</p>
          <div className="principles">
            {principles.map((principle, index) => (
              <div className="principle" key={principle}>
                <span>0{index + 1}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <div className="contact-content">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Empecemos una conversación</div>
          <h2>Tu próximo proyecto<br /><em>empieza conectado.</em></h2>
          <p>Cuéntanos qué necesitas. Te ayudamos a encontrar la forma más clara de llevarlo a la realidad.</p>
          <a className="button button-light" href={whatsappLink("una cotización de internet o asesoría") } target="_blank" rel="noreferrer">Escribir por WhatsApp <span className="button-icon"><Icon name="whatsapp" size={16} /></span></a>
        </div>
        <aside className="contact-aside" aria-label="Contacto directo por WhatsApp">
          <div className="contact-aside-top"><span className="contact-aside-icon"><Icon name="globe" size={18} /></span><span>Canal directo</span></div>
          <strong>WhatsApp<br /><em>7630-0536</em></strong>
          <p>Consulta disponibilidad, planes residenciales o solicita una cotización para tu proyecto.</p>
          <a href={whatsappLink("quiero abrir un chat") } target="_blank" rel="noreferrer"><span><Icon name="whatsapp" size={15} /> WhatsApp</span><Icon name="arrow-up-right" size={15} /></a>
        </aside>
        <div className="contact-footer-note"><span>ACANETS S.A.S. DE C.V.</span><span>EL SALVADOR · CENTROAMÉRICA</span></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio" aria-label="ACANETS, volver al inicio">
          <span className="wordmark-a">A</span><span>CAN</span><span className="wordmark-e">E</span><span>TS</span>
        </a>
        <span>Internet de fibra óptica · Ingeniería · Sistemas</span>
        <span>© 2025 ACANETS S.A.S. DE C.V. · Todos los derechos reservados</span>
      </footer>
    </main>
  );
}
