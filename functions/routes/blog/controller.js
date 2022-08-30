const getAllEntrys = (req, res, connection) => {
    return new Promise(async (resolve, reject) => {
        const data = await connection.query('SELECT * FROM entries')
        resolve(data.rows)
    })
}

export const controller = (req, res, name, connection) => {
    return new Promise((resolve, reject) => {
        switch(name){
            case 'getAllentries':
                getAllEntrys(req, res, connection)
                .then((users) => {
                    resolve(users)
                })
                .catch(err => {
                    const controllerError = {
                        message:    "Error en controlador",
                        status:     500,
                        error:      err.message
                    }
                    reject(new Error(JSON.stringify(controllerError)))
                })
                break;
            default:
                break;
        }
        
    })
}