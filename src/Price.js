// src/PriceCatalog.js
import React from 'react';
import Footer from './components/footer.js';
const ceramic_services = ['Porcelain to Gold - $45 + Gold', 'Porcelain to N.P. - $45 + Gold', 'Porcelain Veneers - $145', 'Porcelain Jacket Crown - $145', 'All Metal Crown N.P. - $35/ea'];
const ceramic_extras = ['Adapt Crown to Partial', 'Porcelain Margins', 'Buccal Metal Margins - $20', 'Guide Planes & Rests', 'Post Coping Internal - $20', 'Post Coping Separate', 'Splitting Abutment Teeth', 'Temporary Crowns - $35, Bridge', 'Metal Occlusal & Lingual - $20'];
const gold_crowns = ['Full Gold Crown - $45 + Gold', 'Full Gold Inlays - $45 + Gold', 'Full Gold Onlays - $45 + Gold', 'Full Gold 3/4 Crown - $45 + Gold'];
const dentures = ['Full Denture (Upper & Lower) - $113', 'Custom Tray - $19', 'Valpat Denture (8 Teeth) - $164', 'Repairs Simple - $30', 'Relines Upper or Lower - $52', 'Soft Mouth Guard - $30', 'Hard Splint Mouth Guard - $52', 'Vitallium Partial Denture - $164'];
const stay_plates = ['1 to 3 Teeth - $49', '4 to 6 Teeth - $69', '7-9 Teeth - $89', '10-13 Teeth - $99'];

function Ul({ listItems,title}) {
  return (
    <div className='product-container'> 
      <div className='box' style = {{marginLeft:'auto',marginRight:'auto'}}>
        <h1 className = 'price-header'>{title}</h1>
        <ul>
          {listItems.map((item, index) => (
            <li className = 'price-list' key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function Pricing() {
  return (
    <div>
      <h1 className = 'header'>Price Catalog</h1>
        <Ul listItems = {ceramic_services} title = {'Ceramic Services'}/>
        <Ul listItems = {ceramic_extras} title = {'Ceramic Extras'}/>
        <Ul listItems = {gold_crowns} title = {'Gold Crowns'}/>
        <Ul listItems = {dentures} title = {'Dentures'}/>
        <Ul listItems = {stay_plates} title = {'Stay Plates'}/>

      <Footer/>
    </div>

  );
}

export default Pricing;
