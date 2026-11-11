"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { IMG } from "@/component/generic-lp/images";
import { Roboto, Sora } from "next/font/google";

const head = Sora({ subsets: ["latin"], weight: ["600", "700"] });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

/* leads saved by the popup on /generic use this form name */
const FORM_NAME = "generic landing page";

interface Lead {
  id: string;
  name: string;
  phone: string;
  city: string | null;
  email: string | null;
  source: string | null;
  formName: string | null;
  status: "new" | "contacted" | "scheduled" | "converted" | "lost";
  consent: boolean;
  telecrmSynced: boolean;
  telecrmId?: string | null;
  createdAt: string;
  updatedAt: string;
}

type SyncFilter = "all" | "synced" | "pending";
type DateFilter = "all" | "today" | "week" | "month";

const STATUS_STYLE: Record<Lead["status"], string> = {
  new: "bg-[#e8f1fb] text-[#1d5fa8]",
  contacted: "bg-[#fdf3d8] text-[#8a6310]",
  scheduled: "bg-[#efe6f8] text-[#6a3fa0]",
  converted: "bg-[#e3f1e8] text-[#2f6a45]",
  lost: "bg-[#fbe6ea] text-[#a8344f]",
};

const Ico = {
  refresh: <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5" />,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  search: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4" />,
  phone: (
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z" />
  ),
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  users: <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-12 9c0-3 3.6-5 8-5s8 2 8 5v1H4v-1Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  back: <path d="M19 12H5m6-6-6 6 6 6" />,
  inbox: <path d="M4 13h4l1.5 3h5L16 13h4M4 13l2-8h12l2 8M4 13v6h16v-6" />,
};

function Svg({ d, className = "h-4 w-4", fill = false }: { d: React.ReactNode; className?: string; fill?: boolean }) {
  return fill ? (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {d}
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d}
    </svg>
  );
}

/* div role=button (not <button>) so the site's global button:hover rule doesn't repaint it */
function Btn({
  children,
  onClick,
  disabled,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  tone?: "light" | "green";
  className?: string;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-disabled={disabled}
      onClick={() => !disabled && onClick()}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !disabled && onClick()}
      className={`inline-flex h-11 cursor-pointer select-none items-center justify-center gap-2 rounded-full px-5 text-[14px] font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-[#3f7455]/50 ${
        tone === "green"
          ? "bg-[#3f7455] text-white hover:brightness-110"
          : "border border-[#3f7455]/25 bg-white text-[#3f7455] hover:bg-[#eef3ef]"
      } ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function isWithin(date: string, range: DateFilter) {
  if (range === "all") return true;
  const d = new Date(date);
  const now = new Date();
  if (range === "today") return d.toDateString() === now.toDateString();
  const from = new Date(now);
  if (range === "week") from.setDate(from.getDate() - 7);
  else from.setMonth(from.getMonth() - 1);
  return d >= from;
}

function SyncBadge({ synced }: { synced: boolean }) {
  return synced ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e8] px-3 py-1 text-[12px] font-bold text-[#2f6a45]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3f7455]" />
      Synced
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdf3d8] px-3 py-1 text-[12px] font-bold text-[#8a6310]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d79a1f]" />
      Pending
    </span>
  );
}

export default function GenericLeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sync, setSync] = useState<SyncFilter>("all");
  const [range, setRange] = useState<DateFilter>("all");
  const [open, setOpen] = useState<string | null>(null);
  const [auto, setAuto] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [updatedAt, setUpdatedAt] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leads?formName=${encodeURIComponent(FORM_NAME)}&limit=500`, { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to load leads");
      setLeads(data.leads || []);
      setError("");
      setUpdatedAt(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load leads");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    load();
  }, [load]);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(load, 30000);
    return () => clearInterval(t);
  }, [auto, load]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return leads.filter((l) => {
      const hit = !q || [l.name, l.phone, l.city, l.email].some((v) => (v || "").toLowerCase().includes(q));
      const s = sync === "all" || (sync === "synced" ? l.telecrmSynced : !l.telecrmSynced);
      return hit && s && isWithin(l.createdAt, range);
    });
  }, [leads, search, sync, range]);

  const stats = useMemo(() => {
    const synced = leads.filter((l) => l.telecrmSynced).length;
    return {
      total: leads.length,
      today: leads.filter((l) => isWithin(l.createdAt, "today")).length,
      synced,
      pending: leads.length - synced,
    };
  }, [leads]);

  const fmt = (iso: string) => {
    if (!mounted) return { d: "", t: "" };
    const dt = new Date(iso);
    return {
      d: dt.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      t: dt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const exportCsv = () => {
    const rows = [
      ["Name", "Phone", "City", "Status", "TeleCRM Synced", "TeleCRM ID", "Source", "Submitted At"],
      ...filtered.map((l) => [
        l.name,
        l.phone,
        l.city || "",
        l.status,
        l.telecrmSynced ? "Yes" : "No",
        l.telecrmId || "",
        l.source || "",
        new Date(l.createdAt).toLocaleString("en-IN"),
      ]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `generic-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const chip = (active: boolean) =>
    `cursor-pointer select-none rounded-full px-4 py-2 text-[13px] font-bold outline-none transition ${
      active ? "bg-[#3f7455] text-white" : "bg-white text-[#4a5550] ring-1 ring-[#3f7455]/15 hover:bg-[#eef3ef]"
    }`;

  const pct = stats.total ? Math.round((stats.synced / stats.total) * 100) : 0;
  const STAT_CARDS = [
    { label: "Total Leads", value: stats.total, caption: "All submissions", icon: Ico.users, iconBg: "bg-[#3f7455]/10 text-[#3f7455]" },
    { label: "Today", value: stats.today, caption: "Received today", icon: Ico.sun, iconBg: "bg-[#c86b9b]/12 text-[#b5538a]" },
    { label: "TeleCRM Synced", value: stats.synced, caption: `${pct}% of all leads`, icon: Ico.check, iconBg: "bg-[#3f7455]/10 text-[#2f6a45]" },
    { label: "Sync Pending", value: stats.pending, caption: "Not confirmed yet", icon: Ico.clock, iconBg: "bg-[#d79a1f]/15 text-[#8a6310]" },
  ];

  return (
    <div className={`${body.className} min-h-screen bg-[#f4f7fb] bg-[radial-gradient(circle_at_92%_0%,rgba(200,107,155,0.10),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(94,154,113,0.12),transparent_40%)]`}>
      {/* top bar with logos */}
      <header className="sticky top-0 z-30 border-b border-[#3f7455]/15 bg-white/90 backdrop-blur-xl">
        <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c86b9b] to-transparent opacity-70" />
        <div className="mx-auto flex min-h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-8">
          <div className="flex min-w-0 items-center">
            <div className="relative h-12 w-[72px] shrink-0 sm:h-14 sm:w-24">
              <Image src={IMG.logo} alt="Sudha Skin Hair Aesthetics" fill sizes="96px" className="object-contain object-left mix-blend-multiply" priority />
            </div>
            <div className="relative h-11 w-[96px] shrink-0 sm:h-12 sm:w-36">
              <Image src={IMG.logo2} alt="A unit of Sai Sudha Hospital" fill sizes="144px" className="object-contain object-left" priority />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={auto}
              onClick={() => setAuto((a) => !a)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setAuto((a) => !a)}
              className="flex h-11 cursor-pointer select-none items-center gap-2.5 rounded-full px-3 text-[13px] font-medium text-[#4a5550] outline-none transition hover:bg-[#eef3ef] sm:px-4"
            >
              <span className={`relative h-5 w-9 shrink-0 rounded-full transition ${auto ? "bg-[#3f7455]" : "bg-[#b9c2bd]"}`}>
                <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${auto ? "left-[18px]" : "left-0.5"}`} />
              </span>
              <span className="hidden sm:inline">Auto refresh</span>
            </div>
            <a
              href="/generic"
              className="hidden h-11 items-center gap-2 rounded-full px-4 text-[13px] font-bold text-[#4a5550] transition hover:bg-[#eef3ef] md:inline-flex"
            >
              <Svg d={Ico.back} className="h-4 w-4" />
              View page
            </a>
            <Btn onClick={load} disabled={loading} className="!px-4 sm:!px-5">
              <Svg d={Ico.refresh} className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">{loading ? "Refreshing..." : "Refresh"}</span>
            </Btn>
            <Btn onClick={exportCsv} tone="green" className="!px-4 sm:!px-5">
              <Svg d={Ico.download} />
              <span className="hidden sm:inline">Export CSV</span>
            </Btn>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-8 sm:py-10">
        {/* stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STAT_CARDS.map((c) => (
            <div key={c.label} className="relative overflow-hidden rounded-[22px] border border-[#3f7455]/12 bg-white p-5 transition hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#7a847f]">{c.label}</div>
                <span className={`grid h-10 w-10 place-items-center rounded-full ${c.iconBg}`}>
                  <Svg d={c.icon} className="h-5 w-5" />
                </span>
              </div>
              <div className={`${head.className} mt-3 text-[38px] font-bold leading-none text-[#1f2a24]`}>{c.value}</div>
              <div className="mt-2 text-[12.5px] font-medium text-[#7a847f]">{c.caption}</div>
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#3f7455] to-[#c86b9b] opacity-70" />
            </div>
          ))}
        </div>

        {/* filters */}
        <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-[#3f7455]/12 bg-white p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-[360px]">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3f7455]">
              <Svg d={Ico.search} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone or city"
              className="h-11 w-full rounded-full border border-[#3f7455]/20 bg-[#f4f7fb] pl-11 pr-4 text-[14px] font-medium text-[#1f2a24] outline-none placeholder:font-normal placeholder:text-[#9aa5a0] focus:border-[#3f7455] focus:bg-white focus:ring-2 focus:ring-[#3f7455]/20"
            />
          </label>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7a847f]">Sync</span>
              {(["all", "synced", "pending"] as SyncFilter[]).map((v) => (
                <div key={v} role="button" tabIndex={0} onClick={() => setSync(v)} onKeyDown={(e) => e.key === "Enter" && setSync(v)} className={chip(sync === v)}>
                  {v === "all" ? "All" : v === "synced" ? "Synced" : "Pending"}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7a847f]">Date</span>
              {(["all", "today", "week", "month"] as DateFilter[]).map((v) => (
                <div key={v} role="button" tabIndex={0} onClick={() => setRange(v)} onKeyDown={(e) => e.key === "Enter" && setRange(v)} className={chip(range === v)}>
                  {v === "all" ? "All time" : v === "today" ? "Today" : v === "week" ? "7 days" : "30 days"}
                </div>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl border border-[#c86b9b]/30 bg-[#fbe9f1] px-5 py-3 text-[14px] font-medium text-[#b72c78]">
            {error}
          </div>
        )}

        {/* desktop table */}
        <div className="mt-6 hidden overflow-hidden rounded-[22px] border border-[#3f7455]/12 bg-white md:block">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="bg-[#eef4ef] text-[11px] font-bold uppercase tracking-[0.12em] text-[#4a5550]">
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">City</th>
                <th className="px-5 py-4">Submitted</th>
                <th className="px-5 py-4">TeleCRM</th>
                <th className="px-5 py-4">Status</th>
                <th className="w-12 px-5 py-4" />
              </tr>
            </thead>
            <tbody>
              {loading && leads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-14 text-center text-[#7a847f]">Loading leads...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#3f7455]/10 text-[#3f7455]">
                      <Svg d={Ico.inbox} className="h-7 w-7" />
                    </div>
                    <div className="mt-3 font-bold text-[#1f2a24]">No leads found</div>
                    <div className="mt-1 text-[13px] text-[#7a847f]">Try a different search or filter.</div>
                  </td>
                </tr>
              ) : (
                filtered.map((l) => {
                  const f = fmt(l.createdAt);
                  const isOpen = open === l.id;
                  return (
                    <Fragment key={l.id}>
                      <tr
                        onClick={() => setOpen(isOpen ? null : l.id)}
                        className="cursor-pointer border-t border-[#3f7455]/10 transition hover:bg-[#f7faf8]"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-[13px] font-bold text-white">
                              {(l.name || "?").trim().charAt(0).toUpperCase()}
                            </span>
                            <span className="font-bold text-[#1f2a24]">{l.name || "Unknown"}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href={`tel:${l.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 font-medium text-[#2f6a45] hover:underline"
                          >
                            <Svg d={Ico.phone} fill className="h-3.5 w-3.5" />
                            {l.phone}
                          </a>
                        </td>
                        <td className="px-5 py-4 text-[#4a5550]">
                          {l.city ? (
                            <span className="inline-flex items-center gap-1.5">
                              <Svg d={Ico.pin} fill className="h-3.5 w-3.5 text-[#c86b9b]" />
                              {l.city}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="px-5 py-4 text-[#4a5550]">
                          <div className="font-medium">{f.d}</div>
                          <div className="text-[12px] text-[#7a847f]">{f.t}</div>
                        </td>
                        <td className="px-5 py-4">
                          <SyncBadge synced={l.telecrmSynced} />
                        </td>
                        <td className="px-5 py-4">
                          <span className={`rounded-full px-3 py-1 text-[12px] font-bold capitalize ${STATUS_STYLE[l.status] || STATUS_STYLE.new}`}>
                            {l.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[#7a847f]">
                          <Svg d={Ico.chevron} className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-[#f7faf8]">
                          <td colSpan={7} className="px-5 pb-5 pt-1">
                            <Details lead={l} />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* mobile cards */}
        <div className="mt-6 space-y-3 md:hidden">
          {loading && leads.length === 0 ? (
            <div className="rounded-[22px] bg-white p-8 text-center text-[#7a847f]">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="rounded-[22px] bg-white p-8 text-center text-[#7a847f]">No leads found</div>
          ) : (
            filtered.map((l) => {
              const f = fmt(l.createdAt);
              const isOpen = open === l.id;
              return (
                <div key={l.id} className="rounded-[22px] border border-[#3f7455]/12 bg-white p-4">
                  <div onClick={() => setOpen(isOpen ? null : l.id)} className="cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-[14px] font-bold text-white">
                          {(l.name || "?").trim().charAt(0).toUpperCase()}
                        </span>
                        <div>
                          <div className="font-bold text-[#1f2a24]">{l.name || "Unknown"}</div>
                          <div className="text-[12px] text-[#7a847f]">
                            {f.d} &middot; {f.t}
                          </div>
                        </div>
                      </div>
                      <SyncBadge synced={l.telecrmSynced} />
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                      <a href={`tel:${l.phone}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 font-medium text-[#2f6a45]">
                        <Svg d={Ico.phone} fill className="h-3.5 w-3.5" />
                        {l.phone}
                      </a>
                      {l.city && (
                        <span className="inline-flex items-center gap-1.5 text-[#4a5550]">
                          <Svg d={Ico.pin} fill className="h-3.5 w-3.5 text-[#c86b9b]" />
                          {l.city}
                        </span>
                      )}
                      <span className={`rounded-full px-3 py-1 text-[12px] font-bold capitalize ${STATUS_STYLE[l.status] || STATUS_STYLE.new}`}>{l.status}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div className="mt-3">
                      <Details lead={l} />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="mt-5 text-[13px] text-[#5b6660]">
          Showing <b>{filtered.length}</b> of <b>{leads.length}</b> leads
        </div>
      </div>
    </div>
  );
}

function Details({ lead }: { lead: Lead }) {
  const rows: [string, string][] = [
    ["Source", lead.source || "-"],
    ["Form", lead.formName || "-"],
    ["Consent", lead.consent ? "Yes" : "No"],
    ["TeleCRM", lead.telecrmSynced ? "Synced" : "Pending"],
    ["TeleCRM ID", lead.telecrmId || "-"],
  ];
  return (
    <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 ring-1 ring-[#3f7455]/10 sm:grid-cols-3 lg:grid-cols-5">
      {rows.map(([k, v]) => (
        <div key={k}>
          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7a847f]">{k}</div>
          <div className="mt-0.5 break-all text-[14px] font-medium text-[#1f2a24]">{v}</div>
        </div>
      ))}
    </div>
  );
}
