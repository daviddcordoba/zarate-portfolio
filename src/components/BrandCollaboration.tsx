import DoveLogo from '../components/brands/dove_brand'
import LorealLogo from '../components/brands/loreal_brand'
import PedidosYaLogo from '../components/brands/pedidosya_brand'
import GarnierLogo from '../components/brands/garnier_brand'
import MaybellineLogo from '../components/brands/maybelline_brand'
import GridoLogo from '../components/brands/grido_brand'
const brands = [
    {
      name: "Marca 1",
      logo: <DoveLogo  />,
    },
    {
      name: "Marca 2",
      logo: <LorealLogo />,
    },
    {
      name: "Marca 3",
      logo: <PedidosYaLogo />
    },
    {
      name: "Marca 4",
      logo: <GarnierLogo />
    },
    {
      name: "Marca 5",
      logo: <MaybellineLogo />
      },
    {
      name: "Marca 6",
      logo: <GridoLogo />
    }
  ]

const BrandCollaboration = () => {
  return (
        <div className="max-w-4xl mx-auto my-12 px-4  ">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold ">
              Marcas con las que he colaborado
            </h2>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity w-[200px] h-[200px] mx-auto">
                  <div className="w-full h-auto mx-auto"> 

                  {brand.logo} {/* // svg */}
                  </div>
                </div>
            ))}       
          </div>
        </div>
  )
}

export default BrandCollaboration