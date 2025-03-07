const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

export default formatTime