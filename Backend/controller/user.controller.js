import Task from "../models/task.model.js";
import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
try {
    const users = await User.find({role: "user"}).select("-password");
    
    const usersWithTaskCounts = await Promise.all
    (users.map(async (user) => {
        const pendingTasks = await Task.countDocuments({ 
            assignedTo: user._id, 
            status: "pending" });

        const inProgressTasks = await Task.countDocuments({ 
            assignedTo: user._id, 
            status: "in-progress" });

        const completedTasks = await Task.countDocuments({ 
            assignedTo: user._id, 
            status: "completed" });

        return {
            ...user._doc,
            pendingTasks,
            inProgressTasks,
            completedTasks
        };

    }));

    res.status(200).json(usersWithTaskCounts);

} catch (error) {
    next(error);
}

}