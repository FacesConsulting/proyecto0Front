import { NextApiRequest, NextApiResponse } from 'next/types'

export default async function callback (
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Se entro al callback')
  // Manejar la respuesta del servidor y devolver una respuesta adecuada al cliente
  const re = await req.body
  console.log(re)
  //   if (error) {
  //     console.log('error' + error)
  //     res.status(status).json({ error: error.code })
  //   } else {
  //     res.redirect('/')
  //   }
}
