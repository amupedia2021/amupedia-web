import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const ComingSoon = () => {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center'}} className='img'>
        <Image
          src="/images/Fast-Time/fast-time.png"
          width={420}
          height={400}
          alt="Picture of the author"
          priority={true}
        />
      </div>
      <h1 style={{textAlign:'center',fontSize:'60px',fontWeight:'initial'}}>
        Coming Soon 
      </h1>
      <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}} className='img'>
        <Link href="/"><button style={{backgroundColor:'#3e3efc', color: '#fff',border:'none',height:'45px',width:'150px'}}>Learn More</button></Link>
      </div>
    </div>
  )
}

export default ComingSoon
