import type { UserCardProps } from '../../types/user'
import styles from './UserCard.module.css'

export function UserCard({ user }: UserCardProps) {
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <article className={styles.card}>
      <img className={styles.avatar} src={user.image} alt={fullName} />

      <h2 className={styles.name}>{fullName}</h2>

      <p className={styles.text}>{user.email}</p>
      <p className={styles.text}>{user.company.title}</p>
    </article>
  )
}
