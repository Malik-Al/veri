const conf = require('./std/conf');
const restApi = require('./std/rest-api');
const axios = require('axios').default;
const { Error } = require('./std/errors');
const log = require('./std/log');

const p = (obj) => JSON.stringify(obj, null, 4);

async function sendToInfome (urlParams, bodyParams, headerParams, accessMode, refId, callback) {
    log.info(`Пришел запрос ${p(bodyParams)}`, refId);
    const id = bodyParams.receivingId ? bodyParams.receivingId : bodyParams._id
    let msg = {
        i: id,
        p: bodyParams.requisite,
        b: bodyParams.text,
        o: 0,                                       // priority, always 0
        t: 2                                        // type always 2 for informational messages
    };

    try {
        //нужно дописать логику работы
        log.debug(`Отправляю запрос на INFOME ${p(msg)}`, refId);
        
        const { data } = await axios.post(conf.main.infoMeUrl, msg);

        log.debug(`Ответ от INFOME: ${p(data)}`, refId);

        callback(null, { id, status: data.r, code: data.r }, 200);

        log.info("Отправка сообщения завершена успешно", refId);
    } catch (error) {
        new Error(error, "Ошибка при отправке сообщения в InfoMe", refId).log()
        callback(null, { message: "Ошибка" }, 400);
    }
}

restApi.apiFuncs['sendToInfome'] = sendToInfome;