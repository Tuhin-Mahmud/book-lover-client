
export const GetCurrentDateTime = () => {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDay = days[now.getDay()];         // Current day (e.g., Monday)
    const currentMonth = months[now.getMonth()];   // Current month (e.g., January)
    const currentDate = now.getDate();             // Current date (day of the month)
    const currentYear = now.getFullYear();         // Current year (e.g., 2024)

    return `  ${currentMonth} ${currentDate}, ${currentYear}, ${currentTime}.`;
};

export default GetCurrentDateTime;