import { useEffect, useState } from 'react'

export type Certificate = {
  title: string
  file: string
  category: 'Hard Skill' | 'Soft Skill'
}

export function useCertificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/certificates/certificatesData.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load certificates data')
        return res.json() as Promise<Certificate[]>
      })
      .then((data) => {
        setCertificates(data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { certificates, loading, error }
}
