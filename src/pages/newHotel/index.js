import React, {
  useState, useRef, useEffect,
} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { createHotel } from '../../store/actions/newHotel';
import Spinner from '../../components/general/spinner';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './index.scss';

const NewHotel = () => {
  const [formData, setformData] = useState({});
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const [fileObj, setFileObj] = useState([]);
  const loading = useSelector((state) => state.newHotel.loading);
 
  const phoneRegExp =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    country: Yup.string()
      .required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    city:Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"),
    state: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"), 
    street: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"),
    lat:Yup.number()
      .min(-90, ' The North Pole is 90° N')
      .max(90, 'The South Pole is 90° S')
      .required("Required"),
    lng:Yup.number()
      .min(-180, ' The antipodal meridian of Greenwich is both 180°W')
      .max(180, 'The antipodal meridian of Greenwich is both 180°E')
      .required("Required"),
    description:Yup.string()
      .min(100, 'Too Short!')
      .max(500, 'Too Long!')
      .required("Required")
  });

  

  useEffect(() => {
    if (!fileObj || !fileObj[0]) {
      return;
    }
   
    const newImages = Array.from(fileObj[0]).map((el) => ({
      url: URL.createObjectURL(el),
    }));

    setImages(
      images.concat(newImages),
    );
  }, [fileObj && fileObj[0]]);

  const uploadMultipleFiles = (e) => {
    setFileObj([e.target.files]);
    //   this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    // this.setState({ file: this.fileArray });
  };


  return (
    <div className="newHotel">
      <Formik
       initialValues={{ 
         name: '',
         country: '',
         phone: '', 
         city: '',
         state: '',
         street: '',
         lat: '',
         lng: '',
         description: '' }}

       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
        const files = Array.from(fileObj[0]).map((el) => {
          const uploadedData = new FormData();
          uploadedData.append('file', el);
          return uploadedData;
        });
        const data = {
          "name": values.name,
          "description": values.description,
          "phone": values.phone,
          "address": {
            "country": values.country,
            "city": values.city,
            "state": values.state,
            "street": values.street,
            // "address1": values.address1,
            // "address2": values.address2,
            // "zip": 0,
            "location": {
              "latitude": values.lat,
              "longtitude": values.lng,
            }
          }
        }
        console.log(data)
        dispatch(createHotel(data, files));
       }}
     >  
       {props => (
         <form onSubmit={props.handleSubmit} className="newHotel__content">
         <div className="right__block">
           <div className="newHotel__title">Please describe your hotel:</div>
           <div className="hotel__descr">
             <div className="details">
               <input 
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name} 
                  type="text" 
                  name="name" 
                  placeholder="Name*" 
                  className="name_input" 
                  required />
                  {props.errors.name && props.touched.name && <div id="feedback">{props.errors.name}</div>}
               <div className="country__phone">
                 <select 
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.country} 
                      name="country" 
                      className="select__country" 
                      required>   
                   <option value=""> Select country</option>
                   <option value="Turkey">Turkey</option>
                   <option value="Egypt">Egypt</option>
                   <option value="Georgia">Georgia</option>
                 </select>
                 {props.errors.country && props.touched.country && <div id="feedback">{props.errors.country}</div>}
                 <input 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone} 
                    type="text"
                    name="phone" 
                    placeholder="Contact Phone*"
                    className="phone_input"
                    required />
                    {props.errors.phone && props.touched.phone && <div id="feedback">{props.errors.phone}</div>}
               </div>
               <div className="city__region">
                 <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.city}
                    type="text" 
                    name="city" 
                    placeholder="City*" 
                    className="city_input" 
                    required />
                    {props.errors.city && props.touched.city &&<div id="feedback">{props.errors.city}</div>}
                 <input 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.state} 
                    type="text"
                    name="state"
                    placeholder="Region/State" 
                    className="region_input" 
                    required />
                    {props.errors.state && props.touched.state && <div id="feedback">{props.errors.state}</div>}
               </div>
               <div className="location">
                 <input 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.street}
                    type="text"
                    name="street" 
                    placeholder="Street"
                    className="street_input" 
                    required />
                    {props.errors.street && props.touched.street && <div id="feedback">{props.errors.street}</div>}
                 <input 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lat} 
                    type="text" 
                    name="lat" 
                    placeholder="Location lat"
                    className="lat_input" 
                    required />
                    {props.errors.lat && props.touched.lat && <div id="feedback">{props.errors.lat}</div>}
                 <input 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lng} 
                    type="text" 
                    name="lng" 
                    placeholder="Location lng"
                    className="lng_input"
                    required />
                    {props.errors.lng && props.touched.lng && <div id="feedback">{props.errors.lng}</div>}
               </div>
               <div className="more__aboutHotel">
                 <textarea 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.description} 
                    name="description" 
                    placeholder="Hotel description*"
                    rows="5"  
                    required />
                    {props.errors.description && props.touched.description &&  <div id="feedback">{props.errors.description}</div>}
               </div>
             </div>
           </div>
  
           <div className="hotel__imgs">
             {images.map((el) => (
               <div className="img__block">
                 <i className="far fa-window-close cancelIcon" />
                 <img src={el.url} className="cancelImg" alt="" />
               </div>
             ))}
           </div>
 
           <div className="upload__btn">
             {/* <button type="submit" className="upload__imgs"> Upload Images</button> */}
   
             <input type="file" name="fileFind" className="forUpload" onChange={uploadMultipleFiles} id="fileFind" multiple required  />
             <label htmlFor="fileFind">Choose a file</label>
           </div>
           <div className="newHotel__btn">
             <button type="submit" className="confirm__btn">Confirm</button>
           </div>
         </div>
 
         <div className="required__fields">
           <div className="required">*required fields</div>
         </div>
       </form>
       )}
     </Formik>


      {/* <form onSubmit={confirm} className="newHotel__content">
        <div className="right__block">
          <div className="newHotel__title">Please describe your hotel:</div>
          <div className="hotel__descr">
            <div className="details">
              <input onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[el.name]} type="text" name="name" placeholder="Name*" className="name_input" required />
              <div className="country__phone">
                <select onChange={(e) => updateAddress('country', e.target.value)} name="country" className="select__country" required>
                  <option value=""> Select country</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Georgia">Georgia</option>
                </select>
                <input onChange={(e) => updateDataGeneral('phone', e.target.value)} type="text" name="phone" placeholder="Contact Phone*" className="phone_input" required />
              </div>
              <div className="city__region">
                <input onChange={(e) => updateAddress('city', e.target.value)} type="text" name="city" placeholder="City*" className="city_input" required />
                <input onChange={(e) => updateAddress('state', e.target.value)} type="text" name="region" placeholder="Region/State" className="region_input" required />
              </div>
              <div className="location">
                <input onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[el.name]} type="text" name="street" placeholder="Street" className="street_input" required />
                <input onChange={(e) => updateLocation('latitude', e.target.value)} type="text" name="lat" placeholder="Location lat" className="lat_input" required />
                <input onChange={(e) => updateLocation('longtitude', e.target.value)} type="text" name="lng" placeholder="Location lng" className="lng_input" required />
              </div>
              <div className="more__aboutHotel">
                <textarea onChange={(e) => updateDataGeneral('description', e.target.value)} name="details__description" placeholder="Hotel description*" rows="5" required />
              </div>
            </div>
          </div>
 
          <div className="hotel__imgs">
            {images.map((el) => (
              <div className="img__block">
                <i className="far fa-window-close cancelIcon" />
                <img src={el.url} className="cancelImg" alt="" />
              </div>
            ))}
          </div>

          <div className="upload__btn">
            {/* <button type="submit" className="upload__imgs"> Upload Images</button> */}
  
            {/* <input type="file" name="fileFind" className="forUpload" onChange={uploadMultipleFiles} id="fileFind" multiple required  />
            <label htmlFor="fileFind">Choose a file</label>
          </div>
          <div className="newHotel__btn">
            <button type="submit" className="confirm__btn">Confirm</button>
          </div>
        </div>

        <div className="required__fields">
          <div className="required">*required fields</div>
        </div>
      </form> */} 
      {loading
        ? (
          <div className="spinnerBackground">
            <div className="spinner">
              <Spinner />
            </div>
          </div>
        ) : null}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

    </div>
  );
};

export default NewHotel;
