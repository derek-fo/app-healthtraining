import { Routes, Route } from 'react-router';

import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { NewWorkoutPage } from '../pages/NewWorkout';

//

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/newworkout" element={<NewWorkoutPage />} />
        </Routes>
    );
}