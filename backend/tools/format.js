module.exports =
{
    respone_api : (_status, _error = {message, name: null}, _data) => {
        return {
            status: _status,
            error : {
                name: _error.name,
                message: _error.message
            },
            data : _data
        }
    }
}