import Image from 'next/image'

export default function MediaImage({media, isPriority}) {
    if (!media.data.attributes) {
        return null;
    }

    const keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    const triplet = (e1, e2, e3) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63)

    const rgbDataURL = (r, g, b) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${
            triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

    const image = media.data.attributes.url;
    const alternativeText = media.data.attributes.alternativeText;

    return (
        <Image
            src={image.split('/').pop()}
            placeholder="blur"
            blurDataURL={rgbDataURL(237, 181, 6)}
            alt={alternativeText}
            priority={isPriority}
            layout='responsive'
            width={16}
            height={9}
            className='w-100 h-100 object-fit-cover'
        />
    )
}
