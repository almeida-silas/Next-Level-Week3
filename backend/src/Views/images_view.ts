import Image from '../Models/Image'

export default {
  render (image: Image) {
    return {
      id: image.id,
      url: `${process.env.HOST}:${process.env.PORT}/uploads/${image.path}`
    }
  },

  renderMany (images: Image[]) {
    return images.map(image => this.render(image))
  }
}
