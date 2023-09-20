'use client'

import {create} from './actions'

export default function Page() {
    const handleAction = async (data) => {
      try {
        await create(data)
        window.location = 'https://www.sevansolutions.com/'

      } catch (error) {
        console.error(error.message)
      }
    }
      return (
        <body>
        <div className="container">
            <form action={create}>
                <h1 className='text-txt-green-color text-[51.5px] md:text-[61.5px] font-bold font-sans text-center'>SERVICE REQUEST FORM</h1>
                <hr></hr>
                <div className="row">
                  <div className="col-25">
                  <label htmlFor="first">FIRST NAME:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" name='first' placeholder="First Name.." required>  

                    </input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                  <label htmlFor="last">LAST NAME:</label>
                  </div>
                  <div className="col-75">
                    <input type="text" name='last' placeholder="Last Name.." required>  

                    </input>
                  </div>
                </div>
              <div className="row">
                <div className="col-25">
                <label htmlFor="company">COMPANY NAME:</label>
                </div>
                <div className="col-75">
                  <input type="text" name="company" placeholder="Company Name.." required>  

                  </input>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                <label htmlFor="phone">PHONE NUMBER:</label>
                </div>
                <div className="col-75">
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Example: 123-456-789" required>  

                  </input>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                <label htmlFor="email">EMAIL:</label>
                </div>
                <div className="col-75">
                  <input type="email" name ="email" placeholder="Email.." required>  

                  </input>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor='scanner'>TYPE OF SERVICE:</label>
                  <h6>(select all that apply)</h6>
                </div>
                <div className="col-75">
                <input type="checkbox" name="scanning" id="myCheckbox1"></input>
                <label htmlFor="myCheckbox1"><img
                    src="https://datumtechsolutions.com/cdn/shop/products/leica-rtc360-3d-laser-scanner-621950.jpg?v=1624021407"
                    className="scanner" id="scanner"></img>
                  <h6 className='sub-text' id="laser_scanning">LASER SCANNING</h6>
                </label>
                <input type="checkbox" name="drone" id="myCheckbox2"></input>
                <label htmlFor="myCheckbox2"><img src="https://www3.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png"
                    id="drone"></img>
                  <h6 className='sub-text' id="drone_survey">DRONE SURVEY</h6>
                </label>
                <input type="checkbox" name="building" id="myCheckbox3"></input>
                <label htmlFor="myCheckbox3"><img
                    src="https://www.creativefabrica.com/wp-content/uploads/2021/04/17/Completed-Checklist-Icon-Graphics-10959291-1-580x386.jpg"
                    id="building"></img>
                  <h6 className='sub-text' id="building_assessment">Facility Conditions Assessments</h6>
                </label>
                </div>
                <div className="row">
                  <div className="col-75">
                    <input type="checkbox" name="cad" id="myCheckbox4"></input>
                    <label htmlFor="myCheckbox4"><img
                        src="http://sevansolutions.s3.amazonaws.com/360survey/images/2d_FloorPlan_Image.JPG" id="_2d"></img>
                      <h6 className='sub-text' id="2d_cad">2D CAD AS-BUILT</h6>
                    </label>
                    <input type="checkbox" name= "revit" id="myCheckbox5"></input>
                    <label htmlFor="myCheckbox5"><img src="https://sevansolutions.s3.amazonaws.com/360survey/images/Revit_Image.JPG"
                        id="_3d"></img>
                      <h6 className='sub-text' id="3d_revit">3D REVIT AS-BUILT</h6>
                    </label>
                    <input type="checkbox" name="tour" id="myCheckbox6"></input>
                    <label htmlFor="myCheckbox6"><img
                        src="https://assets.klapty.com/uploads/homesection/thumbnail_1613494775-88627281.png" id="virtual_tour"></img>
                      <h6 className='sub-text' id="vt">360 VIRTUAL TOUR</h6>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="sites">NUMBER OF SITES TO BE SURVEYED:</label>
                </div>
                <div className="col-75">
                  <input type="number" id="num_sites" name="sites" placeholder="Enter a number.."
                    className='h-[75px]' required/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="project">BRIEF DESCRIPTION OF PROJECT:</label>
                </div>
                <div className="col-75">
                  <textarea id="project_description" name="project" placeholder="Description.."
                    className='h-[75px]' required></textarea>
                </div>
              </div>
              <div className="row">
                <input type="submit" value="Submit"></input>
              </div>
              <div className="row">
                <h6 className="text-xs text-center text-black">By submitting this form, you consent for us to process your information. The information you provide will be used in accordance with the terms of our <a href = "https://www.sevansolutions.com/privacy-policy/?ref=contentform"><h6 className='background-blue'>Privacy Policy.</h6></a></h6> 
              </div>

              <a href = 'https://www.sevansolutions.com/' target="_blank"><img src="https://www.sevansolutions.com/wp-content/uploads/2022/04/Sevan-logo.svg" alt="Sevan Logo" id="logo"></img></a>
            </form>
        </div>
      </body>
      )
    }