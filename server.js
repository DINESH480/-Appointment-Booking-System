const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let appointments = [];

// Get all appointments
app.get('/appointments', (req, res) => {
    res.json(appointments);
});

// Add a new appointment
app.post('/appointments', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    console.log('New appointment added:', appointment);  // Log the new appointment details
    res.status(201).json({ message: 'Appointment booked successfully!' });
});

// Delete an appointment
app.delete('/appointments/:index', (req, res) => {
    const { index } = req.params;
    console.log('Appointment deleted:', appointments[index]);  // Log the deleted appointment details
    appointments.splice(index, 1);
    res.json({ message: 'Appointment deleted successfully!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
