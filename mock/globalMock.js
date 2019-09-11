import mockjs from 'mockjs';
export default {
    'GET /api/doctorInformation': mockjs.mock({
        'doctors|8-10': [{ name: '@name', img: "@image(100x100)", id: '@id' }],
    }),
    'GET /api/doctorScheduling': mockjs.mock({
        'Scheduling|8-10': [{ count: '@integer(10, 20)', time: '@datetime("HH:mm:ss")' }],
    }),
    'GET /api/patientInformation': mockjs.mock({
        'Patient|8-10': [{ id: '@id', name: '@name', phone: '@id', age: '@integer(10, 20)' }],
    }),
    'POST /api/postPatient': mockjs.mock({
        'Message': 'success',
    }),
    'GET /api/allDoctordoctorScheduling': mockjs.mock({
        'doctors|10-20': [
            {
                title: '@cname',
                'doctor|10-20': [
                    {
                        id: '@id',
                        time: '@datetime("HH:mm:ss")',
                        children: '@cname',
                    }
                ]
            }
        ]
    })
};