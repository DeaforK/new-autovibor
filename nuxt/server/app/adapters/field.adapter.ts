import FieldService from '~/server/app/services/field.service'

const fieldServ = new FieldService()

export default class FieldAdapter {
  public async findAllByModule(module: string) {
    const fields = await fieldServ.findAllByModule(module)
    return {
      fields
    }
  }

  public async updateFields(body: Array<Record<string, any>>) {
    return await fieldServ.updateFields(body)
  }
}
