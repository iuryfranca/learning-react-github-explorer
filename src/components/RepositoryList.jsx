import { RepositoryItem } from "./RepositoryItem"

// const repositoryName = 'uniform'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github/unform/unform'
}

export function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          repository={repository}
        />
      </ul>
    </section>
  )
}
