import type { IconType } from 'react-icons';

type MetricCardProps = { label: string; value: string; detail: string; icon: IconType };

export default function MetricCard({ label, value, detail, icon: Icon }: MetricCardProps) {
  return <div className="border border-[#dce5ef] bg-white p-5"><div className="flex items-start justify-between gap-3"><p className="text-sm text-[#6b7d90]">{label}</p><Icon className="h-4 w-4 text-[#0b78b7]" /></div><p className="mt-4 text-2xl font-black" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>{value}</p><p className="mt-2 text-xs text-[#8a9aaa]">{detail}</p></div>;
}