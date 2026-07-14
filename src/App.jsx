import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { WhatsappLogo, Tooth, MapPin, Clock, CalendarCheck, ShieldCheck, Sparkle } from '@phosphor-icons/react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = "5511999999999"; 
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta com a Dra. Carolina Ribeiro.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <img src="/img/logo.png" alt="Consultório Odontológico Dra Carolina Ribeiro" className="main-logo" />
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary nav-whatsapp-btn">
            <WhatsappLogo weight="fill" size={20} />
            <span className="hidden-mobile">Agendar Consulta</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <motion.div 
              className="hero-text"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="text-caption" style={{ display: 'block', marginBottom: '1rem' }}>
                  ODONTOLOGIA DE EXCELÊNCIA
                </span>
                <h1 className="text-display" style={{ marginBottom: '1.5rem' }}>
                  Seu sorriso de volta com <em style={{ fontStyle: 'italic', color: 'var(--color-pink)' }}>confiança</em> e tecnologia.
                </h1>
                <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
                  Tratamentos odontológicos premium em um ambiente acolhedor, projetado para o seu bem-estar e conforto.
                </p>
                <div className="hero-actions">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary btn-full-mobile">
                    <WhatsappLogo weight="fill" size={24} />
                    Falar no WhatsApp
                  </a>
                  <a href="#tratamentos" className="btn-secondary btn-full-mobile">
                    Conhecer Tratamentos
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image-wrapper"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <img src="/img/doutora.png" alt="Dra Carolina Ribeiro" />
            </motion.div>
          </div>
        </section>

        {/* Bento Grid - Services */}
        <section id="tratamentos" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="container">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ marginBottom: '4rem', maxWidth: '600px' }}
            >
              <h2 className="text-h2" style={{ marginBottom: '1rem' }}>Nossas Especialidades</h2>
              <p className="text-body">
                Oferecemos uma gama completa de tratamentos modernos utilizando equipamentos de ponta para garantir resultados estéticos e duradouros.
              </p>
            </motion.div>

            <motion.div 
              className="bento-grid"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Cell 1: Large */}
              <motion.div variants={fadeInUp} className="bento-card col-span-full md:col-span-8">
                <Sparkle size={32} color="var(--color-pink)" style={{ marginBottom: '1.5rem' }} />
                <h3 className="text-h3" style={{ marginBottom: '1rem' }}>Estética Dental Avançada</h3>
                <p className="text-body" style={{ flexGrow: 1, color: 'var(--color-text-light)' }}>
                  Lentes de contato dental, clareamento a laser e facetas em porcelana. Transformamos sorrisos com precisão milimétrica e harmonia facial, utilizando materiais premium de alta durabilidade.
                </p>
              </motion.div>
              
              {/* Cell 2 */}
              <motion.div variants={fadeInUp} className="bento-card col-span-full md:col-span-4" style={{ backgroundColor: 'var(--color-pink-light)' }}>
                <ShieldCheck size={32} color="var(--color-pink-dark)" style={{ marginBottom: '1.5rem' }} />
                <h3 className="text-h4" style={{ color: 'var(--color-pink-dark)', marginBottom: '0.5rem' }}>Implantodontia</h3>
                <p className="text-body" style={{ color: 'var(--color-pink-dark)', opacity: 0.9 }}>
                  Recupere a função mastigatória e a estética com implantes de titânio de última geração.
                </p>
              </motion.div>

              {/* Cell 3 */}
              <motion.div variants={fadeInUp} className="bento-card col-span-full md:col-span-6">
                <Tooth size={32} color="var(--color-blue)" style={{ marginBottom: '1.5rem' }} />
                <h3 className="text-h4" style={{ marginBottom: '0.5rem' }}>Clínica Geral & Prevenção</h3>
                <p className="text-body">
                  Limpeza profissional (profilaxia), restaurações e check-ups regulares. A base de um sorriso saudável começa com a prevenção constante.
                </p>
              </motion.div>

              {/* Cell 4 */}
              <motion.div variants={fadeInUp} className="bento-card col-span-full md:col-span-6">
                <CalendarCheck size={32} color="var(--color-blue)" style={{ marginBottom: '1.5rem' }} />
                <h3 className="text-h4" style={{ marginBottom: '0.5rem' }}>Agendamento Flexível</h3>
                <p className="text-body">
                  Sabemos que seu tempo é valioso. Oferecemos horários que se adaptam à sua rotina, com atendimento pontual e sem esperas longas na recepção.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--color-blue-dark)', color: 'var(--color-white)', textAlign: 'center' }}>
          <div className="container">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-h2" style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>Pronto para transformar seu sorriso?</h2>
              <p className="text-body" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto 2.5rem auto' }}>
                Agende sua avaliação hoje mesmo e descubra o plano de tratamento ideal para você.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-pink-dark)' }}>
                <WhatsappLogo weight="fill" size={24} />
                Agendar via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="md-footer-grid">
            <div>
              <img src="/img/logo.png" alt="Logo" style={{ height: '56px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
              <p style={{ maxWidth: '350px', lineHeight: 1.6 }}>
                Consultório Odontológico Dra Carolina Ribeiro. Excelência em odontologia moderna, oferecendo tratamentos seguros e um atendimento focado na sua saúde e estética.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem', fontWeight: 600 }}>Contato & Endereço</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  <WhatsappLogo size={24} color="var(--color-pink)" />
                  (11) 99999-9999
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  <MapPin size={24} color="var(--color-pink)" style={{ flexShrink: 0 }} />
                  <span>
                    CONEGO JOSE LOURENCO, S/N - CENTRO<br />
                    São Felipe - BA, CEP: 44550000
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  <Clock size={24} color="var(--color-pink)" />
                  Segunda a Sexta, das 8h às 18h
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} Consultório Odontológico Dra Carolina Ribeiro. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
