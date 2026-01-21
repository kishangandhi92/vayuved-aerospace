export function SpecsCard({ title, hint, children }) {
  return (
    <div
      className={`
        rounded-2xl border border-border bg-gray-100
        p-8 lg:p-10
      `}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-secondary font-medium text-primary">
          {title}
        </h2>
        <p className="mt-1 text-sm text-muted">{hint}</p>
      </div>
      {children}
    </div>
  );
}

export function SpecsTable({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-y-3">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function Row({ label, children }) {
  return (
    <tr className="align-top">
      <th className="w-1/3 pr-6 text-left font-semibold text-base">{label}</th>
      <td className="leading-relaxed space-y-2 text-md">
        {children}
      </td>
    </tr>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-block mr-2 mb-2 rounded-full border border-border bg-gray-600 px-3 py-1 text-xs text-white">
      {children}
    </span>
  );
}
