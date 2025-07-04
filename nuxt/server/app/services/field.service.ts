import Field from '~/server/app/models/field.model'

export default class FieldService {
  public async findAll() {
    return await Field.findAll({
      attributes: ['fieldId', 'key', 'type', 'content', 'module'],
      raw: true,
      order: [['fieldId', 'ASC']]
    })
  }

  public async findAllByModule(module: string) {
    return await Field.findAll({
      raw: true,
      where: {
        module
      },
      order: [['fieldId', 'ASC']]
    })
  }

  public async updateFields(data: Array<Record<string, any>>) {
    const prepareFields = data.map(field => {
      if (field.type === 'checkbox') {
        field.content = String(Number(field.content) === 1 ? Number(field.content) : 0)
      }
      return field
    })

    await Field.bulkCreate(prepareFields, {
      fields: ['fieldId', 'module', 'key', 'label', 'hint', 'type', 'content'],
      updateOnDuplicate: ['fieldId', 'module', 'key', 'label', 'hint', 'type', 'content']
    })

    return true
  }
}
