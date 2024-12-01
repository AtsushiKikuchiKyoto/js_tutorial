function dayName(date){
  const dayOfTheWeek = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];
  return dayOfTheWeek[date.getDay()];
}

function greeting(date){
  return `hello, world! Have a nice ${dayName(date)}`;
};