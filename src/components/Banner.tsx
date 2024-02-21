import PhotoBanner from '/imagens/foto-banner.png';

export default function Banner() {
  return (
    <div className="bg-banner-img w-[1132px] h-[339px] rounded-[10px]">
        <div className="flex items-center justify-between px-5 py-2">
            <div className='w-[580px]'>
                <h1 className="text-2xl font-inter italic font-medium text-justify">“Quando te oferencem um assento em um foguete, você não pergunta qual assento. Você simplesmente embarca.”</h1>
                <p className="text-lg font-inter text-center pt-3">-Eric Schmidt, Google</p>
            </div>
            <img src={PhotoBanner} alt="Foto do Banner" />
        </div>
    </div>
  )
}
