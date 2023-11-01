import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import patientRouter from "./routes/patient.routes.js";
import {swagggerJSDocs} from "../src/libs/swagger.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',patientRouter);
swagggerJSDocs(app,3000);

export default app;