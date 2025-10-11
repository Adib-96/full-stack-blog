import { IKImage } from "imagekitio-react";

const Image = ({src,classname,w,h,alt}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={src}
    className={classname}
    loading="lazy"
    lgip={{active:true,quality:20}}
    alt={alt}
    width={w}
    height={h}
    />
  )
}

export default Image