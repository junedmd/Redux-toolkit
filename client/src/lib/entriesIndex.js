import { parseDateDMY } from "./dateUtil.js"

/**
 * Build indices:
 * - byDate: { 'YYYY-MM-DD': [entry, ...] }
 * - byMonth: { 'YYYY-MM': [entry, ...] }
 * - flat: chronological sorted array
 *
 * This file also normalizes incoming date strings "DD/MM/YYYY" to "YYYY-MM-DD".
 */

function normalizeEntry(e, idx) {
  const parsed = parseDateDMY(e.date);
  const isoDate = parsed ? `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2,"0")}-${String(parsed.getDate()).padStart(2,"0")}` : null;
  return { ...e, id: `${isoDate || "unknown"}-${idx}`, _iso: isoDate };
}

export default function buildIndexFromEntries(entries = []) {
  const byDate = {};
  const byMonth = {};
  const flat = [];

  entries.forEach((raw, i) => {
    const e = normalizeEntry(raw, i);
    if (!e._iso) return;
    flat.push(e);
    const dateKey = e._iso; // YYYY-MM-DD
    const monthKey = dateKey.slice(0, 7); // YYYY-MM
    if (!byDate[dateKey]) byDate[dateKey] = [];
    byDate[dateKey].push(e);
    if (!byMonth[monthKey]) byMonth[monthKey] = [];
    byMonth[monthKey].push(e);
  });

  // sort flat chronologically
  flat.sort((a, b) => (a._iso < b._iso ? -1 : a._iso > b._iso ? 1 : 0));
  return { byDate, byMonth, flat };
}

export { formatDateISO as formatDateISO };

function formatDateISO(date) {
  return date.toISOString().slice(0, 10);
}
