import  express  from "express";
import config from './config';
import  PersonasRoute from './routes/product.routes';


const app = express();


//setings
app.set('port', config.port);
//midelwrds
 app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(PersonasRoute)





export default app;