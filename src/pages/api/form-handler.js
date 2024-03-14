/**
 * this handler is a sample form handler that can be used and customized for real projects.
 */
import axios from 'axios';

const formHandler = async (req, res) => {
  const webhookUrl = '';
  //const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_WEBHOOK;

  const config = {
    method: req.method,
    url: webhookUrl,
    data: req.body,
  };

  try {
    const response = await axios(config);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default formHandler;
