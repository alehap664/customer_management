import moment from 'moment';

const mapModifiers = (
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string => {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
};

export const createId = (index: number): string => {
  const prefix = moment().format('YYYYMMDD');

  return prefix + `${index + 1}`.padStart(4, '0');
};

export default mapModifiers;
