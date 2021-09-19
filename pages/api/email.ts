import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_ACCESS_TOKEN,
} from '../../constants/env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, message } = JSON.parse(req.body);

  try {
    const body = {
      service_id: EMAILJS_SERVICE_ID,
      user_id: EMAILJS_USER_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      accessToken: EMAILJS_ACCESS_TOKEN,
      template_params: {
        first_name: firstName,
        last_name: lastName,
        user_email: email,
        message: message,
      },
    };

    const emailJsRes: any = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify(body),
    });

    const text = emailJsRes.text();

    res.status(200).send({
      result: text,
      message: 'Email submitted',
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: 'Email not sent' });
  }
}
