import multer from 'multer'
import path from 'path'

export const uploadConfig = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${file.originalname}`

      callback(null ,fileName)
    }
  })
}

const multerConfig = multer(uploadConfig)

export default multerConfig
