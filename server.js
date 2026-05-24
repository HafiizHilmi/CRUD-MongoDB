require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const dosenRoutes = require('./routes/dosenRoutes');
const mataKuliahRoutes = require('./routes/mataKuliahRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/dosen', dosenRoutes);
app.use('/api/matakuliah', mataKuliahRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));