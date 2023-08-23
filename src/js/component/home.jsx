import React from "react";
import PropTypes from "prop-types";


//create your first component
const Home = (props) => {

	return (

          <div className="p-4 g-4 ">
            <div  className="card h-50 mb-3 ">
                <div class="counter">
                    <div id="stopwatch">

                      <div class="container text-center ">
                        {props.counter}
                      </div>

                    </div>

                    <div class="buttons">
    
                      <div className="px-2">
                        <button id="start" className="btn btn-outline-dark"> <i class="fa-solid fa-play"></i> </button>
                      </div>
                            
                      <div className="px=2">
                          <button id="stop" className="btn btn-outline-dark"><i class="fa-solid fa-pause"></i></button>
                      </div>

                    </div>
                </div>
            </div>
          </div>
		
	);
};

Home.propTypes = {
	counter: PropTypes.string
};

export default Home;




// 
