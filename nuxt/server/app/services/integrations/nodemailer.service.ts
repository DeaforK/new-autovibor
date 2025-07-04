import nodemailer from 'nodemailer'

export type SendMailData = {
  subject: string
  html: string
  config: Record<string, any>
}

export default class NodemailerService {
  public async sendMail(payload: SendMailData) {
    const transporter = nodemailer.createTransport(payload.config)

    const mailOptions = {
      from: payload.config.user,
      to: 'autovibor196@gmail.com, k3hes@mail.ru, autohelp96@bk.ru, dianq86@gmail.com, k3hes@yandex.ru',
      subject: payload.subject,
      html: payload.html
    }

    return await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error)
        }
        resolve(info)
      })
    })
  }
}
