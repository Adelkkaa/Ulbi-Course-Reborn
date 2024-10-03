type Mods = Record<string, boolean | string>;
export type ClassNamesFn = (
  cls: string,
  mods: Mods,
  additional: string[]
) => string;

export const classNames: ClassNamesFn = (cls, mods, additional) => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls, _]) => cls),
  ].join(" ");
};
