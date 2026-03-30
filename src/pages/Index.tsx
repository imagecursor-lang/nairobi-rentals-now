import PitchSection from "@/components/PitchSection";
import SectionNav from "@/components/SectionNav";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";

const StatBox = ({ value, label }: { value: string; label: string }) => (
  <GlassCard className="text-center flex-1 min-w-[200px]">
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </GlassCard>
);

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <SectionNav />

      {/* SECTION 1 — HERO */}
      <PitchSection id="hero" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/0761815da1c3116fc16abf95ed6ddb5e9e156865.jpg">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-8"
          >
            Series A Investment Opportunity
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Rental Management Platform<br />
            <span className="text-primary">for Nairobi</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            The Digital Infrastructure for Africa's $1.1B Rental Market
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "88.8% tenants",
              "~1.4M rental households",
              "$1.1B annual market",
              "95% managed manually",
            ].map((item) => (
              <GlassCard key={item} className="px-5 py-3">
                <span className="text-sm font-medium">{item}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </PitchSection>

      {/* SECTION 2 — PROBLEM */}
      <PitchSection id="problem" backgroundImage="https://kimi-web-img.moonshot.cn/img/realtors.co.ke/c552009cf821e3930920326149587629e1b6b738.webp">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📊", text: "Spreadsheets & notebooks" },
              { icon: "📋", text: "Caretakers with paper records" },
              { icon: "💬", text: "WhatsApp chaos" },
            ].map((item) => (
              <GlassCard key={item.text} className="text-center py-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-medium">{item.text}</p>
              </GlassCard>
            ))}
          </div>
          <GlassCard className="border-accent/30 bg-accent/5">
            <p className="text-lg font-semibold text-accent">
              Result: Late rent, disputes, poor maintenance, zero visibility.
            </p>
          </GlassCard>
        </div>
      </PitchSection>

      {/* SECTION 3 — MARKET REALITY */}
      <PitchSection id="market" backgroundImage="https://kimi-web-img.moonshot.cn/img/sirfrancismarketingltd.co.ke/aedae54a3d9cdba2e0840fb1ebe60241c68f7374.jpeg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Market Reality</h2>
          <GlassCard className="overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold">Type</th>
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold text-right">Avg. Rent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bedsitter", "KSh 7,500"],
                  ["1 Bedroom", "KSh 8,500"],
                  ["2 Bedroom", "KSh 15,000"],
                  ["4 Bedroom", "KSh 30,000"],
                ].map(([type, rent]) => (
                  <tr key={type} className="border-b border-foreground/5">
                    <td className="py-4 px-4 font-medium">{type}</td>
                    <td className="py-4 px-4 text-right font-semibold text-primary">{rent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
          <div className="mt-8 text-2xl md:text-3xl font-bold">
            Total Monthly Rent Economy: <span className="text-primary">KSh 12B</span>
          </div>
        </div>
      </PitchSection>

      {/* SECTION 4 — MARKET GAP */}
      <PitchSection id="gap" backgroundImage="https://kimi-web-img.moonshot.cn/img/c8.alamy.com/781bdf6eb28274dc122302057e9986e6d7c099ae.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Market Gap</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <StatBox value="77.1%" label="Apartments" />
            <StatBox value="15%" label="Short-term Rentals" />
            <StatBox value="10%" label="Annual Rent Growth" />
          </div>
        </div>
      </PitchSection>

      {/* SECTION 5 — SOLUTION */}
      <PitchSection id="solution" backgroundImage="https://kimi-web-img.moonshot.cn/img/cloudrentalmanager.com/2f62ed7c37c5e6a84bb6e7055c3acb241cb52224.png">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Solution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-xl font-bold text-primary mb-4">For Landlords</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ Automated rent collection & tracking</li>
                <li>✓ Digital tenant management</li>
                <li>✓ Maintenance request system</li>
                <li>✓ Financial reports & analytics</li>
                <li>✓ M-Pesa payment integration</li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-bold text-primary mb-4">For Tenants</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ Easy mobile rent payments</li>
                <li>✓ Digital receipts & history</li>
                <li>✓ Maintenance requests in-app</li>
                <li>✓ Lease & document access</li>
                <li>✓ Payment reminders</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </PitchSection>

      {/* SECTION 6 — REVENUE MODEL */}
      <PitchSection id="revenue" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.safaricom.co.ke/32245cca249e3895b3e29e2a7002c3f1d742ee4c.png">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Revenue Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Small", units: "1–10 units", price: "$5/mo", color: "text-foreground" },
              { tier: "Medium", units: "11–50 units", price: "$25/mo", color: "text-primary" },
              { tier: "Large", units: "50+ units", price: "$75/mo", color: "text-accent" },
            ].map((plan) => (
              <GlassCard key={plan.tier} className={`text-center ${plan.tier === "Medium" ? "border-primary/30 scale-105" : ""}`}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{plan.tier} Landlord</div>
                <div className={`text-3xl font-bold ${plan.color} mb-1`}>{plan.price}</div>
                <div className="text-sm text-muted-foreground">{plan.units}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </PitchSection>

      {/* SECTION 7 — PROJECTIONS */}
      <PitchSection id="projections" darkOverlay>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Revenue Projections</h2>
          <GlassCard className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold text-left">Year</th>
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold text-right">ARR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Year 1", "$180,000"],
                  ["Year 2", "$900,000"],
                  ["Year 3", "$2.7M"],
                  ["Year 5", "$9M"],
                ].map(([year, arr]) => (
                  <tr key={year} className="border-b border-foreground/5">
                    <td className="py-4 px-4 font-medium">{year}</td>
                    <td className="py-4 px-4 text-right text-xl font-bold text-primary">{arr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>
      </PitchSection>

      {/* SECTION 8 — EXTRA REVENUE */}
      <PitchSection id="extra" darkOverlay>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Additional Revenue Stream</h2>
          <GlassCard className="border-accent/20">
            <div className="text-6xl md:text-7xl font-bold text-accent mb-4">1%</div>
            <p className="text-xl text-foreground/80 mb-2">Transaction fee on every rent payment</p>
            <div className="text-3xl font-bold text-primary mt-6">$1.3M/year</div>
            <p className="text-sm text-muted-foreground">potential from transaction fees alone</p>
          </GlassCard>
        </div>
      </PitchSection>

      {/* SECTION 9 — VALUATION */}
      <PitchSection id="valuation" backgroundImage="https://kimi-web-img.moonshot.cn/img/img.freepik.com/2fcc6a90d004a3d6a9a4e0d9c653a624e12d48f6.jpg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Valuation</h2>
          <div className="inline-block rounded-2xl p-10 border border-primary/30" style={{ background: "var(--gradient-card)" }}>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Seed Valuation</p>
            <div className="text-6xl md:text-8xl font-bold text-primary">$10M</div>
          </div>
        </div>
      </PitchSection>

      {/* SECTION 10 — FUNDING ASK */}
      <PitchSection id="funding" darkOverlay>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Funding Ask</h2>
          <GlassCard className="overflow-hidden mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold">Allocation</th>
                  <th className="py-3 px-4 text-sm text-muted-foreground font-semibold text-right">%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Product Development", "40%"],
                  ["Sales & Marketing", "30%"],
                  ["Operations", "15%"],
                  ["Legal & Compliance", "10%"],
                  ["Reserve", "5%"],
                ].map(([item, pct]) => (
                  <tr key={item} className="border-b border-foreground/5">
                    <td className="py-3 px-4 font-medium">{item}</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
          <GlassCard className="border-primary/30">
            <p className="text-lg font-semibold">Runway: <span className="text-primary">24 months</span></p>
          </GlassCard>
        </div>
      </PitchSection>

      {/* SECTION 11 — VISION */}
      <PitchSection id="vision" backgroundImage="https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/c37bea9c68f0a616cc0ff6ae3cee037dda4424c1.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Building Africa's Housing<br />
            <span className="text-primary">Infrastructure Platform</span>
          </h2>
          <p className="text-lg text-foreground/60 mb-12">From Nairobi to every city on the continent.</p>
          <div
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg"
            style={{ background: "var(--gradient-primary)", color: "white" }}
          >
            Let's Talk →
          </div>
        </div>
      </PitchSection>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border/30 py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-6">
          <span>RentFlow</span>
          <span>hello@rentflow.co.ke</span>
          <span>+254 700 000 000</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
