export const capitalize = (str) => {
    if (!str || str.length === 0) return ''
    const lower = str.toLowerCase()
    return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length)
}

export const toSnakeCase = (str) => {
    const parts =
      str
        ?.replace(/([A-Z])+/g, capitalize)
        .split(/(?=[A-Z])|[\.\-\s_]/)
        .map(x => x.toLowerCase()) ?? []
    if (parts.length === 0) return ''
    if (parts.length === 1) return parts[0]
    return parts.reduce((acc, part) => {
      return `${acc}_${part.toLowerCase()}`
    })
  }