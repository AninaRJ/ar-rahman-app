import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', {
        title: 'About A R Rahman',
        content: 'A R Rahman is an Indian composer, singer and music producer who has worked in the Indian film industry and internationally. He is known for his unique sound and has won numerous awards, including two Academy Awards, two Grammy Awards, and a BAFTA Award. His contributions to music have made him one of the most celebrated composers in the world.'
    });
});

export default router;