export default class View {
  private template: string

  constructor(template: string) {
    this.template = template
  }

  public build(data: Record<string, string>) {
    for (const key in data) {
      const find = `{{${key}}}`
      this.template = this.template.replace(find, data[key])
    }

    return this.template
  }
}