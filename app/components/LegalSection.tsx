export function Section({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-bold text-charcoal mt-8 mb-3">{title}</h2>
  );
}

export function SubSection({ title }: { title: string }) {
  return (
    <h3 className="font-semibold text-charcoal mt-6 mb-2">{title}</h3>
  );
}
