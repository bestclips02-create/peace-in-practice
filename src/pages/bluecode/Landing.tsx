import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Code2, Smartphone, Lightbulb, ArrowRight, CheckCircle2, Sparkles,
  Layers, MessageSquareCode, Rocket, Quote, Mail, MapPin, Phone,
  Linkedin, Instagram, Github, ShieldCheck, Star, Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sistemas Personalizados",
    desc: "Plataformas web sob medida para automatizar processos, integrar dados e escalar operações com segurança.",
    bullets: ["Arquitetura escalável", "Integração com APIs", "Dashboards inteligentes"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile & Web",
    desc: "Apps iOS, Android e web responsivos com experiência fluida, design refinado e performance de ponta.",
    bullets: ["iOS & Android nativos", "Design centrado no usuário", "Atualizações contínuas"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria & Ideação",
    desc: "Transformamos ideias em produtos digitais viáveis com estratégia, validação e roadmap claro.",
    bullets: ["Discovery estratégico", "Validação de produto", "Roadmap de execução"],
  },
];

const steps = [
  { icon: Lightbulb, title: "Ideia", desc: "Você compartilha sua visão. Mergulhamos no seu negócio para entender objetivos, público e diferenciais." },
  { icon: Layers, title: "Esboço", desc: "Em poucos dias, entregamos um esboço visual gratuito do sistema ou app baseado na sua ideia." },
  { icon: MessageSquareCode, title: "Revisão", desc: "Refinamos juntos cada detalhe: fluxo, telas, funcionalidades e identidade visual." },
  { icon: Rocket, title: "Entrega Final", desc: "Desenvolvemos, testamos e entregamos o produto pronto para o mercado, com suporte contínuo." },
];

const portfolio = [
  {
    name: "Ecomans",
    tag: "Plataforma E-commerce",
    desc: "Sistema completo para comércio alimentício com gestão de pedidos, estoque e logística integrada.",
    color: "from-blue-500/30 to-cyan-400/20",
  },
  {
    name: "Eternize Pet",
    tag: "Personalização Digital",
    desc: "Plataforma de criação de quadros personalizados para pets com editor visual em tempo real.",
    color: "from-cyan-400/30 to-blue-600/20",
  },
  {
    name: "Projeto Sob Medida",
    tag: "Em Desenvolvimento",
    desc: "Seu próximo case pode estar aqui. Vamos construir algo extraordinário juntos.",
    color: "from-blue-600/30 to-indigo-500/20",
  },
];

const testimonials = [
  {
    name: "Marina Costa",
    role: "CEO, Ecomans",
    quote: "A Blue Code entendeu nosso negócio em profundidade. O sistema entregue superou expectativas e nossa operação ganhou outro patamar.",
    initials: "MC",
  },
  {
    name: "Rafael Mendes",
    role: "Fundador, Eternize Pet",
    quote: "O esboço gratuito já mostrou o nível de cuidado da equipe. Profissionalismo absoluto do briefing à entrega final.",
    initials: "RM",
  },
  {
    name: "Juliana Albuquerque",
    role: "Diretora de Inovação",
    quote: "Personalização real, não promessa. Cada tela foi pensada para nosso público. Recomendo sem hesitar.",
    initials: "JA",
  },
];

export default function BlueCodeLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    if (!name) return;
    toast({ title: "Solicitação recebida", description: "Em breve nossa equipe entrará em contato com seu esboço gratuito." });
    e.currentTarget.reset();
  }

  return (
    <div className="bluecode min-h-screen">
      {/* HEADER */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-xl bg-bc-cta grid place-items-center shadow-bc-glow">
              <span className="font-display text-primary-foreground text-lg font-bold">{"<>"}</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Blue<span className="text-gradient">Code</span></div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Digital Studio</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
            <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
          </nav>
          <Button asChild className="bg-bc-cta text-primary-foreground hover:opacity-90 shadow-bc-glow">
            <a href="#contato">Solicitar esboço</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-bc-hero">
        <div className="absolute inset-0 bg-bc-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-bc-float" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-bc-float" style={{ animationDelay: "2s" }} />

        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8 ring-bc">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-bc-pulse" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              Estúdio digital aceitando novos projetos
            </div>

            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up">
              Transformamos suas ideias em{" "}
              <span className="text-gradient">sistemas e aplicativos</span> de alto valor.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "120ms" }}>
              Da concepção à entrega final, construímos soluções digitais personalizadas para o seu negócio — com método, design refinado e tecnologia robusta.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Button asChild size="lg" className="bg-bc-cta text-primary-foreground hover:opacity-90 shadow-bc-glow h-12 px-7 text-base">
                <a href="#contato">
                  Solicite seu esboço gratuito
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base bg-card/40 backdrop-blur border-border hover:bg-card">
                <a href="#portfolio">Ver projetos</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl">
              {[
                { v: "+50", l: "Projetos entregues" },
                { v: "100%", l: "Personalização" },
                { v: "24h", l: "Resposta inicial" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> O que fazemos
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Soluções digitais sob medida para o seu negócio</h2>
            <p className="text-muted-foreground text-lg">
              Cada projeto começa com escuta. Cada entrega termina em resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card key={s.title} className="group relative overflow-hidden p-8 bg-bc-card border-border shadow-bc-card hover:-translate-y-1 transition-all duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-bc-cta grid place-items-center mb-6 shadow-bc-glow">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contato" className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-3 transition-all">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> Nosso método
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Primeiro o esboço. Depois a magia.</h2>
            <p className="text-muted-foreground text-lg">
              Você recebe um esboço visual da sua ideia <strong className="text-foreground">antes mesmo de fechar contrato</strong>. Sem compromisso, sem custo.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="relative w-14 h-14 rounded-2xl bg-bc-card border border-border grid place-items-center mb-5 shadow-bc-card">
                    <step.icon className="w-6 h-6 text-primary" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-bc-cta grid place-items-center text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* mockup mock */}
          <div className="relative mt-20 mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-border bg-bc-card p-6 shadow-bc-card overflow-hidden animate-bc-scan">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-3 text-xs text-muted-foreground font-mono">esboco-cliente.bluecode</div>
              </div>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-3 space-y-2">
                  <div className="h-3 rounded bg-primary/30 w-3/4" />
                  <div className="h-2 rounded bg-muted w-full" />
                  <div className="h-2 rounded bg-muted w-2/3" />
                  <div className="h-20 rounded-lg bg-bc-cta opacity-40 mt-3" />
                </div>
                <div className="col-span-6 space-y-3">
                  <div className="h-32 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded bg-muted" />
                    <div className="h-16 rounded bg-muted" />
                    <div className="h-16 rounded bg-muted" />
                  </div>
                </div>
                <div className="col-span-3 space-y-2">
                  <div className="h-2 rounded bg-muted w-full" />
                  <div className="h-2 rounded bg-muted w-5/6" />
                  <div className="h-2 rounded bg-muted w-4/6" />
                  <div className="h-24 rounded bg-primary/20 mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4 flex items-center gap-2">
                <Star className="w-3.5 h-3.5" /> Casos de sucesso
              </div>
              <h2 className="font-display text-4xl md:text-5xl">Projetos reais, resultados reais.</h2>
            </div>
            <a href="#contato" className="text-sm text-primary inline-flex items-center gap-1.5 hover:gap-3 transition-all">
              Quero o próximo case <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <Card key={p.name} className="group relative overflow-hidden border-border bg-bc-card shadow-bc-card hover:-translate-y-2 transition-all duration-500">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-bc-grid opacity-40" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-primary mb-1">{p.tag}</div>
                    <div className="font-display text-2xl">{p.name}</div>
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 grid place-items-center opacity-0 group-hover:opacity-100">
                    <div className="px-4 py-2 rounded-full bg-bc-cta text-primary-foreground text-sm font-medium shadow-bc-glow">
                      Ver detalhes
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4 flex items-center gap-2">
              <Quote className="w-3.5 h-3.5" /> O que dizem
            </div>
            <h2 className="font-display text-4xl md:text-5xl">A confiança de quem já confiou.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-8 bg-bc-card border-border shadow-bc-card relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-bc-cta grid place-items-center text-primary-foreground font-semibold text-sm shadow-bc-glow">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="contato" className="py-24 md:py-32">
        <div className="container">
          <Card className="relative overflow-hidden border-border bg-bc-card shadow-bc-card p-8 md:p-14">
            <div className="absolute inset-0 bg-bc-grid opacity-30" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Vamos começar</div>
                <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">
                  Comece seu projeto <span className="text-gradient">hoje mesmo</span>.
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Conte sua ideia. Em até 24h respondemos com próximos passos. Em poucos dias, você recebe um esboço gratuito.
                </p>
                <ul className="space-y-3 text-sm">
                  {["Esboço gratuito sem compromisso", "Atendimento direto com a equipe técnica", "Garantia de personalização total"].map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 bg-background/40 backdrop-blur p-6 rounded-2xl border border-border">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" name="name" required placeholder="Seu nome completo" className="bg-background/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" required placeholder="voce@empresa.com" className="bg-background/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idea">Sua ideia</Label>
                  <Textarea id="idea" name="idea" required placeholder="Descreva brevemente o sistema ou app que você imagina..." className="bg-background/60 min-h-[110px]" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-bc-cta text-primary-foreground hover:opacity-90 shadow-bc-glow h-12 text-base">
                  Solicitar esboço gratuito
                  <ArrowRight />
                </Button>
                <p className="text-[11px] text-muted-foreground text-center">Resposta em até 24h. Seus dados estão seguros.</p>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/30">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-bc-cta grid place-items-center shadow-bc-glow">
                  <span className="font-display text-primary-foreground text-lg font-bold">{"<>"}</span>
                </div>
                <div className="font-display text-lg font-semibold">Blue<span className="text-gradient">Code</span></div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estúdio digital especializado em sistemas e aplicativos sob medida.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {[Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-4">Serviços</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Sistemas</a></li>
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Aplicativos</a></li>
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Consultoria</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold mb-4">Empresa</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#processo" className="hover:text-foreground transition-colors">Processo</a></li>
                <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold mb-4">Contato</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> contato@bluecode.dev</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> +55 (11) 9 0000-0000</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Blue Code. Todos os direitos reservados.</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Selo Blue Code de qualidade — entrega garantida
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
