import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, eachDayOfInterval, parse, isValid } from "date-fns";

/**
 * Utilities: getWeeksForMonth returns an array of weeks (each 7 Dates)
 */

export function parseDateDMY(str) {
  // input "DD/MM/YYYY"
  const [d, m, y] = str.split("/");
  const parsed = new Date(Number(y), Number(m) - 1, Number(d));
  return isValid(parsed) ? parsed : null;
}

export function getWeeksForMonth(date, weekStartsOn = 0) {
  const s = startOfWeek(startOfMonth(date), { weekStartsOn });
  const e = endOfWeek(endOfMonth(date), { weekStartsOn });
  const days = eachDayOfInterval({ start: s, end: e });
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  // flatten to single array expected by MonthBlock mapping
  return weeks;
}

export function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
