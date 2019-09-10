import mockjs from 'mockjs';
export default {
    'GET /api/doctorInformation': mockjs.mock({
        'doctors|8-10': [{ name: '@name', img: "@image(100x100)", id: '@id' }],
    }),
    'GET /api/doctorScheduling':mockjs.mock({
        'Scheduling|8-10': [{ count: '@integer(10, 20)', time:'@datetime("HH:mm:ss")'}],
    })
};