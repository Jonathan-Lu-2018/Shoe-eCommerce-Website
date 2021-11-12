import React from "react";



function Home() {
  return (
    <div className="App">
      <section id="introduction">
           <div class="container">
               <div class="row fill-viewport align-items-center">
                   <div class="col-12 col-md-6">
                       <h1 class="text-white">Welcome to Galaxy Shoes</h1>
                       <p class="lead text-white-70">Explore the largest collection of shoes ranging from all brands</p>
                       <a class="btn btn-primary" href="/signup.js" role="button">Sign up today!</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="feature-rundown">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 col-md-6 mx-auto mt-5 text-center">
                        <h6 class="text-black-40 text-uppercase">
                            The Ultimate Shoe Store
                        </h6>
                        <h3 class="text-black-70">Find the best outfit for your feet!!!</h3>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-12 col-md-4 text-center">
                        <img src="https://i.pinimg.com/originals/d2/2c/d4/d22cd44291102f5f8861153e1ec287e1.jpg" class="mt-4"/>
                        <p>
                            <strong class="text-info">All Seasons</strong>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <img src="https://cdn.shopify.com/s/files/1/0150/2598/products/AirJordan5RagingBullMen1_clipped_rev_1_1600x.jpg?v=1626793202" class="mt-4"/>
                        <p>
                            <strong class="text-info">Stylish</strong>
                        </p>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <img src="https://i.pinimg.com/564x/50/d2/f3/50d2f35b7193cea1e69510e094ab7f40.jpg" class="mt-4"/>
                        <p>
                            <strong class="text-info">Sports</strong> 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id = "footer" class= "bg-dark">
            <div class= "container">
                <div class= "row fill-40-viewport py-5 text-white-70 align-items-center">
                    <div class = "col-12 col-md-6">
                        <ul class= "list-unstyled">
                            <li><h6 class= "text-white">ABOUT</h6></li>
                            <li> A new platform for finding shoes for youngsters</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
</div>
  );
}

export default Home;

