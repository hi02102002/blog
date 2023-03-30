export const formatName = (s: string) => {
  const result = [];

  for (const _s of s.split(' ')) {
    result.push(upperCaseFirstLetter(_s));
  }

  return result.join(' ');
};

export const upperCaseFirstLetter = (s: string) => {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};
