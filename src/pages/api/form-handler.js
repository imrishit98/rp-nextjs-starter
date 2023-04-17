import axios from 'axios';

const contactHandler = async (req, res) => {
  const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_WEBHOOK;

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

export default contactHandler;
