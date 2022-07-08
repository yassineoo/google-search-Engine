
export default function Avatar({image,className}) {
  return (
    <img
        src={image}
        loading = 'lazy'
        alt='Profile image '
        className={`rounded-full h-10 object-contain
        cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  )
}
