import { createTransport } from "nodemailer"
import Mailgen from "mailgen"
import "dotenv/config"
import { ICartReturn } from "../interfaces/cart"

const sendMail = async ({
  to,
  subject,
  text,
}: {
  to: string
  subject: string
  text: string
}): Promise<void> => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html: text,
  })
}

const getTemplateMail = (to: string, productCart: ICartReturn[]) => {
  const mailGenerator = new Mailgen({
    theme: "salted",
    product: {
      name: "Resumo do seu pedido BEST SHOP.",
      link: "http://localhost:3000",
    },
  })

  const data = productCart.map((product) => {
    return {
      item: product.product.name,
      description: product.product.description,
      amount: product.amount,
      price: product.product.price,
    }
  })

  const total = productCart.reduce(
    (acc, acv) => acc + acv.amount * acv.product.price,
    0
  )

  const email = {
    body: {
      table: {
        data,
      },
      outro: [
        "Total do seu pedido",
        total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      ],
    },
  }

  const emailBody = mailGenerator.generate(email)

  return {
    to,
    subject: "BEST SHOP PEDIDO",
    text: emailBody,
  }
}

export { sendMail, getTemplateMail }
