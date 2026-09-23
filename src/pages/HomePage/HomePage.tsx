import { Hero } from '../../styled/Elements'
import Curtain from '../../assets/images/curtain.jpg'
import { PosterList } from '../../components/modules/PosterList/PosterList'

export const HomePage = () => {  
  return (
    <>
      <Hero src={Curtain} />
      <PosterList />
    </>
  )
}
