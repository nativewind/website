import { compatibilityRows, type CompatibilityOptions } from '@/lib/doc-tables';

export function CompatibilityTable(props: CompatibilityOptions) {
  const rows = compatibilityRows(props);
  const comments = rows.some((row) => row.comment);
  return (
    <table>
      <tbody>
        <tr>
          <th>Class</th>
          <th>Support</th>
          {comments && <th>Comments</th>}
        </tr>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <pre>
                <code>{row.value}</code>
              </pre>
            </td>
            <td>{row.label}</td>
            {comments && <td>{row.comment}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
