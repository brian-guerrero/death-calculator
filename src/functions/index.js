import moment from "moment";

export const calculateTimeLived = (birthDate, deathDate) => {
    const birth = moment(birthDate);
    const death = moment(deathDate);
    const yearsLived = death.diff(birth, "years");
    const monthsLived = death
        .subtract(yearsLived, "years")
        .diff(birth, "months");
    const daysLived = death
        .subtract(monthsLived, "months")
        .diff(birth, "days");
    return `Lived for ${yearsLived} years, ${monthsLived} months, and ${daysLived} days.`;
}

export const calculateDeathDate = (birthDate, timeLived) => {
    const death = moment(birthDate)
        .add(this.state.timeLived.years, "years")
        .add(this.state.timeLived.months, "months")
        .add(this.state.timeLived.days, "days")
        .format("dddd, MMMM Do YYYY");
    return `Died on ${death}.`;
}

export const calculateBirthDate = (deathDate, timeLived) => {
    const death = moment(deathDate);
    const birth = death
        .subtract(this.state.timeLived.years, "years")
        .subtract(this.state.timeLived.months, "months")
        .subtract(this.state.timeLived.days, "days")
        .format("dddd, MMMM Do YYYY");
    return `Born on ${birth}.`;
}