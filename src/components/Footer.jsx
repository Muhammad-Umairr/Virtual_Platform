import {resourcesLinks,platformLinks,communityLinks} from '../constants/index'

const Footer = () => {
  return (
    <div className='mt-20 border-t border-neutral-500 py-10'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-md font-semibold mb-4 '>Resouces</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                        <li key={index} className=''>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4 '>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                        <li key={index} className=''>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4 '>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                        <li key={index} className=''>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer