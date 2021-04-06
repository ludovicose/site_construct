import image from './assets/image.png'
import {Block} from "./classes/block";

export const model = [
    new Block('title','Конструктор сайтов',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right,#ff0099,#493240)',
            color: "#fff",
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new Block('image', image,{
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new Block('text','Some text',{
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new Block('columns',[
        '1111111',
        '2222222',
        '33333333',
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
]

