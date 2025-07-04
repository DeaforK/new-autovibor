import { bitrixApi, nodemailerTransportConfig } from '~/server/app/shared/config'

import NodemailerService from '~/server/app/services/integrations/nodemailer.service'
import ViewClass from '~/server/app/classes/view.class'
import { apiFetch } from '~/extensions/fetch'
import fs from 'node:fs'
import page from '~/components/admin/features/pages/page'
import path from 'node:path'

type MessageData = 'consaultation' | 'checkUrl' | 'checkVIN' | 'insurance' | 'help' | 'importCarScheme'
const pages = {
  '': 'Главная',
  'services': 'Услуги',
  'car-delivery': 'Доставить авто из-за рубежа',
  'catalog': 'Каталог моделей',
  'cases': 'Уже подобрали',
  'insurance': 'Страхование',
  'about': 'О нас',
   'car-diagnose': 'Выездная диагностика',
   'car-choise': 'Подбор под ключ',
   'car-check': 'Проверка автомобиля',
   'car-new': 'Подбор нового автомобиля',
   'transaction-support': 'Сопровождение сделки',
   'expert': 'Эксперт на день',
   'osago': 'Осаго',
   'kasko': 'Каско',
   'help-on-road': 'Помощь на дороге',
   'reviews': 'Отзывы'
}

const nodemailerServ = new NodemailerService()

export default class FormAdapter {
  private now() {
    return new Date().toLocaleDateString('ru-RU', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  private prepareFromPage(path: string) {
    try {
      const pagePath = path.split('/')
      pagePath.shift()
      return pagePath.map((path) => {
        // @ts-ignore
        if (pages[path] !== undefined) return pages[path]
        return path
      }).filter(path => path !== null && path !== '').join('/')
    } catch(e) {
      console.log(e)
    }
  }

  private async template(templatePath: string) {
    const template = await fs.promises.readFile(templatePath, 'utf8').catch(error => {
      console.error('HTML шаблон для письма не найден')
      throw error
    })
    return template
  }

  public async sendDefaultMessage(body: Record<string, any>) {
    const templatePath = path.join(process.cwd(), '/server/app/views/mails/request.html')
    const template = await this.template(templatePath)

    const view = new ViewClass(template)
    const html = view.build({
      date: this.now(),
      name: body.name,
      phone: body.phone,
      message: body.message,
      task: body.task
    })

    const preparedFromPage = this.prepareFromPage(body.fromPage)

    await nodemailerServ
      .sendMail({
        html,
        subject: `Заявка на ${preparedFromPage}`,
        config: nodemailerTransportConfig
      })
      .catch(error => {
        throw error
      })

    // await apiFetch(`${bitrixApi}/crm.lead.add.json`, {
    //   query: {
    //     'FIELDS[TITLE]': `Заявка с сайта - ${preparedFromPage}`,
    //     'FIELDS[NAME]': body.name,
    //     'FIELDS[PHONE][0][VALUE]': body.phone,
    //     'FIELDS[COMMENTS]': body.message || '',
    //     'FIELDS[TASK]': body.task || ''
    //   }
    // })
  }

  public async sendSpecialMessage(body: Record<string, any>, type: MessageData) {
    const templatePath = path.join(process.cwd(), '/server/app/views/mails/specialRequest.html')
    const template = await this.template(templatePath)

    let content = ''
    let subject = ''
    if (type === 'checkUrl') {
      subject = 'КОНСУЛЬТАЦИЯ ПО ОБЪЯВЛЕНИЮ'
      content = `
        <p><span class="mini-title">Ccылка на авто:</span> ${body.carUrl}.</p>`
    } else if (type === 'checkVIN') {
      subject = 'Проверка авто по нашей базе'
      content = `
      <p><span class="mini-title">Почта:</span> ${body.email}.</p>
      <p><span class="mini-title">VIN:</span> ${body.VIN}.</p>`
    }
    else if (type === 'insurance') {
      subject = `Рассчитайте стоимость ${body.type}`
      content = `<p><span class="mini-title">Марка:</span> ${body.brand}.</p>
      <p><span class="mini-title">Год выпуска:</span> ${body.yearOfManufacture}.</p>
      <p><span class="mini-title">Прописка:</span> ${body.propiska}.</p>`
    }
    else if (type === 'help') {
      subject = 'ПОМОЩЬ НА ДОРОГЕ'
      content = '' || '-'
    } else if (type === 'importCarScheme') {
      subject = 'ИМПОРТ АВТО'
      content = `
        <p><span class="mini-title">Имя:</span> ${body.name}.</p>
        <p><span class="mini-title">Телефон:</span> ${body.phone}.</p>
        <p><span class="mini-title">Бюджет:</span> ${body.budget}.</p>
        <p><span class="mini-title">Марка и модель:</span> ${body.carModel}.</p>
        <p><span class="mini-title">Год выпуска(от):</span> ${body.yearFrom}.</p>
        <p><span class="mini-title">Комментарий</span> ${body.comment}.</p>
      `
    }

    const view = new ViewClass(template)
    const html = view.build({
      date: this.now(),
      subject,
      name: body.name,
      phone: body.phone,
      content
    })

    const preparedFromPage = this.prepareFromPage(body.fromPage)

    await nodemailerServ
      .sendMail({
        html,
        subject,
        config: nodemailerTransportConfig
      })
      .catch(error => {
        throw error
      })

    const query = {
      'FIELDS[TITLE]': '',
      'FIELDS[NAME]': body.name || '',
      'FIELDS[PHONE][0][VALUE]': body.phone || '',
      'FIELDS[EMAIL][0][VALUE]': '',
      'FIELDS[COMMENTS]': ''
    }

    if (type === 'checkUrl') {
      query['FIELDS[TITLE]'] = `Консультация по объявлению - ${preparedFromPage}`
      query['FIELDS[COMMENTS]'] = `Ccылка на авто: ${body.carUrl}`
    }
    else if (type === 'checkVIN') {
      query['FIELDS[TITLE]'] = `Проверка авто по базе - ${preparedFromPage}`
      query['FIELDS[EMAIL][0][VALUE]'] = body.email
      query['FIELDS[COMMENTS]'] = `VIN: ${body.VIN}`
    }
    else if (type === 'insurance') {
      query['FIELDS[TITLE]'] = `Рассчет стоимости ${body.type}, - ${preparedFromPage}`
      query['FIELDS[COMMENTS]'] = `
        Марка: ${body.brand}; Год выпуска: ${body.yearOfManufacture}; Прописка: ${body.propiska}`
    }
    else if (type === 'help') {
      query['FIELDS[TITLE]'] = `Помощь на дороге - ${preparedFromPage}`
      query['FIELDS[COMMENTS]'] = 'Помощь на дороге'
    } else if (type === 'importCarScheme') {
       query['FIELDS[TITLE]'] = `Импорт авто - ${preparedFromPage}`
       query['FIELDS[COMMENTS]'] = `
       Имя: ${body.name}; Телефон: ${body.phone}; Бюджет: ${body.budget}; Марка и модель: ${body.carModel}; Год выпуска(от): ${body.yearFrom}; Комментарий: ${body.comment}`
    }

    // await apiFetch(`${bitrixApi}/crm.lead.add.json`, {
    //   query
    // })
  }
}
