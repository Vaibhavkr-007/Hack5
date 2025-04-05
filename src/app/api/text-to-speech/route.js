// pages/api/textToSpeech.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { text } = req.body;
  
        // Make a request to the external text-to-speech service
        const response = await fetch('http://127.0.0.1:5000/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        });
  
        // Check if the request was successful
        if (!response.ok) {
          return res.status(response.status).json({ error: 'Error from text-to-speech service' });
        }
  
        const data = await response.json(); // Parse the response
  
        // Return the audio path to the client
        res.status(200).json({ audioPath: data.audioPath });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong with the request' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  