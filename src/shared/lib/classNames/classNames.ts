export function classNames(
    cls: string,
    additional: string[] = [],
    mods: Record<string, boolean> = {}
  ): string {
    return [
      cls,
      ...additional.filter(Boolean),
      ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
    ].join(' ');
  }