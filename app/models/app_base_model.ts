import { BaseModel } from '@adonisjs/lucid/orm'
import { CamelCaseNamingStrategy } from '@adonisjs/lucid/orm'

export interface StoredFile {
  fileName: string
  filePath: string
  mimeType: string
  size: number
  url: string | null
  disk: string
}

export default class AppBaseModel extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  public getLogMetadata(): Record<string, any> {
    return {}
  }
}
