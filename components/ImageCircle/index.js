import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import styles from './ImageCircle.module.css';

const ImageCircle = ({ alt, src = 'public/images/iphone_11_pro_max.png', padding = 15 })  => {
  const [image, setImage] = useState(null)
  useEffect(() => {
    // TODO
    // import(src).then((module) => setImage(module.default))
    import('public/images/iphone_11_pro_max.png').then((module) => setImage(module.default))
  }, [src])

  const coefficient = useMemo(() => (
    image && (250 - 2 * padding) / Math.sqrt(
      Math.pow(image.height, 2) + Math.pow(image.width, 2)
    )
  ), [image, padding])

  return (
    <div className={styles.circle}>
      {image && (
        <Image
          alt={alt}
          src={image.src}
          width={coefficient * image.width}
          height={coefficient * image.height}
        />
      )}
    </div>
  )
}

export default ImageCircle
