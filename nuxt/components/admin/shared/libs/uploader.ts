export default () => {
  const { notify } = useQuasar()

  const removedFile = (
    comp: Record<string, any>,
    errors: Record<string, any>,
    index: number,
    field: string,
    subIndex?: number
  ) => {
    if (subIndex !== null && subIndex !== undefined) {
      ;(comp!.props as any)[field][subIndex] = ''

      if (errors.components[index]) {
        errors.components[index].props[field][subIndex] = ''
      }
    } else {
      ;(comp!.props as any)[field] = ''

      if (errors.components[index]) {
        errors.components[index].props[field] = ''
      }
    }
  }

  const failedFile = (
    info: any,
    errors: Record<string, any>,
    index: number,
    field: string,
    componentLoading: boolean,
    subIndex?: number
  ) => {
    const response = JSON.parse(info.xhr.response)

    notify({
      color: 'negative',
      textColor: 'white',
      icon: 'warning',
      message: response.error || 'Упс, произошла ошибка'
    })

    if (subIndex !== null && subIndex !== undefined) {
      if (errors.components[index]) {
        errors.components[index].props[field][subIndex] = response.error
      } else {
        errors.components[index] = {
          props: {
            [field]: []
          }
        }
        errors.components[index].props[field][subIndex] = response.error
      }
    } else {
      if (errors.components[index]) {
        errors.components[index].props[field] = response.error
      } else {
        errors.components[index] = {
          props: {
            [field]: response.error
          }
        }
      }
    }

    componentLoading = false
  }

  const uploadedFile = (
    info: any,
    comp: Record<string, any>,
    errors: Record<string, any>,
    index: number,
    field: string,
    subIndex?: number
  ) => {
    if (subIndex !== null && subIndex !== undefined) {
      ;(comp!.props as any)[field][subIndex] = (JSON.parse(info.xhr.response) as any).files[0].path
      if (errors.components[index]) {
        errors.components[index].props[field][subIndex] = ''
      }
    } else {
      ;(comp!.props as any)[field] = (JSON.parse(info.xhr.response) as any).files[0].path
      if (errors.components[index]) {
        errors.components[index].props[field] = ''
      }
    }
  }

  const createFile = (name: string, needParse = false) => {
    if (needParse) {
      const split = name.split('/')
      const filename = split[split.length - 1]
      name = filename
    }

    return new File([], name, {
      type: 'image/pdf'
    })
  }

  return {
    removedFile,
    failedFile,
    uploadedFile,
    createFile
  }
}
