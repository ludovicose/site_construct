import image from './assets/image.png'

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов',
        options:{
            tag:'h2',
            styles:`background: linear-gradient(to right,#ff0099,#493240); color:#fff; text-aligin:center; padding:1.5rem;`
        }
    },
    {
        type: 'text',
        value: "some text"
    },
    {
        type: 'columns',
        value: [
            '1111111',
            '2222222',
            '33333333',
        ]
    },
    {
        type: 'image', value: image
    }
]

