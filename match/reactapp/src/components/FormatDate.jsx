// DateFormatter.js
const formatDate = (inputDate) => {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);
  const timeDiff = inputDateObj - currentDate;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30.44 * oneDay; // Approximate number of days in a month

  if (timeDiff < 0) {
    if (timeDiff >= -oneDay) {
      return "Today";
    } else if (timeDiff >= -2 * oneDay && timeDiff < -oneDay) {
      return "Yesterday";
    } else if (timeDiff >= -7 * oneDay && timeDiff < -2 * oneDay) {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return weekdays[inputDateObj.getDay()];
    } else {
      // Format past date with year
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = inputDateObj.toLocaleDateString(undefined, options);

      // Check if the year is different from the current year
      if (currentDate.getFullYear() !== inputDateObj.getFullYear()) {
        return formattedDate;
      } else {
        return formattedDate;
      }
    }
  } else if (timeDiff < oneDay) {
    return "Tomorrow";
  } else if (timeDiff < 2 * oneDay) {
    return `${Math.floor(timeDiff / oneDay)}dys`;
  } else if (timeDiff < oneWeek) {
    return `${Math.floor(timeDiff / oneDay)}dys`;
  } else if (timeDiff < 2 * oneWeek) {
    return `${Math.floor(timeDiff / oneWeek)}wks`;
  } else if (timeDiff < oneMonth) {
    return `${Math.floor(timeDiff / oneWeek)}wks`;
  } else if (timeDiff < 2 * oneMonth) {
    // Calculate the number of months using getMonth
    const monthsDiff =
      inputDateObj.getMonth() -
      currentDate.getMonth() +
      12 * (inputDateObj.getFullYear() - currentDate.getFullYear());
    return `${monthsDiff}mons`;
  } else {
    // Future dates beyond a month
    const options = { year: "numeric", month: "long", day: "numeric" };
    return inputDateObj.toLocaleDateString(undefined, options);
  }
};

export default formatDate;
