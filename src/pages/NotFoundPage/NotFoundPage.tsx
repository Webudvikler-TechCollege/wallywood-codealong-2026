import { Hero } from '../../styled/Elements'
import Curtain from '../../assets/images/curtain.jpg'

export const NotFoundPage = () => {  
  return (
    <>
      <Hero src={Curtain} />
      Siden findes ikke!
    </>
  )
}
