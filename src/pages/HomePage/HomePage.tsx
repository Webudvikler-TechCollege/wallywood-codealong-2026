import { Hero } from '../../styled/Elements'
import Curtain from '../../assets/images/curtain.jpg'
import { PosterList } from '../../components/modules/PosterList/PosterList'
import { ContentWrapper } from '../../layout/ContentWrapper'

export const HomePage = () => {  
  return (
    <>
    <Hero src={Curtain} />
    <ContentWrapper pagetitle='Forside'>
      <PosterList mode="random" />
    </ContentWrapper>
    </>
  )
}
