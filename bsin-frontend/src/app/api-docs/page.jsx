import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ApiDocsPage() {
  return (
    <Card>
      <CardHeader><CardTitle>Backend API Docs</CardTitle></CardHeader>
      <CardContent className="prose prose-invert max-w-none">
        <h3>Routes</h3>
        <ul>
          <li><code>GET /health</code> → <code>{`{"status":"ok"}`}</code></li>
          <li><code>GET /states</code> → <code>{`{"states":["Maharashtra",...]}`}</code></li>
          <li><code>POST /predict/whatif</code>
            <pre>{`{
  "state": "Maharashtra",
  "funding_mult": 1.2,
  "centers_add": 2,
  "coaches_mult": 1.1
}`}</pre>
            Response:
            <pre>{`{
  "predicted_medals": 12.4
}`}</pre>
          </li>
          <li><code>GET /talent/top</code> (future)
            <pre>{`{
  "items": [
    {"district": "Pune", "state": "Maharashtra", "talentScore": 92},
    ...
  ]
}`}</pre>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

