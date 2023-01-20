const cloudinary = require('cloudinary').v2
const { variables: {cloud_name, api_key_cloud, api_secret_cloud} } = require('../../../config')
const fs = require('fs')
const { logger } = require('../../helpers/logger')

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key_cloud,
    api_secret: api_secret_cloud
})
const save = async (photo) => {
    let objResult = {}
    await cloudinary.uploader.upload(photo.tempFilePath)
        .then(result => {
            objResult.url = result.url,
                objResult.id = result.public_id
        })
        .then(() => fs.unlink(photo.tempFilePath, (err) => {
            if (err) throw err;
            logger.info('File deleted: ' + photo.tempFilePath);
        }))
    return objResult
}

const destroy = async (data) => {    
        for (let index = 0; index < data.length; index++) {
            data[index] && cloudinary.uploader.destroy(data[index]);
        }  
}


module.exports = { save, destroy }