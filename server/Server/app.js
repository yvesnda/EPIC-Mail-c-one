import express from 'express';
import signup from '../routes/signup';
import login from '../routes/login';
import receivedEmail from '../routes/receivedEmail';
import unread from '../routes/unreadEmails';
import sent from '../routes/sentEmails';
import send from '../routes/sendEmail';
import draft from '../routes/draft';
import singleEmail from '../routes/singleEmail';
const app = express();
app.use(express.json());

app.use('/api/v1/auth/signup', signup );
app.use('/api/v1/auth/login', login);
app.use('/api/v1/messages', receivedEmail);
app.use('/api/v1/messages/unread', unread);
app.use('/api/v1/messages/sent', sent); 
app.use('/api/v1/messages/draft', draft);
app.use('/api/v1/messages/:id', singleEmail); 
app.use('/api/v1/messages', send);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));

export default app;