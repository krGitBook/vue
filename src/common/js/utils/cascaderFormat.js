export default (data) => {
  return data.map(i => {
    if (i.children && i.children.length) {
      return {
        value: i.id,
        label: i.name,
        children: cascaderFormat(i.children)
      }
    } else {
      return {
        value: i.id,
        label: i.name
      }
    }
  })
}