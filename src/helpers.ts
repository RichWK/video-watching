export const convertToUrl = ( name: string ): string => {
  return name.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ","-")
}
  
export const removeSpecialCharacters = ( name: string ): string => {
  return name.replaceAll(/[^a-zA-Z0-9 ]/g, "")
}

