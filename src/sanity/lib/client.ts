import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, writeToken } from '../env'

// Read client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Write client for mutations
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: writeToken,
})

