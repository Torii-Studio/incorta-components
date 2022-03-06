export function getFormattedDate(date: any) {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

export const getRectDimensions = (elem: any) => {
  const dimensions = elem.getBoundingClientRect();
  const { x, y, height, width, top } = dimensions;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    x,
    y,
    height,
    width,
    top: top + scrollTop
  };
};
