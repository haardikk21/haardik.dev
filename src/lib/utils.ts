import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeSince(timeStamp: Date) {
  const now = new Date();
  const secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  if (secondsPast < 60) {
    return secondsPast + 's ago';
  }
  if (secondsPast < 3600) {
    return Math.floor(secondsPast / 60) + 'm ago';
  }
  if (secondsPast <= 86400) {
    return Math.floor(secondsPast / 3600) + 'h ago';
  }
  if (secondsPast > 86400) {
    const day = timeStamp.getDate();
    const month = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/)![0]
      .replace(' ', '');

    const year =
      timeStamp.getFullYear() == now.getFullYear()
        ? ''
        : ' ' + timeStamp.getFullYear();
    return 'on ' + day + ' ' + month + year;
  }
}

export function abbreviateNumber(value: number) {
  let newValue = value.toString();
  if (value >= 1000) {
    const suffixes = ['', 'k', 'm', 'b', 't'];
    const suffixNum = Math.floor(('' + value).length / 3);
    let shortValue = 0;

    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision),
      );

      let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = parseFloat(shortValue.toFixed(1));
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}
