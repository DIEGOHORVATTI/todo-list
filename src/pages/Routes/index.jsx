import React from 'react'
import Link from 'next/link'

class Router extends React.Component {
  render() {
    const rows = []
    for (let i = 0; i < 10; i++) {
      rows.push(i + 1)
    }

    return (
      <div>
        <ul>
          {rows.map((rows) => (
            <li key={rows.id}>
              <Link href={{ pathname: `/Aula_${rows}` }}>Aula {rows}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Router
