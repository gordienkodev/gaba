import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import type { User } from '../../types/user'
import { UserCard } from './UserCard'
import styles from './UsersDashboard.module.css'

export function UsersDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const data = await getUsers()
        setUsers(data.users)
      } catch {
        setError('Failed to load users')
      } finally {
        setIsLoading(false)
      }
    }

    void loadUsers()
  }, [])

  if (isLoading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Users Dashboard</h1>

      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}
