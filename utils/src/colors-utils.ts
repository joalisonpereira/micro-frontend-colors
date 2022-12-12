export function emitEvent(
  name: string,
  detail: Pick<CustomEventInit, "detail">
) {
  const customEvent = new CustomEvent(name, { detail });

  dispatchEvent(customEvent);
}

export function listenEvent(
  name: string,
  cb: EventListenerOrEventListenerObject
) {
  window.addEventListener(name, cb);

  return () => window.removeEventListener(name, cb);
}

const randomRgbColor = () => Math.round(Math.random() * 255);

export function randomRgb(
  n1 = randomRgbColor,
  n2 = randomRgbColor,
  n3 = randomRgbColor
) {
  return `rgba(${n1()},${n2()},${n3()})`;
}

export function randomRgba(
  n1 = randomRgbColor,
  n2 = randomRgbColor,
  n3 = randomRgbColor
) {
  return `rgba(${n1()},${n2()},${n3()}, ${Math.random().toFixed(1)})`;
}

export const Metrics = {
  headerHeight: 50,
  containerWidth: 1200,
};
