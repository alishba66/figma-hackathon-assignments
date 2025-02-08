import Hero4 from '../components/Hero4'

const Hero5 = () => {
  return (
    <div>
      <div className='text-center text-2xl font-bold text-[#151875] pt-28'>
        What Shopex Offer!
      </div>
      <div className='flex flex-wrap justify-center gap-4 pt-10'>
        {/* Hero4 - Image 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <Hero4 
            ImageUrl='/s1.png' 
            heading='24/7 Support' 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' 
          />
        </div>

        {/* Hero4 - Image 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <Hero4 
            ImageUrl='/s2.png' 
            heading='Fast Shipping' 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' 
          />
        </div>

        {/* Hero4 - Image 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <Hero4 
            ImageUrl='/s3.png' 
            heading='Easy Returns' 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' 
          />
        </div>

        {/* Hero4 - Image 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <Hero4 
            ImageUrl='/s4.png' 
            heading='Secure Payment' 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' 
          />
        </div>
      </div>
    </div>
  )
}

export default Hero5
