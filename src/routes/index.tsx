import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creator Box — Forja tu Dominio" },
      {
        name: "description",
        content:
          "Forja tu identidad, define tu visión, compila tu Blueprint con Charlie y recluta a tu Dream Team en el ecosistema Better.",
      },
      { property: "og:title", content: "Creator Box — Forja tu Dominio" },
      {
        property: "og:description",
        content:
          "Forja tu identidad, define tu visión, compila tu Blueprint con Charlie y recluta a tu Dream Team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FORM_ENDPOINT = "https://formsubmit.co/ajax/diego@better-technologies.com";

const CTA =
  "bg-tactical hover:bg-tactical-hover text-black font-sans font-extrabold tracking-wide px-6 py-3 rounded-md shadow-[0_0_20px_rgba(255,94,0,0.4)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
const GHOST =
  "border border-neutral-500 text-white font-sans px-6 py-3 rounded-md hover:bg-white/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed";
const INPUT =
  "w-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-mono px-4 py-3 rounded-md placeholder:text-neutral-400 focus:outline-none focus:border-tactical";
const GLASS = "bg-white/5 backdrop-blur-md border border-white/10";

function Sticker({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
      <img src={src} alt={alt} className={className} onClick={onClick} />
    </motion.div>
  );
}

const SQUADS = [
  {
    id: "tech",
    img: "/Steve Jobs.png",
    title: "STEVE JOBS",
    sub: "Tech",
    quadrant: "TECNOLÓGICO",
  },
  {
    id: "beland",
    img: "/Hedy Lamarr.png",
    title: "HEDY LAMARR",
    sub: "Beland",
    quadrant: "ESTRATÉGICO (BELAND)",
  },
  {
    id: "community",
    img: "/Jimi Hendrix.png",
    title: "JIMI HENDRIX",
    sub: "Community",
    quadrant: "CULTURAL (COMMUNITY)",
  },
  {
    id: "general",
    img: "/Greta Thumberg.png",
    title: "GRETA THUNBERG",
    sub: "General",
    quadrant: "TÁCTICO (GENERAL)",
  },
];
type DiscoveryLink = { label: string; url: string; desc: string };
const DISCOVERY_LINKS: DiscoveryLink[] = [
  {
    label: "BLUEPRINT",
    url: "https://blueprint.better-technologies.com/",
    desc: "Correr tu Better Business Blueprint",
  },
  {
    label: "CHARLIE",
    url: "https://os-terminal.better-technologies.com/",
    desc: "Terminal conversacional",
  },
];

const BLUEPRINT_STEPS = [
  {
    step: 1,
    title: "Paso 1: El Problema Raíz",
    explanation:
      "CHARLIE: Primero lo primero. No te quedes en la superficie. Sigue preguntando '¿Por qué?' hasta llegar al dolor real de tu cliente.",
    prompt: "¿Qué problema exacto estás intentando resolver?",
  },
  {
    step: 2,
    title: "Paso 2: La Observación Oculta",
    explanation:
      "CHARLIE: La mayoría de empresas hacen lo mismo. Dime qué secreto u oportunidad estás viendo tú que los demás competidores están ignorando.",
    prompt:
      "¿Qué ves en tu industria que todos los demás están ignorando o haciendo mal?",
  },
  {
    step: 3,
    title: "Paso 3: El Enemigo",
    explanation:
      "CHARLIE: Todo gran proyecto combate una injusticia (el status quo, la burocracia, la vieja forma de hacer las cosas, o la fricción).",
    prompt: "¿Contra qué estamos peleando? Define a tu enemigo.",
  },
  {
    step: 4,
    title: "Paso 4: El Destino a 90 Días",
    explanation:
      "CHARLIE: Definamos la victoria. Proyéctate a 90 días para medir el impacto real.",
    prompt:
      "¿Cuál es la victoria absoluta? ¿Cómo le cambia la vida a tu cliente -y a ti- cuando resolvamos esto?",
  },
];

type Box = {
  promise: string;
  icp: string;
  feature1: string;
  feature2: string;
  feature3: string;
  wowFactor: string;
  door: string;
  dashboard: string;
  aisles: string;
  register: string;
};
type Jtbd = {
  trigger: string;
  mission: string;
  superpower: string;
  friction: string;
};

const BOX_SECTIONS: { title: string; fields: [keyof Box, string][] }[] = [
  {
    title: "1. EXTERIOR DE LA CAJA",
    fields: [
      ["promise", "Promesa Principal"],
      ["icp", "Cliente Ideal"],
    ],
  },
  {
    title: "2. EL INTERIOR",
    fields: [
      ["feature1", "Ingrediente 1"],
      ["feature2", "Ingrediente 2"],
      ["feature3", "Ingrediente 3"],
      ["wowFactor", 'El "Wow Factor"'],
    ],
  },
  {
    title: "3. EL SUPERMERCADO",
    fields: [
      ["door", "La Puerta de Entrada"],
      ["dashboard", "El Mostrador"],
      ["aisles", "Los Pasillos"],
      ["register", "La Caja Registradora"],
    ],
  },
];

const JTBD_FIELDS: [keyof Jtbd, string, string][] = [
  ["trigger", "EL GATILLO Y EL DOLOR", "¿Cuándo pasa y qué apuro tiene?"],
  ["mission", "LA MISIÓN EXACTA", "¿Qué es lo único que quiere hacer aquí?"],
  ["superpower", "EL SUPERPODER", "¿Qué alivio siente después?"],
  ["friction", "LA FRICCIÓN", "¿Qué le daría desconfianza o pereza?"],
];

const LANGS = ["ES", "EN", "QU", "PT", "DE", "IT", "ZH", "JA"] as const;
type Lang = (typeof LANGS)[number];
type TKey =
  | "newMission"
  | "vault"
  | "intel"
  | "newPlayer"
  | "haveConsole"
  | "enter"
  | "createEmpire";
const T: Record<Lang, Record<TKey, string>> = {
  ES: {
    newMission: "NUEVA MISIÓN",
    vault: "EL VAULT",
    intel: "INTELIGENCIA",
    newPlayer: "SOY NUEVO JUGADOR",
    haveConsole: "YA TENGO MI CONSOLA",
    enter: "ENTRAR A LA CONSOLA",
    createEmpire: "CREAR IMPERIO",
  },
  EN: {
    newMission: "NEW MISSION",
    vault: "THE VAULT",
    intel: "INTELLIGENCE",
    newPlayer: "I'M A NEW PLAYER",
    haveConsole: "I HAVE MY CONSOLE",
    enter: "ENTER CONSOLE",
    createEmpire: "CREATE EMPIRE",
  },
  QU: {
    newMission: "MUSHUK RURANA",
    vault: "WAKAICHINA",
    intel: "YACHAY",
    newPlayer: "MUSHUK PUKLLAKMI KANI",
    haveConsole: "CONSOLAYUKMI KANI",
    enter: "CONSOLAMAN YAYKUY",
    createEmpire: "LLAKTATA RURAY",
  },
  PT: {
    newMission: "NOVA MISSÃO",
    vault: "O COFRE",
    intel: "INTELIGÊNCIA",
    newPlayer: "SOU NOVO JOGADOR",
    haveConsole: "JÁ TENHO MEU CONSOLE",
    enter: "ENTRAR NO CONSOLE",
    createEmpire: "CRIAR IMPÉRIO",
  },
  DE: {
    newMission: "NEUE MISSION",
    vault: "DER TRESOR",
    intel: "AUFKLÄRUNG",
    newPlayer: "ICH BIN NEU",
    haveConsole: "ICH HABE MEINE KONSOLE",
    enter: "KONSOLE BETRETEN",
    createEmpire: "IMPERIUM ERSCHAFFEN",
  },
  IT: {
    newMission: "NUOVA MISSIONE",
    vault: "IL CAVEAU",
    intel: "INTELLIGENCE",
    newPlayer: "SONO UN NUOVO GIOCATORE",
    haveConsole: "HO GIÀ LA MIA CONSOLE",
    enter: "ENTRA NELLA CONSOLE",
    createEmpire: "CREA IMPERO",
  },
  ZH: {
    newMission: "新任务",
    vault: "保险库",
    intel: "情报",
    newPlayer: "我是新玩家",
    haveConsole: "我已有控制台",
    enter: "进入控制台",
    createEmpire: "创建帝国",
  },
  JA: {
    newMission: "新ミッション",
    vault: "ボールト",
    intel: "インテリジェンス",
    newPlayer: "新規プレイヤー",
    haveConsole: "コンソールを持っている",
    enter: "コンソールに入る",
    createEmpire: "帝国を築く",
  },
};

type Cassette = {
  title: string;
  desc: string;
  imagePreview: string | null;
  status: "proyecto" | "mision";
};

function Index() {
  const [currentView, setCurrentView] = useState(0);
  const [currentLang, setCurrentLang] = useState<Lang>("ES");
  const t = T[currentLang];
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [userType, setUserType] = useState<"new" | "existing" | null>(null);
  const [newStep, setNewStep] = useState(1);
  const [playerData, setPlayerData] = useState({
    name: "",
    org: "",
    subdomain: "",
    alias: "",
    keyword: "",
    anecdote: "",
  });
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [selectedSquad, setSelectedSquad] = useState<string | null>(null);
  const [showPay, setShowPay] = useState(false);
  const [hasPaidVisionUnit, setHasPaidVisionUnit] = useState(false);
  const [blueprintStep, setBlueprintStep] = useState(1);
  const [blueprintDraft, setBlueprintDraft] = useState("");
  const [blueprintAnswers, setBlueprintAnswers] = useState<string[]>([]);
  const [canvasStep, setCanvasStep] = useState(1);
  const [canvasDraft, setCanvasDraft] = useState("");
  const [cerealBox, setCerealBox] = useState<Box>({
    promise: "",
    icp: "",
    feature1: "",
    feature2: "",
    feature3: "",
    wowFactor: "",
    door: "",
    dashboard: "",
    aisles: "",
    register: "",
  });
  const [jtbd, setJtbd] = useState<Jtbd>({
    trigger: "",
    mission: "",
    superpower: "",
    friction: "",
  });
  const [vaultCassettes, setVaultCassettes] = useState<Cassette[]>([]);
  const [manual, setManual] = useState<Cassette>({
    title: "",
    desc: "",
    imagePreview: "/casette.jpeg",
    status: "proyecto",
  });
  // TODO(persistencia): cuando definamos Supabase, traer esto de la DB
  const [teamAttachments] = useState([
    { name: "Guía de Onboarding.pdf", type: "PDF", date: "24 SEP 2026" },
    { name: "Checklist del Equipo.docx", type: "DOCX", date: "22 SEP 2026" },
  ]);

  useEffect(() => {
    if (currentView !== 0) return;
    const tm = setTimeout(() => setCurrentView(1), 2500);
    return () => clearTimeout(tm);
  }, [currentView]);

  const simulate = (text: string, next: () => void) => {
    setIsLoading(true);
    setLoadingText(text);
    setTimeout(() => {
      setIsLoading(false);
      next();
    }, 1500);
  };

  const entrar = () =>
    simulate("ACCEDIENDO A " + playerData.alias + ".b-t.quest", () =>
      setCurrentView(8),
    );
  const crearImperio = () =>
    simulate("RESERVANDO " + playerData.subdomain + ".b-t.quest", () =>
      setNewStep(2),
    );
  const forjarIdentidad = () =>
    simulate(
      "Subdominio " +
        (playerData.subdomain || playerData.alias) +
        ".b-t.quest CREADO",
      () => setCurrentView(8),
    );

  const pagar = () => {
    window.open("https://be-p.store", "_blank");
    setShowPay(false);
    setHasPaidVisionUnit(true);
    // TODO(persistencia): cuando definamos Supabase, insertar la Misión en la DB acá.
    setVaultCassettes((current) => [
      ...current,
      {
        title: projectName,
        desc: projectDesc,
        imagePreview: "/casette.jpeg",
        status: "mision",
      },
    ]);
    setProjectName("");
    setProjectDesc("");
    setCurrentView(3);
  };

  const guardarEnVault = () => {
    // TODO(persistencia): cuando definamos Supabase, insertar el Proyecto (sin Vision Unit) en la DB acá.
    setVaultCassettes((current) => [
      ...current,
      {
        title: projectName,
        desc: projectDesc,
        imagePreview: "/casette.jpeg",
        status: "proyecto",
      },
    ]);
    setProjectName("");
    setProjectDesc("");
    setCurrentView(6);
  };

  const handleGo = async () => {
    setIsLoading(true);
    setLoadingText("DESPACHANDO MASTER DOC...");
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
             body: JSON.stringify({
        _subject: `Nuevo Master Doc: ${projectName || "Sin nombre"}`,
        playerData,
        projectName,
        cerealBox,
        jtbd,
        selectedSquad,
      }),
      });
    } catch (e) {
      console.error(e);
    }
    setVaultCassettes((current) => [
      ...current,
      {
        title: projectName,
        desc: "Misión Completada",
        imagePreview: "/casette.jpeg",
        status: "mision",
      },
    ]);
    setIsLoading(false);
    setCurrentView(5);
  };

  const addManual = () => {
    if (!manual.title.trim()) return;
    setVaultCassettes((current) => [...current, manual]);
    setManual({
      title: "",
      desc: "",
      imagePreview: "/casette.jpeg",
      status: "proyecto",
    });
  };

  if (currentView === 0) {
    return (
      <div className="min-h-screen bg-deep flex items-center justify-center p-6">
        <img
          src="/Creator Box by Better Technologies.png"
          alt="Creator Box by Better Technologies"
          className="w-96 mx-auto animate-pulse"
        />
      </div>
    );
  }

  const navBtn =
    "border border-white/15 font-mono text-xs px-3 py-1.5 rounded-md hover:border-tactical hover:text-tactical transition-colors";

  return (
    <div className="min-h-screen bg-deep text-white font-sans">
      <header className="flex flex-wrap gap-3 justify-between items-center w-full p-4 border-b border-white/10 bg-deep sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img
            src="/Creator Box.png"
            alt="Creator Box"
            className="h-14 object-contain cursor-pointer"
            onClick={() => setCurrentView(2)}
          />
          <span className="font-mono text-xs sm:text-sm">
            PLAYER: {playerData.name || playerData.alias || "GUEST"}
          </span>
        </div>
        <nav className="flex flex-wrap gap-2">
          <button className={navBtn} onClick={() => setCurrentView(8)}>
            [ {t.newMission} ]
          </button>
          <button className={navBtn} onClick={() => setCurrentView(6)}>
            [ {t.vault} ]
          </button>
          <button className={navBtn} onClick={() => setCurrentView(7)}>
            [ {t.intel} ]
          </button>
        </nav>
        <div className="flex items-center gap-3">
          <select
            value={currentLang}
            onChange={(e) => setCurrentLang(e.target.value as Lang)}
            className="bg-deep border border-white/15 font-mono text-xs rounded-md px-2 py-1"
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <span className="font-mono text-xs sm:text-sm text-neutral-400">
            PU: 0
          </span>
        </div>
      </header>

      <main
        className={`mx-auto px-4 py-12 ${currentView === 3 ? "max-w-6xl" : "max-w-4xl"}`}
      >
        {currentView === 1 && userType === null && (
          <section className="space-y-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              ONBOARDING SOBERANO
            </h1>
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                className={`${CTA} py-8 text-lg`}
                onClick={() => setUserType("new")}
              >
                [ {t.newPlayer} ]
              </button>
              <button
                className={`${GHOST} py-8 text-lg`}
                onClick={() => setUserType("existing")}
              >
                [ {t.haveConsole} ]
              </button>
            </div>
          </section>
        )}

        {currentView === 1 && userType === "existing" && (
          <section className="space-y-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              ENTRA A TU DOMINIO
            </h1>
            <div className="space-y-4">
              <input
                className={INPUT}
                placeholder="Alias de Jugador"
                value={playerData.alias}
                onChange={(e) =>
                  setPlayerData({ ...playerData, alias: e.target.value })
                }
              />
              <input
                className={INPUT}
                type="password"
                placeholder="Palabra Clave"
                value={playerData.keyword}
                onChange={(e) =>
                  setPlayerData({ ...playerData, keyword: e.target.value })
                }
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className={CTA}
                onClick={entrar}
                disabled={
                  !playerData.alias.trim() || !playerData.keyword.trim()
                }
              >
                [ {t.enter} ]
              </button>
              <button className={GHOST} onClick={() => setUserType("new")}>
                [ {t.newPlayer} ]
              </button>
            </div>
          </section>
        )}

        {currentView === 1 && userType === "new" && newStep === 1 && (
          <section className="space-y-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              CREA TU IMPERIO
            </h1>
            <div className="space-y-4">
              <input
                className={INPUT}
                placeholder="Nombre"
                value={playerData.name}
                onChange={(e) =>
                  setPlayerData({ ...playerData, name: e.target.value })
                }
              />
              <input
                className={INPUT}
                placeholder="Organización"
                value={playerData.org}
                onChange={(e) =>
                  setPlayerData({ ...playerData, org: e.target.value })
                }
              />
              <input
                className={INPUT}
                placeholder="Subdominio deseado"
                value={playerData.subdomain}
                onChange={(e) =>
                  setPlayerData({ ...playerData, subdomain: e.target.value })
                }
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className={CTA}
                onClick={crearImperio}
                disabled={
                  !playerData.name.trim() || !playerData.subdomain.trim()
                }
              >
                [ {t.createEmpire} ]
              </button>
              <button className={GHOST} onClick={() => setUserType("existing")}>
                [ {t.haveConsole} ]
              </button>
            </div>
          </section>
        )}

        {currentView === 1 && userType === "new" && newStep === 2 && (
          <section className="space-y-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              FORJA TU DOMINIO
            </h1>
            <div className="space-y-4">
              <input
                className={INPUT}
                placeholder="Alias de Jugador"
                value={playerData.alias}
                onChange={(e) =>
                  setPlayerData({ ...playerData, alias: e.target.value })
                }
              />
              <input
                className={INPUT}
                placeholder="Palabra Clave"
                value={playerData.keyword}
                onChange={(e) =>
                  setPlayerData({ ...playerData, keyword: e.target.value })
                }
              />
              <input
                className={INPUT}
                placeholder="¿Por qué elegiste esta palabra? (Anécdota)"
                value={playerData.anecdote}
                onChange={(e) =>
                  setPlayerData({ ...playerData, anecdote: e.target.value })
                }
              />
            </div>
            <button
              className={CTA}
              onClick={forjarIdentidad}
              disabled={!playerData.alias.trim()}
            >
              [ FORJAR IDENTIDAD ]
            </button>
          </section>
        )}

        {currentView === 8 &&
          (() => {
            const currentStep = BLUEPRINT_STEPS[blueprintStep - 1];
            const answeredSteps = BLUEPRINT_STEPS.slice(0, blueprintStep - 1);
            const isComplete = !currentStep;

            const confirmAnswer = () => {
              const answer = blueprintDraft.trim();
              if (!answer || !currentStep || isComplete) return;

              setBlueprintAnswers((current) => [...current, answer]);
              setBlueprintDraft("");
              setBlueprintStep((step) => step + 1);
            };

            return (
              <section className="grid gap-6 lg:grid-cols-[3fr_7fr]">
                <aside className="border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)] bg-deep p-5 rounded-md font-mono space-y-4 lg:sticky lg:top-24 self-start">
                  <p className="text-xs text-neutral-400">CHARLIE OS</p>
                  <Sticker
                    src="/Maqueño.png"
                    alt="Maqueño"
                    className="h-10 w-10 object-contain"
                  />
                  <p className="text-cyan-400 text-sm leading-relaxed">
                    {isComplete
                      ? "CHARLIE: Blueprint completado. Tu descubrimiento está listo para la consola."
                      : currentStep?.explanation}
                  </p>
                </aside>

                <div
                  className={`${GLASS} rounded-xl p-6 space-y-6 lg:max-h-[75vh] lg:overflow-y-auto`}
                  aria-live="polite"
                >
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-cyan-400">
                      EL DESPERTAR · BETTER BUSINESS BLUEPRINT
                    </p>
                    <h1 className="text-2xl font-extrabold text-cyan-400">
                      DESCUBRÍ TU PROBLEMA RAÍZ
                    </h1>
                  </div>

                  <div className="space-y-6">
                    {answeredSteps.map((step, index) => (
                      <div
                        key={step.step}
                        className="space-y-3 border-b border-cyan-400/10 pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0">
                            <Sticker
                              src="/Maqueño.png"
                              alt="Maqueño"
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-cyan-400/40 bg-cyan-400/5 p-4 shadow-[0_0_16px_rgba(34,211,238,0.18)]">
                            <p className="font-mono text-[10px] text-cyan-400/70">
                              {step.title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-cyan-400">
                              {step.explanation}
                            </p>
                            <p className="mt-3 font-extrabold text-cyan-400">
                              {step.prompt}
                            </p>
                          </div>
                        </div>
                        <div className="ml-8 rounded-xl rounded-tr-sm border border-cyan-400/20 bg-cyan-400/10 p-4">
                          <p className="font-mono text-[10px] text-neutral-400">
                            TU RESPUESTA
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">
                            {blueprintAnswers[index]}
                          </p>
                        </div>
                      </div>
                    ))}

                    {!isComplete && currentStep && (
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0">
                            <Sticker
                              src="/Maqueño.png"
                              alt="Maqueño"
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-cyan-400/40 bg-cyan-400/5 p-4 shadow-[0_0_16px_rgba(34,211,238,0.18)]">
                            <p className="font-mono text-[10px] text-cyan-400/70">
                              {currentStep.title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-cyan-400">
                              {currentStep.explanation}
                            </p>
                            <p className="mt-3 font-extrabold text-cyan-400">
                              {currentStep.prompt}
                            </p>
                          </div>
                        </div>

                        <label className="block space-y-2">
                          <span className="sr-only">
                            Respuesta para {currentStep.title}
                          </span>
                          <textarea
                            key={currentStep.step}
                            rows={4}
                            className={`${INPUT} focus:!border-cyan-400`}
                            value={blueprintDraft}
                            placeholder="Escribí tu respuesta..."
                            autoFocus
                            onChange={(e) => setBlueprintDraft(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                confirmAnswer();
                              }
                            }}
                          />
                        </label>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-mono text-xs text-cyan-400/70">
                            {`PREGUNTA ${currentStep.step} / ${BLUEPRINT_STEPS.length}`}
                          </p>
                          <button
                            type="button"
                            className={`${GHOST} !border-cyan-400 !text-cyan-400 hover:!bg-cyan-400/10`}
                            onClick={confirmAnswer}
                            disabled={!blueprintDraft.trim()}
                          >
                            [ SIGUIENTE ]
                          </button>
                        </div>
                      </div>
                    )}

                    {isComplete && (
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0">
                            <Sticker
                              src="/Maqueño.png"
                              alt="Maqueño"
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-cyan-400/40 bg-cyan-400/5 p-4 shadow-[0_0_16px_rgba(34,211,238,0.18)]">
                            <p className="font-mono text-[10px] text-cyan-400/70">
                              BLUEPRINT COMPLETO
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-cyan-400">
                              Estructura descubierta. Tu visión está lista para
                              entrar en la consola.
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={`${GHOST} !border-cyan-400 !text-cyan-400 hover:!bg-cyan-400/10`}
                          onClick={() => setCurrentView(2)}
                        >
                          [ CONTINUAR A LA CONSOLA ]
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })()}

        {currentView === 2 && (
          <section className="space-y-8">
            <div className="relative mx-auto w-80">
  <Sticker
    src="/Consola Creator.png"
    alt="Consola Creator"
    className="w-80"
  />
  {/* Banana Maqueño DENTRO de la pantalla de la consola */}
  <div className="absolute top-[18%] left-[20%] w-[60%] h-[35%] flex items-center justify-center overflow-hidden">
    <img
      src="/Maqueño.png"
      alt="Powered by Maqueño OS"
      className="max-w-full max-h-full object-contain"
    />
  </div>
</div>


            <input
              className={INPUT}
              placeholder="Nombra tu Casete/Proyecto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <textarea
              rows={3}
              className={INPUT}
              placeholder="Descripción del Cassete (obligatoria)"
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
            />
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className={CTA}
                disabled={!projectName.trim() || !projectDesc.trim()}
                onClick={() => setShowPay(true)}
              >
                [ ⚡ COMPRAR VISION UNIT ($50) ]
              </button>
              <button
                className={GHOST}
                disabled={!projectName.trim() || !projectDesc.trim()}
                onClick={guardarEnVault}
              >
                [ GUARDAR EN EL VAULT ]
              </button>
            </div>
          </section>
        )}

        {currentView === 3 &&
          (() => {
            const questions = [
              ...BOX_SECTIONS.flatMap((section) =>
                section.fields.map(([key, label]) => ({
                  target: "box" as const,
                  key,
                  section: section.title,
                  label,
                  question: label,
                })),
              ),
              ...JTBD_FIELDS.map(([key, label, question]) => ({
                target: "jtbd" as const,
                key,
                section: "JOBS TO BE DONE",
                label,
                question,
              })),
            ];
            const currentQuestion = questions[canvasStep - 1];
            const answeredQuestions = questions.slice(0, canvasStep - 1);
            const isComplete = !currentQuestion;

            const getAnswer = (question: (typeof questions)[number]) =>
              question.target === "box"
                ? cerealBox[question.key]
                : jtbd[question.key];

            const confirmAnswer = () => {
              const answer = canvasDraft.trim();
              if (!answer || !currentQuestion || isComplete) return;

              if (currentQuestion.target === "box") {
                setCerealBox((current) => ({
                  ...current,
                  [currentQuestion.key]: answer,
                }));
              } else {
                setJtbd((current) => ({
                  ...current,
                  [currentQuestion.key]: answer,
                }));
              }

              setCanvasDraft("");
              setCanvasStep((step) => step + 1);
            };

            return (
              <section className="grid gap-6 lg:grid-cols-[3fr_7fr]">
                <aside
                  className={`border-2 ${
                    hasPaidVisionUnit
                      ? "border-tactical text-tactical shadow-[0_0_20px_rgba(255,94,0,0.35)]"
                      : "border-neon text-neon shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  } bg-deep p-5 rounded-md font-mono space-y-4 lg:sticky lg:top-24 self-start`}
                >
                  <p className="text-xs text-neutral-400">CHARLIE OS</p>
                  <Sticker
                    src="/Dreams Inc..png"
                    alt="Dreams Inc."
                    className="h-10"
                  />
                  <p
                    className={`text-sm leading-relaxed ${
                      hasPaidVisionUnit ? "text-tactical" : "text-neon"
                    }`}
                  >
                    {isComplete
                      ? "CHARLIE: Estructura descubierta. Tu diseño está completo."
                      : currentQuestion &&
                        `CHARLIE: ${
                          currentQuestion.target === "box"
                            ? `${currentQuestion.section}. `
                            : ""
                        }${currentQuestion.question}`}
                  </p>
                </aside>

                <div
                  className={`${GLASS} rounded-xl p-6 space-y-6 lg:max-h-[75vh] lg:overflow-y-auto`}
                  aria-live="polite"
                >
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-neutral-400">
                      EL LIENZO (CANVAS)
                    </p>
                    <h2 className="text-2xl font-extrabold">
                      {currentQuestion?.target === "box"
                        ? "DESIGN THE BOX"
                        : "JOBS TO BE DONE"}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {answeredQuestions.map((question) => {
                      const answer = getAnswer(question);

                      return (
                        <div
                          key={`${question.target}-${question.key}`}
                          className="space-y-3 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                        >
                          <div className="flex items-start gap-3">
                            <div className="shrink-0">
                              <Sticker
                                src="/Dreams Inc..png"
                                alt="Dreams Inc."
                                className="h-10 w-10 object-contain"
                              />
                            </div>
                            <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-neon/40 bg-deep/80 p-4 shadow-[0_0_16px_rgba(56,189,248,0.18)]">
                              <p className="font-mono text-[10px] text-neon/70">
                                {question.section}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-neon">
                                <span className="font-extrabold">
                                  {question.label}
                                </span>
                                {question.target === "jtbd" && (
                                  <span> — {question.question}</span>
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="ml-8 rounded-xl rounded-tr-sm border border-white/10 bg-white/10 p-4">
                            <p className="font-mono text-[10px] text-neutral-400">
                              TU RESPUESTA
                            </p>
                            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">
                              {answer}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    {!isComplete && currentQuestion && (
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0">
                            <Sticker
                              src="/Dreams Inc..png"
                              alt="Dreams Inc."
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-neon/40 bg-deep/80 p-4 shadow-[0_0_16px_rgba(56,189,248,0.18)]">
                            <p className="font-mono text-[10px] text-neon/70">
                              {currentQuestion.section}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-neon">
                              <span className="font-extrabold">
                                {currentQuestion.label}
                              </span>
                              {currentQuestion.target === "jtbd" && (
                                <span> — {currentQuestion.question}</span>
                              )}
                            </p>
                          </div>
                        </div>

                        <label className="block space-y-2">
                          <span className="sr-only">
                            Respuesta para {currentQuestion.label}
                          </span>
                          <textarea
                            key={`${currentQuestion.target}-${currentQuestion.key}`}
                            rows={4}
                            className={INPUT}
                            value={canvasDraft}
                            placeholder="Escribí tu respuesta..."
                            autoFocus
                            onChange={(e) => setCanvasDraft(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                confirmAnswer();
                              }
                            }}
                          />
                        </label>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-mono text-xs text-neutral-400">
                            PREGUNTA {canvasStep} / {questions.length}
                          </p>
                          <button
                            type="button"
                            className={CTA}
                            onClick={confirmAnswer}
                            disabled={!canvasDraft.trim()}
                          >
                            [ SIGUIENTE ]
                          </button>
                        </div>
                      </div>
                    )}

                    {isComplete && (
                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0">
                            <Sticker
                              src="/Dreams Inc..png"
                              alt="Dreams Inc."
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm border border-neon/40 bg-deep/80 p-4 shadow-[0_0_16px_rgba(56,189,248,0.18)]">
                            <p className="font-mono text-[10px] text-neon/70">
                              CHARLIE OS
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-neon">
                              Estructura descubierta. Tu diseño está listo para
                              ensamblar.
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={CTA}
                          onClick={() => setCurrentView(4)}
                        >
                          [ ENSAMBLAR CONTRATO JTBD ]
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })()}

        {currentView === 4 && (
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              ELIGE A TU LÍDER
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SQUADS.map((s) => (
                <div
                  key={s.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedSquad(s.id)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedSquad(s.id)}
                  className={`${GLASS} cursor-pointer rounded-xl p-4 flex flex-col items-center text-center transition-colors hover:border-tactical ${
                    selectedSquad === s.id
                      ? "!border-tactical shadow-[0_0_20px_rgba(255,94,0,0.4)]"
                      : ""
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                  <a
                    href="https://better-technologies.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs text-tactical underline mt-2"
                  >
                    VER PORTAFOLIO
                  </a>
                  <h3 className="mt-3 font-extrabold text-sm">{s.title}</h3>
                  <p className="text-xs text-neutral-400 font-mono">{s.sub}</p>
                </div>
              ))}
            </div>
            {selectedSquad &&
              (() => {
                const squad = SQUADS.find((x) => x.id === selectedSquad);
                return (
                  <div
                    className={`${GLASS} rounded-xl p-6 text-center space-y-5`}
                  >
                    <p className="font-mono text-xs text-neutral-400">
                      CUADRANTE DE APLICACIÓN
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      {squad && (
                        <img
                          src={squad.img}
                          alt={squad.title}
                          className="w-14 h-14 object-cover rounded-md"
                        />
                      )}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-tactical">
                        {squad ? squad.quadrant : "..."}
                      </h3>
                    </div>
                    {/* TODO(calendar): agendar con Calendly. Cada cuadrante tendrá su
                        propio embed de Calendly (iframe) conectado acá al definir las URLs. */}
                    <div className="border border-dashed border-neutral-500 rounded-md p-10 bg-deep">
                      <p className="font-mono text-sm text-neutral-300">
                        [ CALENDARIO {squad?.quadrant ?? ""} ]
                      </p>
                      <p className="font-mono text-xs text-neutral-500 mt-2">
                        TODO(calendar): embed de Calendly para este cuadrante.
                      </p>
                    </div>
                    <Sticker
                      src="/Go.png"
                      alt="Go"
                      className="cursor-pointer mx-auto w-32"
                      onClick={handleGo}
                    />
                  </div>
                );
              })()}
          </section>
        )}

        {currentView === 5 && (
          <section className="space-y-6 text-center">
            <Sticker
              src="/Be Just The Way You Dream only Better.png"
              alt="Be just the way you dream, only Better"
              className="w-80 mx-auto"
            />
            <h2 className="text-3xl font-extrabold text-victory">
              ¡CASETE FORJADO CON ÉXITO!
            </h2>
            <p>
              Espacio asegurado con el Dream Team. El Master Doc fue enviado al
              HQ.
            </p>
            <button className={CTA} onClick={() => setCurrentView(6)}>
              [ IR A MI VAULT ]
            </button>
          </section>
        )}

        {currentView === 6 && (
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              TU VAULT DE CASSETTES
            </h2>
            {vaultCassettes.length === 0 ? (
              <p className="text-neutral-400 font-mono">
                Aún no tienes cassettes. Crea un Proyecto o compra una Vision
                Unit para forjar una Misión.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {vaultCassettes.map((c, i) => (
                  <div key={i} className={`${GLASS} rounded-xl p-4 space-y-2`}>
                    {c.imagePreview && (
                      <img
                        src={c.imagePreview}
                        alt={c.title}
                        className="w-full aspect-video object-cover rounded-md"
                      />
                    )}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-extrabold">{c.title}</h3>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                          c.status === "mision"
                            ? "border-tactical text-tactical shadow-[0_0_8px_rgba(255,94,0,0.4)]"
                            : "border-neutral-500 text-neutral-400"
                        }`}
                      >
                        {c.status === "mision" ? "MISIÓN" : "PROYECTO"}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-300">{c.desc}</p>
                  </div>
                ))}
              </div>
            )}
            <div className={`${GLASS} rounded-xl p-6 space-y-4`}>
              <h3 className="font-mono text-tactical">
                [ + AGREGAR CASETE MANUAL ]
              </h3>
              <input
                type="file"
                accept="image/*"
                className="font-mono text-sm"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) {
                    setManual((current) => ({
                      ...current,
                      imagePreview: "/casette.jpeg",
                    }));
                    return;
                  }

                  const reader = new FileReader();
                  reader.onload = () => {
                    setManual((current) => ({
                      ...current,
                      imagePreview:
                        typeof reader.result === "string"
                          ? reader.result
                          : null,
                    }));
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <input
                className={INPUT}
                placeholder="Título del Cassete"
                value={manual.title}
                onChange={(e) =>
                  setManual({ ...manual, title: e.target.value })
                }
              />
              <textarea
                rows={3}
                className={INPUT}
                placeholder="Descripción"
                value={manual.desc}
                onChange={(e) => setManual({ ...manual, desc: e.target.value })}
              />
              <button
                className={CTA}
                onClick={addManual}
                disabled={!manual.title.trim()}
              >
                [ GUARDAR EN VAULT ]
              </button>
            </div>
          </section>
        )}

        {currentView === 7 && (
          <section className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              SALA DE INTELIGENCIA Y TELEMETRÍA
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className={`${GLASS} rounded-xl p-6`}>
                <p className="font-mono text-xs text-neutral-400">
                  MISIONES FORJADAS
                </p>
                <p className="text-4xl font-extrabold text-tactical mt-2">
                  {
                    vaultCassettes.filter(
                      (cassette) => cassette.status === "mision",
                    ).length
                  }
                </p>
              </div>
              <div className={`${GLASS} rounded-xl p-6`}>
                <p className="font-mono text-xs text-neutral-400">
                  POWER UNITS ACUMULADOS
                </p>
                <p className="text-3xl font-extrabold text-victory mt-2 font-mono">
                  0.0000 PU
                </p>
              </div>
              <div className={`${GLASS} rounded-xl p-6 space-y-3`}>
                <p className="font-mono text-xs text-neutral-400">
                  ÍNDICE DE FRICCIÓN
                </p>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-tactical" />
                </div>
                <p className="font-mono text-sm">80%</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* TODO(persistencia): cuando definamos Supabase, traer esto de la DB */}
              <h3 className="font-mono text-tactical">TUS MISIONES</h3>
              {vaultCassettes.filter((cassette) => cassette.status === "mision")
                .length === 0 ? (
                <p className="font-mono text-neutral-400">
                  Todavía no tienes misiones forjadas.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {vaultCassettes
                    .filter((cassette) => cassette.status === "mision")
                    .map((mission, i) => (
                      <div
                        key={`${mission.title}-${i}`}
                        className={`${GLASS} rounded-xl p-4 space-y-2`}
                      >
                        <h4 className="font-extrabold">{mission.title}</h4>
                        <p className="text-sm text-neutral-300">
                          {mission.desc}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-tactical">ADJUNTOS DEL EQUIPO</h3>
              <div className={`${GLASS} rounded-xl divide-y divide-white/10`}>
                {teamAttachments.map((attachment) => (
                  <div
                    key={attachment.name}
                    className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <FileText
                        aria-hidden="true"
                        className="h-8 w-8 shrink-0 text-tactical"
                      />
                      <div className="min-w-0">
                        <p className="break-words font-extrabold">
                          {attachment.name}
                        </p>
                        <p className="font-mono text-xs text-neutral-400">
                          {attachment.type} · {attachment.date}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={GHOST}
                      onClick={() => window.alert("Función en desarrollo")}
                    >
                      DESCARGAR
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* TODO(persistencia): cuando definamos Supabase, traer esto de la DB */}
              <h3 className="font-mono text-tactical">BANCO DE CONOCIMIENTO</h3>
              <div
                className={`${GLASS} rounded-xl flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between`}
              >
                <p className="font-extrabold">Presentación de Creator Box</p>
                <a
                  className={GHOST}
                  href="/creator_box.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  ABRIR PDF
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      {showPay && (
  <div
    className="fixed inset-0 bg-deep/90 z-50 flex items-center justify-center p-6"
    onClick={() => setShowPay(false)}
  >
    <div
      className="relative mx-auto w-[28rem]"
      onClick={(e) => e.stopPropagation()}
    >
      <Sticker
        src="/Consola Creator.png"
        alt="Consola Creator"
        className="w-[28rem]"
      />
      {/* Vision Unit, $50 y el botón de pago DENTRO de la pantalla de la consola */}
<div className="absolute top-[13%] left-[15%] w-[70%] h-[45%] flex flex-col items-center justify-center gap-2 overflow-hidden">        <div className="flex items-center justify-center gap-2">
          <img
            src="/Vision Unit.png"
            alt="Vision Unit"
            className="w-16 object-contain"
          />
          <img
            src="/$50.png"
            alt="$50"
            className="w-18 object-contain"
          />
        </div>
        <button
          className={`${CTA} text-[10px] px-3 py-1.5`}
          onClick={pagar}
        >
          [ PAGAR $50 ]
        </button>
      </div>
    </div>
  </div>
)}

      {isLoading && (
        <div className="fixed inset-0 bg-deep/95 z-50 flex flex-col items-center justify-center">
          <div className="h-12 w-12 rounded-full border-4 border-victory border-t-transparent animate-spin" />
          <p className="font-mono text-victory mt-4 px-6 text-center">
            &gt;{loadingText}_
          </p>
        </div>
      )}
    </div>
  );
}
