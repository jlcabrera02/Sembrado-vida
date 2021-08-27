/*Esta funcion time me devuelve el tiempo que ha pasado desde la ultima modificacion del evento*/
export function time(date) {
  let dateNow = new Date().getTime();
  let dateEvent = new Date(date).getTime();
  let timeProcess = dateNow - dateEvent,
    days = Math.floor(timeProcess / (1000 * 60 * 60 * 24)),
    hours = Math.floor(
      (timeProcess % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes = Math.floor((timeProcess % (1000 * 60 * 60)) / (1000 * 60)),
    week = Math.floor(timeProcess / (1000 * 60 * 60 * 24 * 7));

  if (week > 4) {
    return "más de un mes";
  } else {
    if (week > 0) {
      let re = week === 1 ? `${week} semana` : `${week} semanas`;
      return re;
    } else {
      if (days > 0) {
        let re = days === 1 ? `${days} dia` : `${days} dias`;
        return re;
      } else {
        if (hours > 0) {
          let re = hours === 1 ? `${hours} hora` : `${hours} horas`;
          return re;
        } else {
          let re = minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`;
          return re;
        }
      }
    }
  }
}
