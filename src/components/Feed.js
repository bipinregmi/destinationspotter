import React, { Component } from "react";
import MainNav from "./MainNavAfterLogin";
import '../assets/css/styles1.css'

class Feed extends Component {
  render() {
    return (
      <div>
        <MainNav></MainNav>

         <div className="container">
        <div className="card border">
            <div className="card-header">
              <h4 style={{float:"left"}}>Location Name</h4>
              <h6 style={{float:"right"}}>Date</h6>
            </div>
            <div className="card-text" style={{paddingLeft:"15px"}}>Here will be the description of the location. Mountain,
                landform that rises prominently above its surroundings, generally
                exhibiting steep slopes, a relatively confined summit area, and considerable 
                local relief. Mountains generally are understood to be larger than hills,
                  but the term has no standardized geological meaning.
            </div>
            <div className="row">
              <div className="column">
          
                <div className="card-img">
                  <img src="https://makeadventurehappen.com/wp-content/uploads/2020/06/Man-hiking-in-the-mountains.jpg" alt="Snow" style= {{width:"100%"}}/>
                </div>
              
              </div>
              <div className="column">
                <div className="card-img">
                  <img src="https://media.nomadicmatt.com/nzguide.jpg" alt="Forest" style= {{width:"100%"}}/>
              
                </div>
              </div>

              <div className="column">
                <div className="card-img">

                  <img src="https://p0.pikist.com/photos/934/505/mountain-summit-peak-top-altitude-high-achievement-climbers-hiking.jpg" alt="Mountains" style= {{width:"100%"}}/>
                </div>
                </div>
          
          </div>
          <div className="card-footer border-bottom">
            <div className="row text-center">
              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Like </h5>

                </button>
              </div>
            

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Dislike </h5>

                </button>
              </div>

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-save fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Save </h5>

                </button>
              </div>
            </div>
            </div>
          </div>

          
          <div className="card border">
            <div className="card-header">
              <h4 style={{float:"left"}}>Location Name</h4>
              <h6 style={{float:"right"}}>Date</h6>
            </div>
            <div className="card-text" style={{paddingLeft:"15px"}}>Here will be the description of the location. Mountain,
                landform that rises prominently above its surroundings, generally
                exhibiting steep slopes, a relatively confined summit area, and considerable 
                local relief. Mountains generally are understood to be larger than hills,
                  but the term has no standardized geological meaning.
            </div>
            <div className="row">
              <div className="column">
          
                <div className="card-img">
                  <img src="https://makeadventurehappen.com/wp-content/uploads/2020/06/Man-hiking-in-the-mountains.jpg" alt="Snow" style= {{width:"100%"}}/>
                </div>
              
              </div>
              <div className="column">
                <div className="card-img">
                  <img src="https://media.nomadicmatt.com/nzguide.jpg" alt="Forest" style= {{width:"100%"}}/>
              
                </div>
              </div>

              <div className="column">
                <div className="card-img">

                  <img src="https://p0.pikist.com/photos/934/505/mountain-summit-peak-top-altitude-high-achievement-climbers-hiking.jpg" alt="Mountains" style= {{width:"100%"}}/>
                </div>
                </div>
          
          </div>
          <div className="card-footer border-bottom">
            <div className="row text-center">
              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Like </h5>

                </button>
              </div>
            

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Dislike </h5>

                </button>
              </div>

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-save fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3"> Save </h5>

                </button>
              </div>
            </div>
            </div>
          </div>


          <div className="card border">
            <div className="card-header">
              <h4 style={{float:"left"}}>Golden Gate Bridge</h4>
              <h6 style={{float:"right"}}>October 21 2020</h6>
            </div>
            <div className="card-text text-secondary" style={{paddingLeft:"15px"}}>Stretching 4,200 feet and towering as high as a 65-story building,
             this well-known bridge is the gateway to San Francisco. Walked across the bridge and back the first Friday of September before 
             the heatwave moved in and the fires got bad. Excellent views from both ends of the bridge, 
             which is about 2.2 miles each way. The views are stunning, but the wind is strong so be prepared. 
             For safety, keep your eyes open for bicyclists and joggers coming up behind you. Also, try to got 
             in the afternoon when there's less chance for fog. Also, due to the virus, the visitor's center was closed however.
            </div>
            <div className="row">
              <div className="column">
          
                <div className="card-img">
                  <img src="https://tile.loc.gov/image-services/iiif/service:pnp:highsm:21100:21132/full/pct:12.5/0/default.jpg#h=614&w=920" alt="Snow" style= {{width:"100%"}}/>
                </div>
              
              </div>
              <div className="column">
                <div className="card-img">
                  <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1Mzg0OTc4NTIyMjUyNzU0/golden-gate-bridge-gettyimages-671734928.jpg" alt="Forest" style= {{width:"100%"}}/>
              
                </div>
              </div>

              <div className="column">
                <div className="card-img">

                  <img src="https://images.squarespace-cdn.com/content/v1/59c4fee7f7e0ab2f78fa4c3f/1534372999560-X08OLH37W1GYHYUPG1C9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/header.jpg?format=1000w" alt="Mountains" style= {{width:"100%"}}/>
                </div>
                </div>
          
          </div>
          <div className="card-footer border-bottom">
            <div className="row text-center">
              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3 text-secondary"> Like </h5>

                </button>
              </div>
            

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3 text-secondary"> Dislike </h5>

                </button>
              </div>

              <div className="col-md-4">
                <button className="button bg-transparent" type="button" style={{border:"none" }}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-save fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="my-3 text-secondary"> Save </h5>

                </button>
              </div>
            </div>
            </div>
            </div>
          </div>







        
</div>
    );
  }
}
export default Feed;


