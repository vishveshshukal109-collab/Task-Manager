import express from "express"
import { adminOnly, verifytoken } from "../utils/verifyUser.js"
import { exportTaskReport, exportUsersReport } from "../controller/report.controller.js"

const router = express.Router()

router.get("/export/tasks", verifytoken, adminOnly, exportTaskReport)

router.get("/export/users", verifytoken, adminOnly, exportUsersReport)

export default router