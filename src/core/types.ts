export interface Animoid {
  metadata: Metadata
  bones: Bone[]
}

export interface Metadata {
  name: string
  hash: string
  version: string
  width: number
  height: number
}

export interface Bone {
  name: string
  x: number
  y: number
  rotation: number
  parent?: Bone
}
