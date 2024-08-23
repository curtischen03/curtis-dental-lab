import Top from './components/scrollmenu.js';
import Footer from './components/footer.js';



const ceramic_services = ['Porcelain to Gold', 'Porcelain to N.P.', 'Porcelain Veneers', 'Porcelain Jacket Crown', 'All Metal Crown N.P.'];
const ceramic_extras = ['Adapt Crown to Partial', 'Porcelain Margins', 'Buccal Metal Margins', 'Guide Planes & Rests', 'Post Coping Internal', 'Post Coping Separate', 'Splitting Abutment Teeth', 'Temporary Crowns, Bridge', 'Metal Occlusal & Lingual'];
const gold_crowns = ['Full Gold Crown', 'Full Gold Inlays', 'Full Gold Onlays', 'Full Gold 3/4 Crown'];
const dentures = ['Full Denture (Upper & Lower)', 'Custom Tray', 'Valpat Denture (8 Teeth)', 'Repairs Simple', 'Relines Upper or Lower', 'Soft Mouth Guard', 'Hard Splint Mouth Guard', 'Vitallium Partial Denture  '];
const stay_plates = ['1 to 3 Teeth', '4 to 6 Teeth', '7-9 Teeth', '10-13 Teeth'];

function UnorderedList({ listItems, pic = [],size}) {
  return (
    <div className='product-container'> 
      <div className='box'>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {pic.map((item, index) => (
        <img src={item} className = 'imageBox' style = {{height:size}}/>
      ))} 
    </div>
  );
}

export default function Home(){
    return (
    <div>
        <div className="top">
        <a className='anchor' id="home"></a>
        <Top />
        </div>
        <h1 className='header'>Products</h1>
        <a className='anchor' id="products"></a>
        <div className="second" id='productCSS'>
        
        <h3>Ceramic Services</h3>
        <UnorderedList listItems={ceramic_services} pic={[`${process.env.PUBLIC_URL}/imgs/dental/12.jpg`]} size={'277px'}/>
        <h3>Ceramic Extras</h3>
        <UnorderedList listItems={ceramic_extras} pic={[`${process.env.PUBLIC_URL}/imgs/dental/21.jpg`]} size={'490px'}/>
        <h3>Gold Crowns</h3>
        <UnorderedList listItems={gold_crowns} pic={[`${process.env.PUBLIC_URL}/imgs/dental/31.jpg`,`${process.env.PUBLIC_URL}/imgs/dental/32.jpg`]} size={'220px'}/>
        <h3>Dentures (Upper or Lower)</h3>
        <UnorderedList listItems={dentures} pic={[`${process.env.PUBLIC_URL}/imgs/dental/41.jpg`]} size={'480px'}/>
        <h3>Stay Plates</h3>
        <UnorderedList listItems={stay_plates} pic={[`${process.env.PUBLIC_URL}/imgs/dental/54.jpeg`]} size={'220px'}/>
        </div>
        <h1 className = 'header'>About Us</h1>
        <a className='anchor' id="about-us"></a>
        <div className="second" id='productCSS'>
        <h3>Our Story</h3>
        <div className = 'product-container'>
            <p style ={{margin:'15px'}}>
            <img src= {`${process.env.PUBLIC_URL}/imgs/dental/62.jpg`} className = 'rounded-image' style = {{padding:'30px'}}/>
            <b>Curtis Dental Laboratory Inc.</b> was founded in 2003 by <b>Sue and Steven Chen </b>  
            as a family-owned business. Steven, a dentist back in China, 
            and Sue brought their expertise to the U.S. to create high-quality
            dental products. Since its inception, the company has expanded 
            to serve over <b>50 dentists</b>, becoming a trusted partner in the 
            dental industry.
            </p>
        </div>        
        </div>
        <div>
        <a className='anchor' id="contact-us"></a>
        <Footer/>
        </div>
    </div>
    );
}