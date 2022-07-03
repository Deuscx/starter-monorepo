import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@starter-monorepo/utils': r('./packages/utils/src/'),
  '@starter-monorepo/core': r('./packages/core/src/'),
}
