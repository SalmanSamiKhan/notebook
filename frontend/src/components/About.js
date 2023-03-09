// import React from 'react'

// const About = () => {
//   return (
//     <div className='m-3 text-center'>
//       <h2>About Notebook</h2>
//       <div className="my-3">
//         <p>This is an online todolist app. </p>
//       </div>
//     </div>
//   )
// }

// export default About

// import { MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
// import { Helmet } from 'react-helmet-async'

const About = () => {
    return (
        <div className="about-section paddingTB60 my-5">
        {/* <Helmet>
            <title>About</title>
        </Helmet> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-title clearfix">
                            <h2>About <span>Notebook</span></h2>
                            <h3 className='my-3'>Your online note taking app</h3>
                            <h5 className="about-paddingB"> Functionality: </h5>
                            <ul>
                            <li>Add, Delete, Update Note</li>
                            <li>User Signin, Signout option</li>
                            <li>A user must be signed in to use this app</li>
                            <li>One user can not see or modify other users notes</li>
                            </ul>
                            <p> So enjoy your personal online note taking app. Start using this awesome app today and feel free to share your thoughts on this app. </p>
                            <div className="about-icons my-5">
                            <h5 className='my-3'>Contact Us</h5>
                                <ul >
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook fa-xl"></i></a> &nbsp;
                                    <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter fa-xl"></i></a> &nbsp;
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin fa-xl"></i></a> &nbsp;
                                    <a href="mailto:admin@mail.com"><i className="fa-solid fa-envelope fa-xl"></i></a> &nbsp;
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About