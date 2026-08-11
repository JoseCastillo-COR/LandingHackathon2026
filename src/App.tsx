import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
  Zap,
  Atom,
  BookOpen,
} from "lucide-react";
import { translations, type Lang } from "./i18n";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdvRM-U50JLekn8px7ntk5R--6BkD4wDZlotra_kncpEjZGoQ/viewform?usp=dialog";

type Deadline = {
  date: string;
  labelKey: keyof typeof translations.es;
  descriptionKey: keyof typeof translations.es;
};

const deadlines: Deadline[] = [
  {
    date: "2026-08-15T23:59:59",
    labelKey: "deadlineConvocatoria",
    descriptionKey: "deadlineConvocatoriaDesc",
  },
  {
    date: "2026-08-16T23:59:59",
    labelKey: "deadlineEnvio",
    descriptionKey: "deadlineEnvioDesc",
  },
  {
    date: "2026-08-21T23:59:59",
    labelKey: "deadlineEntrega",
    descriptionKey: "deadlineEntregaDesc",
  },
  {
    date: "2026-08-25T18:00:00",
    labelKey: "deadlineFinal",
    descriptionKey: "deadlineFinalDesc",
  },
];

const timelineFinalKeys = [
  {
    date: "25 AGO",
    titleKey: "tl6Title" as const,
    textKey: "tl6Text" as const,
    icon: BookOpen,
  },
  {
    date: "26 AGO",
    titleKey: "tl7Title" as const,
    textKey: "tl7Text" as const,
    icon: Trophy,
  },
];

const timelineKeys = [
  {
    date: "11 — 15 AGO",
    titleKey: "tl1Title" as const,
    textKey: "tl1Text" as const,
    icon: Users,
  },
  {
    date: "16 AGO",
    titleKey: "tl2Title" as const,
    textKey: "tl2Text" as const,
    icon: Database,
  },
  {
    date: "21 AGO",
    titleKey: "tl3Title" as const,
    textKey: "tl3Text" as const,
    icon: Code2,
  },
  {
    date: "22 AGO",
    titleKey: "tl4Title" as const,
    textKey: "tl4Text" as const,
    icon: ShieldCheck,
  },
  {
    date: "23 AGO",
    titleKey: "tl5Title" as const,
    textKey: "tl5Text" as const,
    icon: Sparkles,
  },
];

const evaluationKeys = [
  {
    percentage: "25%",
    titleKey: "eval1Title" as const,
    textKey: "eval1Text" as const,
  },
  {
    percentage: "25%",
    titleKey: "eval2Title" as const,
    textKey: "eval2Text" as const,
  },
  {
    percentage: "20%",
    titleKey: "eval3Title" as const,
    textKey: "eval3Text" as const,
  },
  {
    percentage: "15%",
    titleKey: "eval4Title" as const,
    textKey: "eval4Text" as const,
  },
  {
    percentage: "5%",
    titleKey: "eval5Title" as const,
    textKey: "eval5Text" as const,
  },
  {
    percentage: "10%",
    titleKey: "eval6Title" as const,
    textKey: "eval6Text" as const,
  },
];

const disciplinesKeys = [
  {
    icon: BarChart3,
    titleKey: "discStats" as const,
    descriptionKey: "discStatsDesc" as const,
  },
  {
    icon: LineChart,
    titleKey: "discMath" as const,
    descriptionKey: "discMathDesc" as const,
  },
  {
    icon: BrainCircuit,
    titleKey: "discML" as const,
    descriptionKey: "discMLDesc" as const,
  },
  {
    icon: Atom,
    titleKey: "discPhysics" as const,
    descriptionKey: "discPhysicsDesc" as const,
  },
  {
    icon: GraduationCap,
    titleKey: "discEcon" as const,
    descriptionKey: "discEconDesc" as const,
  },
];

function Countdown({ t }: { t: (typeof translations)[keyof typeof translations] }) {
  const [target, setTarget] = useState(deadlines[0]);

  const calculateTime = () => {
    const difference = new Date(target.date).getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      const nextDeadline =
        deadlines.find((deadline) => new Date(deadline.date).getTime() > now) ??
        deadlines[deadlines.length - 1];

      setTarget(nextDeadline);

      const difference = new Date(nextDeadline.date).getTime() - now;

      if (difference <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [target.date]);

  return (
    <div className="mx-auto mt-14 w-full max-w-4xl">
      <div className="mb-5 text-center text-sm font-medium tracking-wide text-white/80">
        {t.nextDeadline}{" "}
        <span className="font-semibold text-white">
          {t[target.labelKey].toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-5">
        {[
          [t.days, time.days],
          [t.hours, time.hours],
          [t.min, time.minutes],
          [t.sec, time.seconds],
        ].map(([label, value]) => (
          <div
            key={label as string}
            className="rounded-2xl border border-white/20 bg-white/10 px-2 py-5 text-center backdrop-blur-md sm:py-6"
          >
            <div className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
              {label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-white/60">
        {t[target.descriptionKey]}
      </p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("es");

  const t = translations[lang];

  const navItems = [
    [t.navChallenge, "#desafio"],
    [t.navFormat, "#timeline"],
    [t.navEvaluation, "#evaluacion"],
    [t.navPrizes, "#premios"],
  ];

  const LanguageToggle = () => (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-white" : "text-white/50"}>EN</span>
      <span className="text-white/40">/</span>
      <span className={lang === "es" ? "text-white" : "text-white/50"}>ES</span>
    </button>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0f1c] text-slate-200">
      {/* Top thin banner */}
      <div className="fixed inset-x-0 z-50 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-2 text-center text-[11px] font-medium tracking-wide text-white sm:text-xs">
        CorTech Labs · Quant Hackathon 2026
      </div>

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-[29px] z-50 border-b border-white/10 bg-[#0a0f1c]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
              <BarChart3 size={18} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">
                CORTECH
              </div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                Quant Hackathon
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:opacity-90"
            >
              {t.register}
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white/80"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0a0f1c] p-5 md:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-4 text-sm text-white/80"
              >
                {label}
              </a>
            ))}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3 font-semibold text-white"
            >
              {t.register}
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              {t.heroBadge}
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
              {t.heroTitle1}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="mt-5 text-xl font-medium text-white/70 sm:text-2xl">
              {t.heroSubtitle}
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              {t.heroDescription}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3.5 font-semibold text-white shadow-xl shadow-purple-500/25 transition hover:opacity-95"
              >
                {t.registerHere}
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#desafio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-medium text-white transition hover:bg-white/10"
              >
                {t.knowChallenge}
                <ChevronRight size={17} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
                <CalendarDays size={13} className="text-cyan-400" />
                {t.callPeriod}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60">
                <Trophy size={13} className="text-purple-400" />
                {t.finalDate}
              </div>
            </div>
          </div>

          {/* Countdown on gradient band */}
          <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
            <div className="relative px-5 py-10 sm:px-10 sm:py-12">
              <Countdown t={t} />
            </div>
          </div>
        </section>

        {/* DESAFÍO */}
        <section id="desafio" className="border-t border-white/5 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={t.challengeEyebrow}
              title={t.challengeTitle}
              description={t.challengeDesc}
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <ChallengeCard
                number="01"
                title={t.challenge01Title}
                text={t.challenge01Text}
              />
              <ChallengeCard
                number="02"
                title={t.challenge02Title}
                text={t.challenge02Text}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <BarChart3 className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{t.spyTitle}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">
                    {t.spyText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCIA */}
        <section className="border-y border-white/5 bg-white/[0.02] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={t.audienceEyebrow}
              title={t.audienceTitle}
              description={t.audienceDesc}
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {disciplinesKeys.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.titleKey}
                    className="group rounded-2xl border border-white/10 bg-[#0d1526] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <Icon
                      size={24}
                      className="text-cyan-400 transition group-hover:scale-110"
                    />
                    <h3 className="mt-5 font-bold text-white">
                      {t[item.titleKey]}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {t[item.descriptionKey]}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-5 text-sm text-white/60">
              <ShieldCheck className="mt-0.5 shrink-0 text-amber-400" size={18} />
              <p>{t.audienceWarning}</p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="px-5 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow={t.timelineEyebrow}
              title={t.timelineTitle}
              description={t.timelineDesc}
            />

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent sm:block" />

              <div className="space-y-5">
                {timelineKeys.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.titleKey}
                      className="relative grid gap-5 sm:grid-cols-[150px_1fr]"
                    >
                      <div className="hidden pt-5 text-right text-xs font-bold tracking-widest text-cyan-400 sm:block">
                        {item.date}
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/25">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                            <Icon size={17} className="text-cyan-400" />
                          </div>
                          <div>
                            <div className="mb-1 text-xs font-bold tracking-widest text-cyan-400 sm:hidden">
                              {item.date}
                            </div>
                            <h3 className="font-bold text-white">
                              {t[item.titleKey]}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-white/50">
                              {t[item.textKey]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {timelineFinalKeys.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.titleKey}
                      className="relative grid gap-5 sm:grid-cols-[150px_1fr]"
                    >
                      <div className="hidden pt-5 text-right text-xs font-bold tracking-widest text-green-400 sm:block">
                        {item.date}
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-green-400/25">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/5">
                            <Icon size={17} className="text-green-400" />
                          </div>
                          <div>
                            <div className="mb-1 text-xs font-bold tracking-widest text-cyan-400 sm:hidden">
                              {item.date}
                            </div>
                            <h3 className="font-bold text-white">
                              {t[item.titleKey]}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-white/50">
                              {t[item.textKey]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Code2 size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{t.deliverablesTitle}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      t.deliverables1,
                      t.deliverables2,
                      t.deliverables3,
                      t.deliverables4,
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/60"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-medium text-cyan-300/90">
                    {t.replicabilityNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="border-y border-white/5 bg-white/[0.02] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={t.finalEyebrow}
              title={t.finalTitle}
              description={t.finalDesc}
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Feature
                icon={Server}
                title={t.featureInfraTitle}
                text={t.featureInfraText}
              />
              <Feature
                icon={Zap}
                title={t.featureStressTitle}
                text={t.featureStressText}
              />
              <Feature
                icon={GraduationCap}
                title={t.featureDefenseTitle}
                text={t.featureDefenseText}
              />
              <Feature
                icon={Users}
                title={t.featureEnvTitle}
                text={t.featureEnvText}
              />
            </div>
          </div>
        </section>

        {/* EVALUACIÓN */}
        <section id="evaluacion" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={t.evalEyebrow}
              title={t.evalTitle}
              description={t.evalDesc}
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {evaluationKeys.map((item) => (
                <div
                  key={item.titleKey}
                  className="rounded-2xl border border-white/10 bg-[#0d1526] p-6"
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-4xl font-black tracking-tight text-transparent">
                    {item.percentage}
                  </div>
                  <h3 className="mt-5 font-bold text-white">
                    {t[item.titleKey]}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {t[item.textKey]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI */}
        <section className="border-y border-white/5 bg-gradient-to-br from-cyan-500/[0.06] to-purple-500/[0.06] px-5 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[auto_1fr]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <BrainCircuit size={30} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                  {t.aiEyebrow}
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {t.aiTitle}
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-white/55">
                  {t.aiDesc}
                </p>
                <div className="mt-8 space-y-4">
                  {[t.ai1, t.ai2, t.ai3].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/60">
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPOS */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <SectionHeader
                  eyebrow={t.teamEyebrow}
                  title={t.teamTitle}
                  description={t.teamDesc}
                />
                <div className="mt-8 space-y-3">
                  {[t.team1, t.team2, t.team3, t.team4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <Check size={17} className="text-cyan-400" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs font-bold tracking-[0.25em] text-purple-400">
                  {t.techEyebrow}
                </div>
                <h2 className="text-3xl font-black tracking-tight text-white">
                  {t.techTitle}
                </h2>
                <p className="mt-4 leading-7 text-white/50">{t.techDesc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Python", "R", "Julia", "C++", "Rust", "Colab"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIOS */}
        <section
          id="premios"
          className="border-y border-white/5 bg-white/[0.02] px-5 py-24"
        >
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-purple-500/15">
              <Trophy className="text-cyan-400" />
            </div>
            <div className="mt-6 text-xs font-bold tracking-[0.3em] text-cyan-400">
              {t.prizesEyebrow}
            </div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {t.prizesTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              {t.prizesDesc}
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Prize place={t.place2} amount="$600" placeLabel={t.placeLabel} />
              <Prize
                place={t.place1}
                amount="$800"
                featured
                placeLabel={t.placeLabel}
                firstPrize={t.firstPrize}
              />
              <Prize place={t.place3} amount="$400" placeLabel={t.placeLabel} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden px-5 py-28">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/15 to-purple-600/20" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="text-sm font-bold tracking-[0.3em] text-cyan-400">
              {t.ctaEyebrow}
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
              {t.ctaTitle1}
              <br />
              <span className="text-white/50">{t.ctaTitle2}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/55">
              {t.ctaDesc}
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 font-semibold text-white shadow-xl shadow-purple-500/20 transition hover:opacity-95"
            >
              {t.ctaButton}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060a14] px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                  <BarChart3 size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">
                    CorTech Quant Hackathon 2026
                  </div>
                  <div className="text-xs text-white/40">{t.footerTagline}</div>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
                {t.footerDesc}
              </p>
            </div>

            <div className="md:text-right">
              <div className="text-xs font-bold tracking-widest text-white/40">
                {t.contact}
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/50">
                <div className="flex items-center gap-2 md:justify-end">
                  <Mail size={14} />
                  dcisneros@cortechnologies.ai
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <MapPin size={14} />
                  {t.location}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6 text-xs text-white/30">
            {t.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-bold tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 leading-7 text-white/50">{description}</p>
    </div>
  );
}

function ChallengeCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1526] p-7 transition hover:border-cyan-400/30">
      <div className="absolute right-0 top-0 text-[100px] font-black leading-none text-white/[0.03]">
        {number}
      </div>
      <div className="relative">
        <div className="text-sm font-bold text-cyan-400">{number}</div>
        <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/50">{text}</p>
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Server;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d1526] p-6">
      <Icon size={24} className="text-purple-400" />
      <h3 className="mt-5 font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
    </div>
  );
}

function Prize({
  place,
  amount,
  featured = false,
  placeLabel,
  firstPrize,
}: {
  place: string;
  amount: string;
  featured?: boolean;
  placeLabel: string;
  firstPrize?: string;
}) {
  return (
    <div
      className={`rounded-2xl border p-7 ${
        featured
          ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 shadow-xl shadow-purple-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div
        className={`text-sm font-bold tracking-widest ${
          featured ? "text-cyan-400" : "text-white/50"
        }`}
      >
        {place} {placeLabel}
      </div>
      <div className="mt-4 text-4xl font-black text-white">{amount}</div>
      {featured && firstPrize && (
        <div className="mt-3 text-xs text-cyan-400">{firstPrize}</div>
      )}
    </div>
  );
}

export default App;