import express, {Request, Response} from 'express';
import cors from 'cors';
import Schedule from './classes/schedule';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const schedules: Schedule[] = [];

app.post('/api/schedule', (request: Request, response: Response) => {
  const { model, year, date, service } = request.body;
  
  const schedule = new Schedule(model, year, date, service);

  schedules.push(schedule);

  return response.json(schedule)
})

app.put('/api/schedule/:id', (request: Request, response: Response) => {
    const { model, year, date, service } = request.body;
    const { id } = request.params;
    const indexSchedule = schedules.findIndex(schedule => schedule.id === parseInt(id));

    if (indexSchedule < 0) {
        return response.status(404).json({
            mensagem: 'Schedule not found'
        })
    }

    schedules[indexSchedule].model = model;
    schedules[indexSchedule].year = year;
    schedules[indexSchedule].date = date;
    schedules[indexSchedule].service = service;

    return response.json(schedules[indexSchedule])

    
});

app.delete('/api/schedule/:id', (request: Request, response: Response) => {
    const { id } = request.params;
    const indexSchedule = schedules.findIndex(schedule => schedule.id === parseInt(id));

    if (indexSchedule) {
        return response.status(404).json({
            mensagem: 'Schedule not found'
        });
    }

    schedules.splice(indexSchedule, 1);
    return response.sendStatus(204)
}) 



const port = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log('listening')
})
