import { getNhostSession as get, NhostClient } from '@nhost/nextjs'
import { GetServerSidePropsContext } from 'next'

const { NEXT_PUBLIC_NHOST_BACKEND_URL } = process.env

export const nhost = new NhostClient({
  backendUrl: NEXT_PUBLIC_NHOST_BACKEND_URL,
})

export const getNhostSession = async (context: GetServerSidePropsContext) =>
  get(NEXT_PUBLIC_NHOST_BACKEND_URL, context)
