import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Resumepdf from '../assets/Resume.pdf'

const Resume = () => (
    <div>
        {Resumepdf}
    <div>
      <h3 className = "pageTitles"> Education </h3>
      <ul>
        <li> Tufts University School of Engineering </li>
        <li> Mamaroneck High School class of 2015 </li>
      </ul>
      <h3 class = "pageTitles"> Professional Experience </h3>
      <h4> Insight Venture Partners internship</h4>
        <ul>
          <li> Aided in reorganizing and implementing a Salesforce database. </li>
          <li> Served as a technology consultant. </li>
          <li> Collected data on a variety of software businesses. </li>
        </ul>
      <h4> Lemus Painting </h4>
        <ul>
          <li> Wrote invoices and kept customer records. </li>
          <li> Painted and did wallpapering. </li>
        </ul>
      <h4> Tech support </h4>
        <ul>
          <li> Installed printers and set up computers. </li>
          <li> Helped create and annotate documents. </li>
        </ul>
      <h4> McDonalds cashier </h4>
        <ul>
          <li> Awarded for providing good service to a mystery shopper. </li>
          <li> Maintained a calm demeanor in an aggressive environment. </li>
          <li> Handled lunch and dinner rushes appropriately. </li>
        </ul>
      <h3 class = "pageTitles"> Skills </h3>
      <ul>
        <li> Programming Languages: C, C++, Java, Matlab </li>
        <li> Languages: English, Spanish </li>
      </ul>
      <h3 class = "pageTitles"> Activities </h3>
        <ul>
          <li> Several side projects developing mobile apps for iOS. </li>
        </ul>
    </div>
    
    </div>
);

export default Resume;