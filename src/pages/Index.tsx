import PitchSection from "@/components/PitchSection";
import SectionNav from "@/components/SectionNav";
import GlassCard from "@/components/GlassCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { StaggerContainer, StaggerItem, FadeSlideIn } from "@/components/Animations";
import { motion } from "framer-motion";
import { Download, ArrowRight, TrendingUp, Shield, Zap, Smartphone, Building2, Users, DollarSign, Target, Rocket, Globe } from "lucide-react";

const handleExportPDF = () => window.print();

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SectionNav />

      {/* PDF Export */}
      <button
        onClick={handleExportPDF}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold glass-card-glow hover:scale-105 transition-transform print:hidden"
      >
        <Download className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">Export PDF</span>
      </button>

      {/* ═══════════════════════ SECTION 1 — HERO ═══════════════════════ */}
      <PitchSection id="hero" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/0761815da1c3116fc16abf95ed6ddb5e9e156865.jpg" orbColor="hsla(155,100%,45%,0.12)">
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-badge mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Investor Pitch — Series A Opportunity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mb-3 md:mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Future of
            <br />
            <span className="text-gradient-primary">Rental Management</span>
            <br />
            in Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed"
          >
            Building the digital infrastructure for a <span className="text-foreground font-semibold">$1.1 Billion</span> market
            that's <span className="text-foreground font-semibold">95% untouched</span> by technology.
          </motion.p>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto">
            {[
              { end: 88.8, suffix: "%", label: "Households are Tenants", decimals: 1 },
              { end: 1.4, suffix: "M", label: "Rental Households", decimals: 1, prefix: "~" },
              { end: 1.1, suffix: "B", label: "Annual Market", decimals: 1, prefix: "$" },
              { end: 95, suffix: "%", label: "Still Manual", decimals: 0 },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <GlassCard variant="glow" className="py-3 md:py-4 text-center">
                  <div className="stat-number text-xl md:text-2xl lg:text-3xl text-gradient-primary mb-1">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} prefix={stat.prefix} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 2 — PROBLEM ═══════════════════════ */}
      <PitchSection id="problem" backgroundImage="https://kimi-web-img.moonshot.cn/img/realtors.co.ke/c552009cf821e3930920326149587629e1b6b738.webp" orbColor="hsla(0,80%,50%,0.1)" orbPosition="bottom-left">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="section-badge mb-6">The Problem</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              A <span className="text-gradient-accent">Broken</span> System
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Kenya's rental market runs on chaos. Here's what landlords deal with every single day.
            </p>
          </FadeSlideIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Building2 className="w-8 h-8" />, title: "Spreadsheet Hell", desc: "Rent tracked in notebooks and Excel files that get lost or corrupted" },
              { icon: <Users className="w-8 h-8" />, title: "Paper Caretakers", desc: "Handwritten receipts, no accountability, no audit trail" },
              { icon: <Smartphone className="w-8 h-8" />, title: "WhatsApp Chaos", desc: "Tenant complaints buried in group chats with no resolution tracking" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="py-8 group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeSlideIn delay={0.3}>
            <GlassCard variant="accent" className="text-center py-6">
              <p className="text-lg md:text-xl font-bold">
                The result? <span className="text-gradient-accent">Late rent. Disputes. Poor maintenance. Zero visibility.</span>
              </p>
            </GlassCard>
          </FadeSlideIn>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 3 — MARKET REALITY ═══════════════════════ */}
      <PitchSection id="market" backgroundImage="https://kimi-web-img.moonshot.cn/img/sirfrancismarketingltd.co.ke/aedae54a3d9cdba2e0840fb1ebe60241c68f7374.jpeg" orbColor="hsla(200,100%,50%,0.1)">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="section-badge mb-6">Market Size</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              A <span className="text-gradient-primary">Massive</span> Opportunity
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">Nairobi's rental economy is enormous — and growing fast.</p>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeSlideIn direction="left">
              <GlassCard variant="glow" className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground text-left">Unit Type</th>
                      <th className="py-3 px-4 text-xs uppercase tracking-wider text-muted-foreground text-right">Monthly Rent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Bedsitter", "KSh 7,500"],
                      ["1 Bedroom", "KSh 8,500"],
                      ["2 Bedroom", "KSh 15,000"],
                      ["4 Bedroom", "KSh 30,000"],
                    ].map(([type, rent]) => (
                      <tr key={type} className="border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-4 px-4 font-medium">{type}</td>
                        <td className="py-4 px-4 text-right font-bold text-primary">{rent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </GlassCard>
            </FadeSlideIn>

            <FadeSlideIn direction="right">
              <div className="text-center md:text-left">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Total Monthly Economy</div>
                <div className="stat-number text-6xl md:text-7xl text-gradient-primary mb-3">
                  KSh <AnimatedCounter end={12} suffix="B" />
                </div>
                <p className="text-muted-foreground text-sm">flowing through Nairobi's rental market every month</p>
                <div className="mt-6 flex items-center gap-2 justify-center md:justify-start text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">Growing 10% year-over-year</span>
                </div>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 4 — MARKET GAP ═══════════════════════ */}
      <PitchSection id="gap" backgroundImage="https://kimi-web-img.moonshot.cn/img/c8.alamy.com/781bdf6eb28274dc122302057e9986e6d7c099ae.jpg" orbPosition="center">
        <div className="max-w-4xl mx-auto text-center">
          <FadeSlideIn>
            <div className="section-badge mb-6">Why Now</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              The <span className="text-gradient-primary">Gap</span> Is Clear
            </h2>
            <p className="text-lg text-muted-foreground mb-14 max-w-xl mx-auto">
              Market conditions are perfectly aligned for disruption.
            </p>
          </FadeSlideIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { end: 77.1, suffix: "%", label: "Apartments", desc: "of Nairobi housing is multi-unit apartments — ideal for platform management", icon: <Building2 className="w-6 h-6" /> },
              { end: 15, suffix: "%", label: "Short-term Rentals", desc: "growing segment with even more management complexity", icon: <Target className="w-6 h-6" /> },
              { end: 10, suffix: "%", label: "Annual Rent Growth", desc: "consistent year-over-year increase expanding the total addressable market", icon: <TrendingUp className="w-6 h-6" /> },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <GlassCard variant="glow" className="py-8 text-center">
                  <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                  <div className="stat-number text-5xl md:text-6xl text-gradient-primary mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} decimals={stat.end % 1 !== 0 ? 1 : 0} />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 5 — SOLUTION ═══════════════════════ */}
      <PitchSection id="solution" backgroundImage="https://kimi-web-img.moonshot.cn/img/cloudrentalmanager.com/2f62ed7c37c5e6a84bb6e7055c3acb241cb52224.png" orbColor="hsla(200,100%,50%,0.1)" orbPosition="bottom-left">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-14">
              <div className="section-badge mb-6">Our Product</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                One Platform.<br /><span className="text-gradient-primary">Everything Managed.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                RentFlow replaces spreadsheets, paper, and WhatsApp with a single intelligent system.
              </p>
            </div>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeSlideIn direction="left">
              <GlassCard variant="glow" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <Shield className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>For Landlords</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Automated rent collection & real-time tracking",
                    "Digital tenant onboarding & management",
                    "Smart maintenance request routing",
                    "Financial reports & analytics dashboard",
                    "M-Pesa payment integration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeSlideIn>

            <FadeSlideIn direction="right">
              <GlassCard variant="glow" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                    <Smartphone className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>For Tenants</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "One-tap mobile rent payments",
                    "Digital receipts & full payment history",
                    "In-app maintenance requests with tracking",
                    "Lease & document access anytime",
                    "Smart payment reminders & notifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeSlideIn>
          </div>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 6 — REVENUE MODEL ═══════════════════════ */}
      <PitchSection id="revenue" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.safaricom.co.ke/32245cca249e3895b3e29e2a7002c3f1d742ee4c.png" orbColor="hsla(32,100%,55%,0.1)">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-14">
              <div className="section-badge mb-6">Business Model</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Simple. <span className="text-gradient-primary">Scalable.</span> Recurring.
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">SaaS subscription + transaction fees = predictable, compounding revenue.</p>
            </div>
          </FadeSlideIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Starter", units: "1–10 units", price: 5, featured: false },
              { tier: "Growth", units: "11–50 units", price: 25, featured: true },
              { tier: "Enterprise", units: "50+ units", price: 75, featured: false },
            ].map((plan) => (
              <StaggerItem key={plan.tier}>
                <GlassCard
                  variant={plan.featured ? "glow" : "default"}
                  className={`text-center py-10 relative ${plan.featured ? "md:scale-105 md:-translate-y-2" : ""}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ background: "var(--gradient-primary)", color: "hsl(var(--background))" }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{plan.tier}</div>
                  <div className="stat-number text-5xl mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    <span className={plan.featured ? "text-gradient-primary" : ""}>
                      <AnimatedCounter end={plan.price} prefix="$" />
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">/month</div>
                  <div className="text-xs text-muted-foreground mt-3 pt-3 border-t border-foreground/5">{plan.units}</div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 7 — PROJECTIONS ═══════════════════════ */}
      <PitchSection id="projections" orbColor="hsla(155,100%,45%,0.08)" orbPosition="center">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-14">
              <div className="section-badge mb-6">Growth Trajectory</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Revenue <span className="text-gradient-primary">Projections</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">Conservative estimates based on 2% market penetration by Year 3.</p>
            </div>
          </FadeSlideIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { year: "Year 1", amount: 180, suffix: "K", label: "Foundation" },
              { year: "Year 2", amount: 900, suffix: "K", label: "Growth" },
              { year: "Year 3", amount: 2.7, suffix: "M", label: "Scale", decimals: 1 },
              { year: "Year 5", amount: 9, suffix: "M", label: "Dominance" },
            ].map((proj) => (
              <StaggerItem key={proj.year}>
                <GlassCard variant="glow" className="text-center py-8 relative overflow-hidden">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{proj.year}</div>
                  <div className="stat-number text-4xl md:text-5xl text-gradient-primary mb-2">
                    <AnimatedCounter end={proj.amount} prefix="$" suffix={proj.suffix} decimals={proj.decimals || 0} />
                  </div>
                  <div className="text-xs text-primary/60 font-semibold uppercase tracking-wider">{proj.label}</div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeSlideIn delay={0.4}>
            <div className="flex items-center justify-center gap-2 mt-8 text-primary">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-semibold">50x revenue growth in 5 years</span>
            </div>
          </FadeSlideIn>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 8 — EXTRA REVENUE ═══════════════════════ */}
      <PitchSection id="extra" orbColor="hsla(32,100%,55%,0.12)" orbPosition="bottom-left">
        <div className="max-w-4xl mx-auto text-center">
          <FadeSlideIn>
            <div className="section-badge mb-6">Bonus Revenue</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-14" style={{ fontFamily: "var(--font-display)" }}>
              The <span className="text-gradient-accent">Hidden</span> Gold Mine
            </h2>
          </FadeSlideIn>

          <FadeSlideIn delay={0.2}>
            <GlassCard variant="accent" className="py-12">
              <div className="stat-number text-7xl md:text-9xl text-gradient-accent mb-4">
                <AnimatedCounter end={1} suffix="%" />
              </div>
              <p className="text-xl text-foreground/80 mb-2 font-medium">Transaction fee on every rent payment processed</p>
              <div className="w-20 h-px bg-foreground/10 mx-auto my-6" />
              <div className="stat-number text-4xl md:text-5xl text-gradient-primary mb-2">
                <AnimatedCounter end={1.3} prefix="$" suffix="M" decimals={1} />
              </div>
              <p className="text-sm text-muted-foreground">annual revenue potential from fees alone</p>
              <div className="mt-6 flex items-center justify-center gap-2 text-accent">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-semibold">Pure margin. Zero extra cost.</span>
              </div>
            </GlassCard>
          </FadeSlideIn>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 9 — VALUATION ═══════════════════════ */}
      <PitchSection id="valuation" backgroundImage="https://kimi-web-img.moonshot.cn/img/img.freepik.com/2fcc6a90d004a3d6a9a4e0d9c653a624e12d48f6.jpg" orbColor="hsla(155,100%,45%,0.15)" orbPosition="center">
        <div className="max-w-4xl mx-auto text-center">
          <FadeSlideIn>
            <div className="section-badge mb-6">Company Valuation</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12" style={{ fontFamily: "var(--font-display)" }}>
              Built to Be <span className="text-gradient-primary">Valuable</span>
            </h2>
          </FadeSlideIn>

          <FadeSlideIn delay={0.2}>
            <div className="glass-card-glow rounded-3xl py-16 px-10 gradient-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Seed Round Valuation</p>
              <div className="stat-number text-7xl md:text-9xl text-gradient-primary mb-4">
                <AnimatedCounter end={10} prefix="$" suffix="M" />
              </div>
              <p className="text-sm text-muted-foreground">Based on 12x forward ARR multiple</p>
            </div>
          </FadeSlideIn>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 10 — FUNDING ═══════════════════════ */}
      <PitchSection id="funding" orbColor="hsla(200,100%,50%,0.1)">
        <div className="max-w-4xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-14">
              <div className="section-badge mb-6">The Ask</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Where Your <span className="text-gradient-primary">Capital</span> Goes
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">Every dollar allocated for maximum impact and growth.</p>
            </div>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeSlideIn direction="left">
              <GlassCard variant="glow" className="overflow-hidden">
                {[
                  { name: "Product Development", pct: 40, icon: <Zap className="w-4 h-4" /> },
                  { name: "Sales & Marketing", pct: 30, icon: <Target className="w-4 h-4" /> },
                  { name: "Operations", pct: 15, icon: <Shield className="w-4 h-4" /> },
                  { name: "Legal & Compliance", pct: 10, icon: <Building2 className="w-4 h-4" /> },
                  { name: "Reserve", pct: 5, icon: <DollarSign className="w-4 h-4" /> },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4 py-4 px-2 border-b border-foreground/5 last:border-0">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-sm font-medium flex-1">{item.name}</span>
                    <div className="w-24 h-2 rounded-full bg-foreground/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <span className="text-sm font-bold text-primary w-10 text-right">
                      <AnimatedCounter end={item.pct} suffix="%" />
                    </span>
                  </div>
                ))}
              </GlassCard>
            </FadeSlideIn>

            <FadeSlideIn direction="right">
              <div className="text-center md:text-left space-y-6">
                <GlassCard variant="glow" className="inline-block">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Runway</div>
                  <div className="stat-number text-5xl md:text-6xl text-gradient-primary">
                    <AnimatedCounter end={24} suffix=" mo" />
                  </div>
                </GlassCard>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enough runway to reach profitability with a clear path to Series A at 10x growth.
                </p>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </PitchSection>

      {/* ═══════════════════════ SECTION 11 — VISION ═══════════════════════ */}
      <PitchSection id="vision" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/c37bea9c68f0a616cc0ff6ae3cee037dda4424c1.jpg" orbColor="hsla(155,100%,45%,0.2)" orbPosition="center">
        <div className="max-w-4xl mx-auto text-center">
          <FadeSlideIn>
            <div className="section-badge mb-10">
              <Globe className="w-4 h-4" />
              The Vision
            </div>
          </FadeSlideIn>

          <FadeSlideIn delay={0.2}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Building Africa's
              <br />
              <span className="text-gradient-primary">Housing Infrastructure</span>
              <br />
              Platform
            </h2>
          </FadeSlideIn>

          <FadeSlideIn delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
              Starting in Nairobi. Scaling to every city on the continent.
            </p>
          </FadeSlideIn>

          <FadeSlideIn delay={0.6}>
            <button className="btn-cta text-lg" onClick={() => window.location.href = 'mailto:hello@rentflow.co.ke'}>
              Join Us <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </FadeSlideIn>
        </div>
      </PitchSection>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border/30 py-10 text-center print:hidden">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span className="font-bold text-foreground">RentFlow</span>
          <span>hello@rentflow.co.ke</span>
          <span>+254 700 000 000</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
